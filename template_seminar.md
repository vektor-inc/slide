---
marp: true
---
<!-- 
theme: vk-slide
size: 16:9
paginate: true
style: |
_paginate: false 
-->

<!-- Scoped style -->
<style scoped>
  /*
section{
  background: yellow;
}
*/
</style>

<!-- _class: title -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

VWS オンライン勉強会 #039
# WordPress最新バージョン<br>6.1を触ってみよう

まもなくスタート
#wpvektor ツイート大歓迎！


---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# ようこそ！はじめに

---

## この勉強会について

株式会社ベクトルが運営、WordPressやウェブ制作にかかせないさまざまなテーマをとりあげて開催しているオンライン勉強会。

ご興味がある方であれば、経験や技術レベルに関係なく、どなたでもご参加いただけます。

また、ベクトル製品のWordPressテーマLightningなどの最新機能情報・カスタマイズ・運用方法についてもご案内しています。

基本的に、毎月1回、だいたい第4週目に開催しております。

---
![bg](images/Team-Vektor-202208.png)

---

## 歓迎されること

* ライブビューイングのノリで __チャットでわいわい__ していただければと思います。
* ぜひツイートして盛り上げてください <strong>#wpvektor</strong>
* __初参加者さんを歓迎__ してください。
* __やさしい言葉使い__ を心がけて、誰にとっても快適な勉強会となるようにご協力ください。

---

## ご参加にあたって

* 随時途中で音声でのご質問もOKです。
* 発言時以外はミュートにしてください。
（テレビ・同居人・外部の騒音）
* 一部録画し、YouTubeにてアーカイブとして公開します。


---

## 勉強会中のチャット

勉強会中のチャットはzoom上ではなくslackで行っております。

<strong>VWS の Slack #ミーティング チャンネル に一言どうぞ！</strong>

- Slackのデスクトップアプリもあり便利です

- Slackにまだ登録していない/ログイン情報を忘れた場合
→ connpassに記載のURLをご参考ください。

---

## 本日の内容

* 製品アップデート・その他お知らせ（約15分）
* 本編: WordPress最新バージョン6.1を触ってみよう (約50分)
* 質問相談会（〜22:00まで）
* 22:05頃から懇親会・ユーザーフィードバック会（Zoomのみ、配信なし）

---

## セッションの内容は後から振り返りできます
URLリンク情報などはSlackや後日のレポートブログで共有いたします。動画もシェアされますので安心してゆっくり見てください。

---

## ハッシュタグは #wpvektor
## コメントスクリーンはこちらから
https://www.commentscreen.com/comments?id=07pdtIc7ZTtXgiPcQ7iV

コメント、リアクションをぜひお願いします！

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 今月の新機能 / 新製品その他お知らせ


---

## ExUnit でUAとGA4のタグを両方同時に出力できるようになりました
version 9.82.0 
https://www.vektor-inc.co.jp/product-update/exunit-9-82-0-ua-ga4-tag/

---

## VK Blocks でキラッと光るボタンエフェクトを設定できるようになりました
version 1.44.0
https://www.vektor-inc.co.jp/product-update/vk-blocks-1-44-0-add-button-effect/

---

## VK Blocks Pro で投稿リストの分類絞り込み条件でANDかORを選べるようになりました
version 1.44.0
https://www.vektor-inc.co.jp/product-update/vk-blocks-pro1-44-0-post-list/

---

## VK Filter Search Pro でチェックボックスのタクソノミー検索でユーザーが AND / OR 検索を選べるようになりました
version 1.11.0
https://www.vektor-inc.co.jp/product-update/vk-filter-search-pro-1-11-0/

---

## BillVektor Salary で令和４年10月稼働分以降の雇用保険料率変更に対応いたしました。
version 0.6 
https://billvektor.com/billvektor-salary-0-6-0/

---

## 今月のパターン紹介
コピペで使えるブロックパターンライブラリを公開しています。新規追加パターン続々追加中です！

今月はなし？

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 本編

## WordPress最新バージョン<br>6.1を触ってみよう

ご感想など **#wpvektor** ツイート大歓迎！

---

## WordPress最新バージョン<br>6.1を触ってみよう - もくじ -

1. WordPressのリリースについて / 最近のテーマに関する予備知識
2. WordPress 6.1の気になる新機能
3. 開発リーダー石川によるWordPress 6.1の解説

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## だれでもお気軽に 質問・回答 記入シート

https://docs.google.com/spreadsheets/d/1Yvk3AN4pWn2tjL7DBe0HZm4OvvWOWhfp9ub76bAjmpQ/edit?usp=sharing

---

## WordPress 6.1 で気になる新機能・ブロックエディタ周りのアレコレ

ブログ記事を公開しています！
https://www.vektor-inc.co.jp/post/wordpress-6-1-dev-note-note/


---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## Lightning 質問大会

スプレッドシートで皆さんからの質問・回答を見ていきましょう！

---


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 参加後アンケートのお願い

参加後アンケートよろしくおねがいします！（1〜2分）
https://forms.gle/bGgdtc96J8xS2efB9

- 勉強会の感想
- 今後取り上げてほしいテーマなど

よろしければご意見をお聞かせください。

---

## 勉強会はいかがでしたか？過去の動画アーカイブをYouTubeでご覧いただけます！

https://youtube.com/playlist?list=PL_Z0nmiLLW6tzsuoy15eAwn-8qrtCEyyF

CSSカスタマイズ / PHP超入門 / アクションフック /
物件情報サイト作成 / ビジネスサイト作成 / パターン活用 /
Lightningカスタマイズ / 配色の基本 / SEO関連設定
 

__🔔チャンネル登録もよろしければぜひ！__

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 次回の勉強会
2022/11/24(木)予定 VWSオンライン勉強会 #040

### コピペで簡単！CSSの小技とパターンで作るWordPressサイト

connpassお申し込み受付開始しました！
https://vektor.connpass.com/event/264312/

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# その他の連絡事項、告知など

---
![bg](images/konshinkai-38.png)

---
<!-- _class: title -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

# ありがとうございました

また次の勉強会でお会いしましょう！
