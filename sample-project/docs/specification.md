## 概要
本プロジェクトは WordPress 上で動作する予約プラグインの設計・実装を目的としています。  
美容・整体・レッスン教室など、複数スタッフが在籍するサービス提供業態での利用を想定しています。

共通仕様 : `docs/common/specification-common.md`
一般ユーザー向けの案内 : `readme.md`
ビジネス上の目的と方向性 : `docs/business.md`

- **アーキテクチャ:** プラグインのエントリーポイントは `vk-booking-manager.php`、ドメインロジックは `src/` 配下に配置します。名前空間は `VKBookingManager\` を基点とし、機能ごとにサブ名前空間（例：`VKBookingManager\ServiceMenu`）を用います。

## 詳細仕様
- サービス提供側（オーナー／スタッフ）の管理仕様：`docs/specification-operation-owner.md`
- ロール・権限仕様：`docs/specification-permissions.md`
- エンドユーザーの予約導線仕様：`docs/specification-operation-user.md`
- サービスメニュー表示仕様（ブロックエディタ対応）：`docs/specification-service-menu.md`
- 技術メモ・ロジック検討：`docs/specification-ai.md`
- 料金（指名料・基本料金合計・請求金額合計）：`docs/specification-staff-nomination-fee.md`（用語定義・保存ルールを含む）
- 提供形態（Pro版 / 無料版 GitHub Release / 無料版 .org）：`docs/specification-distribution.md`

## 主要ドメインオブジェクト
- `vkbm_service_menu`（サービスメニュー）
- `vkbm_reservation`（予約）
- `vkbm_resource`（リソース：初期の画面表示ラベルは「スタッフ」。基本設定 > システム設定の「リソース名称（単数/複数）」と「リソースラベル」で変更可能）
- 設定：`vkbm_provider_settings`（店舗・通知設定など）

## 今後の更新方針
- 概要とドキュメント一覧のハブとして本ファイルを維持し、詳細は各仕様書に集約する。
- 新たな機能セクションを作成した場合は、対応する仕様書へのリンクをここに追記する。
- 実装コードは WordPress Coding Standards（WPCS）に準拠し、PHPCS 等の静的解析ツールで検証できる形を目指す。
