# Free/Pro 分割・配布方針（決定仕様）

更新日: 2026-01-16  
ステータス: **決定**

## 決定事項
- Free/Pro の切り替えは基本的にフラグで行う
- ただし、スタッフ登録関連（スタッフCPT登録/編集UI/作成導線）は **別ファイル差し替え**で対応し、Free成果物に Pro 用定義を含めない
- 指名料は Free では **サーバ側で必ず無効化**する（UI非表示だけに依存しない）
- Free ではスタッフが単一になるように **「基本スタッフ」以外を下書き化**する

## Free成果物のスタッフCPT扱い
- `resource-post-type-config.php` は Free/Pro で **同名・別内容**（ビルド時に差し替え）
- ソース上は `resource-post-type-config-free.php` / `resource-post-type-config-pro.php` を用意し、ビルド時に `resource-post-type-config.php` へコピーする
- Free の設定は show_ui/show_in_menu/show_in_rest を無効化し、管理画面/REST からスタッフCPTが露出しないようにする
- Pro の設定は通常のCPT設定を使う

## Free版の運用ルール
- Free では未登録の場合に「基本スタッフ」を自動生成する
- Free 判定時に公開スタッフが複数ある場合、**基本スタッフ以外は下書き化**する
- シフト一括登録・サービスメニュー編集のスタッフ候補は **公開スタッフのみ**を対象にする
- Free では基本設定の「リソース名称／リソースラベル」入力欄を非表示にする

## Default Staff シフトフラグ
- Free版で保存されたシフトには `_vkbm_shift_default_staff = 1` を付与する
- Pro版へ切り替えても当該フラグは削除しない（将来 Free へ戻す際の移行対象に保持する）
- Free版有効化時は、上記フラグ付きのシフトを現在の `Default Staff` に付け替える（自動マイグレーション）

## フロント連携
- `provider-settings` のレスポンスに `staff_enabled` を含め、Free/Pro で UI を出し分ける

## 差し替え対象ファイル
- `src/post-types/class-resource-post-type.php`（スタッフCPT登録）
- `src/staff/class-staff-editor.php`（スタッフ編集UI/指名料UI）
- `src/admin/class-setup-notices.php`（スタッフ作成導線）

### 差し替え用のソースファイル
- `src/post-types/resource-post-type-config-free.php` / `src/post-types/resource-post-type-config-pro.php`
- `src/staff/class-staff-editor-free.php` / `src/staff/class-staff-editor-pro.php`

### 開発/配布コマンド
- 開発用: `npm run build:free` / `npm run build:pro`
- 配布用: `npm run dist:free` / `npm run dist:pro`
