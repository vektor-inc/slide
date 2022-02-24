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

# VWS オンライン勉強会 #031
__Lightning とブロックパターンで作る歯医者さんサイト__

まもなくスタート
#wpvektor ツイート大歓迎！


---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# ようこそ！はじめに

---

## この勉強会について

株式会社ベクトルが運営、WordPressやWeb制作をとりまくさまざまなテーマをとりあげて開催しているオンライン勉強会。

ご興味がある方であれば、経験や技術レベルに関係なく、どなたでもご参加いただけます。

また、ベクトル製品のWordPressテーマLightningなどの最新機能情報・カスタマイズ・運用方法についてもご案内しています。

基本的に、毎月1回、だいたい第4週目に開催しております。

---
![bg](images/Team-Vektor-202201.png)

---

## 歓迎されること

* ライブビューイングのノリでチャットでわいわいいただければと思います。
* ぜひツイートして盛り上げてください <strong>#wpvektor</strong>
* 初参加者さんを歓迎してください。

---

## ご参加にあたって

勉強会におきましては、品位のない、差別的・迷惑な行動や発言は慎みましょう。優しい言葉を心がけてください。 受け入れ難い行為や発言をもし見かけられましたらスタッフが対応しますのでお知らせください。誰にとっても快適な勉強会となるようにご協力ください。

---

## ご参加にあたって

* 随時途中で音声でのご質問もOKです。
* 発言時以外はミュートにしてください。
（テレビ・同居人・外部の騒音）
* 質問はSlackや質問スプレッドシートにご記入も可能です。
* 一部録画・公開します。
(Slackで過去の勉強会の動画を振り返りできます)

---

## 勉強会中のチャット

勉強会中のチャットはzoom上ではなくslackで行っております。

<strong>VWS の Slack #ミーティング チャンネル に一言どうぞ！</strong>

- Slackのデスクトップアプリもあり便利です

- Slackにまだ登録していない/ログイン情報を忘れた場合
→ connpassに記載のURLをご参考ください。

---

## 本日の内容

* 製品アップデート・その他お知らせ（約20分）
* 第1部: Lightningで使えるブロックパターンライブラリのご紹介 (約20分)
* 第2部: Lightningとブロックパターンで作る歯医者さんサイト (約40分)
* 質問相談会（〜22:00まで）
* 22:00より希望者のみ懇親会

---
<!-- _paginate: false  -->

## セッションの内容は後から振り返りできます

URLリンク情報などはSlackや後日のレポートブログで共有いたします。動画もシェアされますので安心してゆっくり見てください。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## だれでもお気軽に 質問・回答 記入シート
https://docs.google.com/spreadsheets/d/1Yvk3AN4pWn2tjL7DBe0HZm4OvvWOWhfp9ub76bAjmpQ/edit?usp=sharing

---

## ハッシュタグは #wpvektor

## コメントスクリーンはこちらから 

https://commentscreen.com/comments?id=pnIqga5AOiB55NtGjlvq

コメント、リアクションをぜひお願いします！

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 今月の新機能 / 新製品その他お知らせ


---

## VWSフォーラムにいいねボタンを設置

https://www.vektor-inc.co.jp/info/vws-forum-add-like-button/
VWSにログインすればどなたでもいいねできます！役に立った回答やステキな返信に、ぜひいいねしてください👍👍👍

▼ Lightning（ベクトル製品）のサポートについて
ご自身のケースに合わせてご利用ください：
https://lightning.vektor-inc.co.jp/support/

---

## フォーラムを活用しよう！500ポイントへ増量！キャンペーン実施中です（期間未定）
ベストアンサーに選ばれると、これまで300ポイントだったところ、500ポイント付与されます！🎉
https://www.vektor-inc.co.jp/info/forum-point-up-campaign/
フォーラムの回答にぜひご参加いただけると嬉しいです！

✅質問した人は、解決に役立った返信に「ベストアンサー」をつけてください✨

---
## VK Grid Column Card 0.3.0 で個別のブロックの編集ロック機能を追加しました

https://www.vektor-inc.co.jp/product-update/vk-grid-column-card-0-3-0/

---
## VK Blocks 1.22.1 で枠線ボックスへ任意の色を指定できるようになりました
https://www.vektor-inc.co.jp/product-update/vk-blocks1-22-1-borderbox-color/
カラーパレットからお好きな色を指定できるようになってとても便利になりました🎨✨

---

## Lightning G3 Pro Unit でパンくずリストの位置をフッター直上に変更できるようになりました

Lightning 14.17.1 / Lightning G3 Pro Unit 0.16.1 

https://www.vektor-inc.co.jp/product-update/lightning-g3-pro-unit-breadcrumb-to-footer/

---

### ExUnit パンくず構造化処理について

---

## ブロックテーマ X-T9を公開しました！
X-T9は、WordPress5.9からβ版として実装されているフルサイト編集機能に対応したブロックテーマです。
https://x-t9.vektor-inc.co.jp/

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 第1部

## Lightning で使えるブロックパターンライブラリのご紹介

Speaker：Toriyama Yuko 

ご感想など **#wpvektor** ツイート大歓迎！

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 第2部

## Lightning とブロックパターンで作る歯医者さんサイト

Speaker：Sasaki Kaori
ご感想など **#wpvektor** ツイート大歓迎！

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## Lightning 質問大会

スプレッドシートで皆さんからの質問・回答を見ていきましょう！
Lightning を使用していて、
・こういうところが使い勝手が良くて好き
・こういうところがもっと改善してほしい
などのご意見もぜひお聞かせください。

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 次回の勉強会
2022/3月、4週目予定 　VWSオンライン勉強会 #032

__「FSEテーマを触ってみようハンズオン（仮）」__

WordPress公式ディレクトリ掲載の
最新のFSEテーマ「X-T9」を一緒に触ってみましょう！
テーマの仕組みやFSEを体験できます。

日程と詳細が確定次第ご案内いたします。

---


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 参加後アンケートのお願い

参加後アンケートよろしくおねがいします！（1〜2分）
https://forms.gle/PckjxwuYUPPWWknc8
お聞きしたいこと：
- 勉強会の感想
- VKパターンライブラリに追加してほしい業種やパターン
- 今後取り上げてほしいテーマなど

よろしければご意見をお聞かせください。

---
<!-- _class: title-chapter -->

## ショーケースについて

https://showcase.vektor-inc.co.jp/

LightningやKatawaraで作成したサイトを掲載して参考にしたり、制作者に制作に関する依頼の問い合わせが出来るサイトです。

実績掲載・受注の流れ
https://showcase.vektor-inc.co.jp/flow


---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# その他の連絡事項、告知など

---

## Gather の懇親会場
https://app.gather.town/app/rN9tkVhkZ0kf83Mz/202202-vws
カメラはオフのままでもOK！ウロウロして楽しんでください！
名前に★がある人は「気軽に話しかけてね」
名前に●がある人は「ゆるっと聞くだけ参加」


---
<!-- _class: title -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

# ありがとうございました
