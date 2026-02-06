# WordPress サロン予約プラグイン 仕様概要（参考メモ）

> **注意:** 本ドキュメントは初期検討時に作成したラフメモです。最新の正式仕様は以下を参照してください。
> - サービス提供側（オーナー／スタッフ）仕様: `docs/specification-operation-owner.md`
> - エンドユーザー仕様: `docs/specification-operation-user.md`
> - サービスメニュー表示仕様: `docs/specification-service-menu.md`
> 本ファイルの内容は更新されない可能性が高いため、参考資料として扱ってください。

## 🎯 概要
担当者ごとに予約を受け付け、管理画面で簡単に確認・変更できる最小構成の予約システム。
目的は「**担当者別の空き時間に、顧客が予約できること**」に絞る。

---

## 🧭 フロントエンド（サイト側）

### 目的
来訪者が担当者を選び、空き時間を確認して予約を登録する。

### 画面構成
#### 1. 予約フォーム（1ページ完結）
1. **ログイン状態の確認**
   - 未ログイン：ゲスト予約フォーム
   - ログイン済み：会員予約フォーム（過去の予約履歴表示）
2. 担当者を選択（設定で登録された一覧から）
3. 日付を選択（カレンダー）
4. 時間枠を選択（予約単位で自動生成／空き枠のみ表示）
5. 顧客情報入力
   - **ゲスト予約：** 名前・連絡先・メモを入力
   - **会員予約：** 登録済み情報を自動入力（変更可能）
6. 送信ボタンで確定

#### 2. 完了画面
- 予約内容の確認（担当者・日時・氏名）
- キャンセル連絡先（メールまたは電話）を表示
- **会員の場合：** マイページへのリンク表示

#### 3. 会員マイページ（ログイン時のみ）
- 予約履歴一覧
- 今後の予約一覧
- 予約の変更・キャンセル機能
- プロフィール編集

### バリデーション
- 必須：担当者・日付・時間・名前
- サーバー側で担当者別の重複チェック
  ```sql
  (start_at < 新end_at) AND (end_at > 新start_at) AND staff = ?
  ```
- **会員予約の場合：** ユーザーIDとの紐付け確認
- **ゲスト予約の場合：** 連絡先の重複チェック（同一連絡先での重複予約防止）

### 空き枠の算出ロジック
1. 営業時間＋予約単位でスロット生成
2. 担当者の週テンプレートを反映
3. 例外設定（休み・短縮・延長）を適用
4. 既存予約を除外（キャンセルは除外対象外）
5. ➡ 残ったスロットを「空き」として表示

---

## ⚙️ 管理画面（WordPress 側）

### メニュー構成
- **予約**（一覧・登録・編集を1画面で実行）
- **設定**（営業時間・予約単位・担当者・受付時間）

### 予約画面
#### 上部バー：
- 「← 前日 / 今日 / 翌日 →」
- 担当者タブまたはプルダウン（全員 / 各担当者）
- ステータスフィルタ（すべて / 確定 / 来店 / キャンセル）
- 右上「＋新規予約」ボタン

#### 一覧テーブル：
- 開始｜終了｜顧客名｜担当者｜ステータス｜操作（編集・来店・キャンセル）

#### サイドパネル編集：
- 日時・顧客名・担当者（必須）
- 連絡先・メモ（任意）
- ステータス変更・削除

### 設定画面
- 営業時間（開始/終了）
- 予約単位（例：15分）
- 担当者リスト（カンマ区切り）
- 休業日（手動入力）
- 担当者ごとの週テンプレート（受付可能時間）

---

## 🕓 担当者の予約可能時間設定

### 1. 週テンプレート（恒常設定）
管理画面の「設定 → 予約設定 → 担当者と受付時間」で入力

**保存形式：** wp_options に JSON

```json
{
  "yamada": {
    "mon": [["09:00","18:00"]],
    "tue": [["09:00","18:00"]],
    "wed": [],
    "thu": [["10:00","19:00"]],
    "fri": [["09:00","18:00"]],
    "sat": [["09:00","17:00"]],
    "sun": [],
    "break": [["13:00","14:00"]]
  }
}
```

### 2. 臨時例外（休み・短縮・延長）
「本日の予約」画面から登録

**保存先：** wp_salon_staff_exceptions テーブル

```sql
CREATE TABLE wp_salon_staff_exceptions (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  staff_slug VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  start_at TIME NULL,
  end_at TIME NULL,
  type ENUM('off','block','extra') NOT NULL,
  note VARCHAR(191) NULL,
  KEY idx_staff_date (staff_slug, date)
);
```

#### 種別
- **off：** 終日休み
- **block：** 一部時間を予約不可
- **extra：** 臨時に追加受付（早出・延長など）

#### 優先順位
```
例外設定 ＞ 週テンプレート ＞ 全体営業時間
```

---

## 💾 データ構造

### 予約テーブル
```sql
CREATE TABLE wp_salon_appointments (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  start_at DATETIME NOT NULL,
  end_at DATETIME NOT NULL,
  customer_name VARCHAR(191) NOT NULL,
  contact VARCHAR(191) DEFAULT NULL,
  staff VARCHAR(191) DEFAULT NULL,
  note TEXT NULL,
  status ENUM('confirmed','visited','canceled') DEFAULT 'confirmed',
  user_id BIGINT UNSIGNED DEFAULT NULL, -- WordPressユーザーID（会員予約時）
  is_guest BOOLEAN DEFAULT TRUE, -- ゲスト予約フラグ
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  KEY idx_staff_start (staff, start_at),
  KEY idx_user_id (user_id),
  KEY idx_contact (contact),
  FOREIGN KEY (user_id) REFERENCES wp_users(ID) ON DELETE SET NULL
);
```

---

## 🔌 API / 内部実装（概要）

### RESTエンドポイント（プラグイン内）
- `GET /appointments?date=YYYY-MM-DD&staff=...`
- `POST /appointments`（作成）
- `PUT /appointments/{id}`（更新）
- `DELETE /appointments/{id}`（削除）
- `GET /my-appointments`（会員の予約履歴取得）
- `POST /appointments/{id}/cancel`（予約キャンセル）

### 実装詳細
- 保存時にトランザクション＋重複チェック
- 管理UIは WP_List_Table＋React（右サイド編集）
- **認証機能：** WordPress標準の認証システムを活用
- **権限管理：** 会員は自分の予約のみ編集可能

---

## ✅ MVP 完了条件

- [ ] フロントで担当者別予約ができる
- [ ] 同担当の重複時間は登録不可
- [ ] 管理画面で本日の予約確認・新規・編集・キャンセル可能
- [ ] 担当者別の週テンプレート・臨時例外に対応
- [ ] 設定画面で営業時間・担当者・予約単位を管理
- [ ] **ゲスト予約機能**（ログイン不要での予約）
- [ ] **会員予約機能**（WordPressユーザーでの予約）
- [ ] **会員マイページ**（予約履歴・変更・キャンセル）
- [ ] **認証・権限管理**（会員は自分の予約のみ操作可能）

---

## 🚀 将来拡張（後付け想定）

- 通知メール（確定・前日リマインド）
- 売上・稼働率レポート
- 顧客台帳
- オンライン決済連携
- 多店舗対応（支店単位で担当を分ける）
- **会員登録機能**（予約時にアカウント作成オプション）
- **予約変更制限**（当日変更不可など）
- **ポイント・クーポン機能**
- **SNS連携ログイン**（Google、Facebook等）
