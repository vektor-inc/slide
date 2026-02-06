# デザイン実装仕様

本書では VK Booking Manager プラグインの共通デザイン仕様（CSS 変数、アラートコンポーネント等）を定義する。各機能別仕様書（ユーザー操作／オーナー操作など）は、本ドキュメントを参照することで重複記述を避ける。

共通デザインの実装ルールは `docs/ai-skills/skills/design-rules.md` を参照してください。

## 4. シフト・予約表（管理画面）の日別ビュー
- 予約カード（`assets/scss/admin-shift-dashboard.scss`）は `.vkbm-booking-card` をベースに、1行目に `.vkbm-booking-card__summary`（`18:45 - 19:15 / 山田太郎様` のように時間 + スラッシュ + 顧客名）を表示する。時間・顧客名は `.vkbm-booking-card__divider` を挟んでインラインで並べ、余白は CSS 側の `gap` で制御する。
- 2行目には `.vkbm-booking-card__service` でメニュー名／コース名のみを表示し、バッジや補足テキストの積み増しは行わない。
- 予約カードに追加の状態ラベルが必要な場合は、`vkbm-booking-card--warning` など既存のモディファイアクラスで色分けする。新しい装飾は `.vkbm-booking-card__summary` のパターンを崩さない範囲で行う。
