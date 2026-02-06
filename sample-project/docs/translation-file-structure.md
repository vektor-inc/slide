# 翻訳ファイルの構造と参照関係

## 概要

WordPressでは、**PHPの翻訳**と**JavaScriptの翻訳**で異なるファイル形式を使用します。

## ファイルの役割

### `.pot`ファイル（テンプレート）
- **役割**: 翻訳が必要な文字列のテンプレート
- **内容**: `msgid`のみ（`msgstr`は空）
- **生成**: `npm run build:i18n:pot` または `wp i18n make-pot`
- **用途**: 翻訳者への配布用、新しい文字列の検出

### `.po`ファイル（翻訳ソース）
- **役割**: 実際の翻訳が記述されたファイル
- **内容**: `msgid`と`msgstr`（翻訳）
- **編集**: 手動で翻訳を追加・更新
- **用途**: 翻訳の管理

### `.mo`ファイル（PHP用バイナリ）
- **役割**: PHPの翻訳用バイナリファイル
- **生成**: `msgfmt`コマンド（`.po`ファイルから生成）
- **参照**: PHPの`__()`, `_e()`などの関数が参照
- **用途**: PHP側の翻訳のみ

### `.json`ファイル（JavaScript用）
- **役割**: JavaScriptの翻訳用JSONファイル
- **生成**: `wp i18n make-json`コマンド（`.po`ファイルから生成）
- **参照**: JavaScriptの`__()`関数が参照
- **用途**: JavaScript側の翻訳のみ

## 参照関係

```
┌─────────────────────────────────────────────────────────┐
│ ソースコード                                            │
├─────────────────────────────────────────────────────────┤
│ PHP: __('Text', 'domain')                               │
│      ↓                                                   │
│      .moファイルを参照                                   │
│      (languages/vk-booking-manager-ja.mo)              │
│                                                          │
│ JavaScript: __('Text', 'domain')                        │
│      ↓                                                   │
│      .jsonファイルを参照                                 │
│      (languages/vk-booking-manager-ja-{hash}.json)      │
└─────────────────────────────────────────────────────────┘
```

## 生成フロー

```
.potファイル（テンプレート）
    ↓
    msgmerge（.poファイルと同期）
    ↓
.poファイル（翻訳ソース）
    ↓
    ├─→ msgfmt → .moファイル（PHP用）
    └─→ wp i18n make-json → .jsonファイル（JavaScript用）
```

## 実際のコードでの参照

### PHP側の翻訳

```php
// src/admin/class-provider-settings-page.php
echo esc_html__( 'Basic settings', 'vk-booking-manager' );
```

↓ 参照先
```
languages/vk-booking-manager-ja.mo
```

### JavaScript側の翻訳

```javascript
// src/blocks/reservation/app.js
{__('Sign up', 'vk-booking-manager')}
```

↓ 参照先
```
languages/vk-booking-manager-ja-{hash}.json
```

## WordPressの翻訳読み込みメカニズム

### JavaScript翻訳の登録

```php
// src/blocks/class-reservation-block.php
wp_set_script_translations( 
    $handle,                    // スクリプトハンドル
    'vk-booking-manager',       // テキストドメイン
    $translation_path           // languagesディレクトリのパス
);
```

### JSONファイルの検索

WordPressは以下の順序でJSONファイルを検索します：

1. **スクリプトハンドルのハッシュ**を計算
2. `{domain}-{locale}-{hash}.json`の形式でファイルを検索
3. `load_script_translation_file`フィルターでパスを調整（このプラグインでは`languages`ディレクトリを優先）

例：
- スクリプトハンドル: `vk-booking-manager-reservation-view-script`
- ハッシュ: `9d646c458a47569c6aef7c43a900eb16`
- 検索ファイル: `vk-booking-manager-ja-9d646c458a47569c6aef7c43a900eb16.json`

## 重要なポイント

### ✅ JavaScriptはJSONファイルを直接参照

- JavaScriptの`__()`関数は、**JSONファイルを直接読み込みます**
- `.mo`ファイルは**一切使用しません**
- JSONファイルは`.po`ファイルから生成されますが、独立したファイルです

### ✅ PHPは.moファイルを参照

- PHPの`__()`, `_e()`関数は、**.moファイルを読み込みます**
- `.json`ファイルは使用しません

### ✅ 両方とも.poファイルから生成

- `.mo`ファイル: `msgfmt -o vk-booking-manager-ja.mo vk-booking-manager-ja.po`
- `.json`ファイル: `wp i18n make-json vk-booking-manager-ja.po`

## ビルドコマンドの意味

```bash
npm run build:i18n:json
```

このコマンドは以下を実行します：

1. `msgfmt -o languages/vk-booking-manager-ja.mo languages/vk-booking-manager-ja.po`
   - `.po`ファイルから`.mo`ファイルを生成（PHP用）

2. `wp i18n make-json languages/vk-booking-manager-ja.po`
   - `.po`ファイルから`.json`ファイルを生成（JavaScript用）
   - 複数のJSONファイルが生成される（スクリプトハンドルごと）

## まとめ

| ファイル | 用途 | 参照元 |
|---------|------|--------|
| `.pot` | テンプレート | - |
| `.po` | 翻訳ソース | 編集用 |
| `.mo` | PHP翻訳 | PHPの`__()`, `_e()` |
| `.json` | JavaScript翻訳 | JavaScriptの`__()` |

**JavaScriptの翻訳はJSONファイルを直接参照します。.moファイルは使用しません。**
