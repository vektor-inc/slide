# 翻訳ワークフロー

## 翻訳ファイルの更新手順

1.  **POTファイルの生成**
    ```bash
    npm run build:i18n:pot
    ```
    これにより、PHPおよびJSから最新の翻訳対象文字列が `languages/vk-booking-manager.pot` に抽出されます。

2.  **POファイルへの反映**
    以下のいずれかの方法で更新できます：

    **方法A: コマンドライン（推奨）**
    ```bash
    npm run build:i18n:po
    ```
    これにより、`languages/vk-booking-manager.pot` の内容が `languages/vk-booking-manager-ja.po` にマージされます。
    `--no-fuzzy-matching` オプションにより、曖昧なマッチングを避け、完全一致のみを更新します。

    **方法B: Poedit（GUI）**
    - `languages/vk-booking-manager-ja.po` を Poedit で開く。
    - メニューの「翻訳」 > 「POTファイルから更新...」を選択。
    - 生成した `languages/vk-booking-manager.pot` を選択してマージする。

3.  **ビルドファイルの生成**
    翻訳が完了したら、以下のコマンドで各形式のファイルを書き出します。
    ```bash
    npm run build:i18n:mo    # PHP用 (.mo)
    npm run build:i18n:php   # 高速読み込み用 (.l10n.php)
    npm run build:i18n:json  # JSブロック用 (.json)
    ```

## JavaScript翻訳のマージ処理について

### 背景：ハッシュ不一致の問題

WordPressのJavaScript翻訳システムは、**ビルド済みのJavaScriptファイルのURLからハッシュ値を計算**して翻訳ファイルを検索します。しかし、`wp i18n make-json` は**ソースファイルのパスからハッシュ値を計算**してJSONファイルを生成します。

この不一致により、以下の問題が発生します：

1. **個別のJSONファイル生成**
   - `src/blocks/reservation/app.js` → `vk-booking-manager-ja-{hash1}.json`
   - `src/blocks/reservation/booking-ui/calendar-grid.js` → `vk-booking-manager-ja-{hash2}.json`
   - `src/blocks/reservation/booking-ui/daily-slot-list.js` → `vk-booking-manager-ja-{hash3}.json`
   - など、各ソースファイルごとに個別のJSONファイルが生成される

2. **バンドルによるハッシュ不一致**
   - 実際には、これらのコンポーネントは `app.js` にバンドルされ、ビルド後は `build/blocks/reservation/view.js` として1つのファイルになる
   - WordPressは `view.js` のURLからハッシュを計算するが、JSONファイルはソースファイルのパスから生成されている
   - **ハッシュが一致しないため、翻訳が読み込まれない**

### 解決策：マージ処理とカスタムフィルター

この問題を解決するため、以下の2段階の処理を実装しています：

#### ステップ1: 翻訳のマージ（`bin/merge-json-translations.js`）

`npm run build:i18n:json` を実行すると、以下の処理が行われます：

**予約ブロック（reservation）の場合：**
1. `wp i18n make-json` が各ソースファイルごとにJSONファイルを生成
2. `bin/merge-json-translations.js` が自動実行される
3. `src/blocks/reservation/booking-ui/` 内のコンポーネント（`calendar-grid.js`, `daily-slot-list.js`, `selected-plan-summary.js`）の翻訳を検出
4. これらの翻訳を `app.js` のJSONファイルにマージ
5. 結果として、`app.js` のJSONファイルに全ての翻訳が含まれる

**メニューループブロック（menu-loop）の場合：**
1. `wp i18n make-json` が各ソースファイルごとにJSONファイルを生成
2. `index.js` には翻訳文字列がないため、JSONファイルは生成されない
3. `edit.js` のJSONファイルが生成される（`src/blocks/menu-loop/edit.js`）
4. `filter_script_translation_file()` が `index.js` のハンドルで `edit.js` のJSONファイルを見つける

```javascript
// bin/merge-json-translations.js の処理フロー（予約ブロック）
1. app.js のJSONファイルを検索
2. booking-ui コンポーネントのJSONファイルを検索
3. booking-ui の翻訳を app.js のJSONにマージ
4. マージされたJSONファイルを保存

// メニューループブロック
1. edit.js のJSONファイルを検出（index.jsには翻訳文字列がないためJSONは生成されない）
2. filter_script_translation_file() が index.js のハンドルで edit.js のJSONを返す
```

#### ステップ2: カスタムフィルター（`src/class-plugin.php`）

WordPressの `filter_script_translation_file` フィルターを使用して、ハッシュ不一致時でも正しいJSONファイルを見つけます：

**予約ブロック（reservation）の場合：**
1. WordPressが期待するハッシュ値でJSONファイルを検索
2. 見つからない場合、`reservation` ブロックのハンドルの場合は `app.js` のJSONファイルを優先的に検索
3. `app.js` のJSONファイルには、マージ処理により全ての翻訳が含まれているため、正しく翻訳が読み込まれる

**メニューループブロック（menu-loop）の場合：**
1. WordPressが期待するハッシュ値でJSONファイルを検索
2. 見つからない場合、`menu-loop` ブロックのハンドルの場合は `edit.js` のJSONファイルを検索
3. `index.js` には翻訳文字列がないためJSONファイルは生成されないが、`edit.js` がバンドルされているため、`edit.js` のJSONファイルを返す

```php
// src/class-plugin.php の filter_script_translation_file() の処理
1. 完全一致するハッシュのJSONファイルを検索
2. 見つからない場合：
   - reservationブロックの場合は app.js のJSONを検索（source に 'src/blocks/reservation/app.js' を含む）
   - menu-loopブロックの場合は edit.js のJSONを検索（source に 'src/blocks/menu-loop/edit.js' を含む）
3. 見つかったJSONファイルを返す
```

### 処理の流れ（全体像）

```
1. ソースファイル（src/）
   ├─ app.js
   ├─ booking-ui/calendar-grid.js
   ├─ booking-ui/daily-slot-list.js
   └─ booking-ui/selected-plan-summary.js
        ↓
2. wp i18n make-json 実行
        ↓
3. 個別のJSONファイル生成
   ├─ app.js → vk-booking-manager-ja-{hash1}.json
   ├─ calendar-grid.js → vk-booking-manager-ja-{hash2}.json
   ├─ daily-slot-list.js → vk-booking-manager-ja-{hash3}.json
   └─ selected-plan-summary.js → vk-booking-manager-ja-{hash4}.json
        ↓
4. merge-json-translations.js 実行
        ↓
5. マージされたJSONファイル
   └─ app.js → vk-booking-manager-ja-{hash1}.json（全翻訳を含む）
        ↓
6. ビルド（wp-scripts build）
        ↓
7. ビルド済みファイル
   └─ build/blocks/reservation/view.js（全コンポーネントがバンドル）
        ↓
8. WordPressが view.js のハッシュで翻訳ファイルを検索
        ↓
9. filter_script_translation_file() が app.js のJSONを返す
        ↓
10. 翻訳が正しく読み込まれる
```

### 重要なポイント

- **マージ処理は自動実行される**: `npm run build:i18n:json` を実行すると、自動的に `merge-json-translations.js` が実行されます
- **新しいコンポーネントの追加**: `src/blocks/reservation/booking-ui/` に新しい `.js` ファイルを追加すると、自動的に検出されてマージされます（`index.js` は除外）
- **ハッシュ不一致への対応**: `filter_script_translation_file()` により、ハッシュが一致しなくても正しいJSONファイルを見つけられます
- **メニューループブロックの特別処理**: `index.js` には翻訳文字列がないためJSONファイルは生成されませんが、`edit.js` がバンドルされているため、`filter_script_translation_file()` が `edit.js` のJSONファイルを返します

## 重要なポイント

- **開発中**: コード内の `__()` などを変更した後は、必ず `npm run build:i18n:pot` を実行し、Poedit で PO ファイルを更新してください。
- **反映の確認**: JSブロックの翻訳が反映されない場合は、`npm run build:i18n:json` を実行した後、ブラウザで **Cmd + Shift + R**（強力なリロード）を行ってください。
- **PHP翻訳の高速化**: WordPress 6.5以降では `.l10n.php` が優先的に読み込まれます。`npm run build:i18n:php` で生成されます。
