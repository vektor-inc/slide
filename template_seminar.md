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

# VWS オンライン勉強会 #035
__受託制作で役立つ
WordPressブロック開発実践カスタマイズ基礎__

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

勉強会におきましては、品位のない、差別的・迷惑な行動や発言は慎みましょう。優しい言葉を心がけてください。 誰にとっても快適な勉強会となるようにご協力ください。

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
* 本編:受託制作で役立つWordPressブロック開発実践カスタマイズ基礎(約50分)
* 質問相談会（〜22:00まで）
* 22:05くらいから希望者のみ懇親会（Gather）

---
<!-- _paginate: false  -->

## セッションの内容は後から振り返りできます

URLリンク情報などはSlackや後日のレポートブログで共有いたします。動画もシェアされますので安心してゆっくり見てください。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## だれでもお気軽に 質問・回答 記入シート
勉強会中に出てきた疑問などぜひこちらに
https://docs.google.com/spreadsheets/d/1Yvk3AN4pWn2tjL7DBe0HZm4OvvWOWhfp9ub76bAjmpQ/edit?usp=sharing

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## Lightningやプラグインのご質問サポート

日頃Lightningなどのベクトル製テーマ・プラグインを
ご利用中に困ったことが出てきたら
https://lightning.vektor-inc.co.jp/support/

---

## ハッシュタグは #wpvektor

## コメントスクリーンはこちらから 
https://commentscreen.com/comments?id=TROqLHwAqf6XaFGP1mcM

コメント、リアクションをぜひお願いします！


---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 今月の新機能 / 新製品その他お知らせ

---
## VK Blocks Pro

- Outerブロック：全幅の指定を右側の設定サイドバーから行うのではなく、ツールバーからの指定に変更

---

## WordPressとLightningで構築したサイトにコピペしてサッと使える「VK パターンライブラリ」を公開しています！

新規追加パターン続々追加中です！

VK パターンライブラリ
https://patterns.vektor-inc.co.jp/
パターンを使えば、素早く＆簡単にサイトのコンテンツを充実させることができます。

---

## ベクトレに新しいコースが追加されました！

### 「パターンを使った歯科医院サイトの構築」コース
https://training.vektor-inc.co.jp/courses/create-dental-clinic-site/

下記のデモサイトのような歯医者さんサイトの完成を目指しながら、Lightning基本設定やPro機能、そしてパターンの使い方までを一通り学ぶことができます◎
https://demo.dev3.biz/dental-clinic/

---
## ブロックテーマ X-T9を公開中！
X-T9は、WordPress5.9からβ版として実装されているフルサイト編集機能に対応したブロックテーマです。

Webサイト
https://x-t9.vektor-inc.co.jp/

WordPress公式ディレクトリ
https://wordpress.org/themes/x-t9/

WordPressの公式テーマディレクトリよりご利用いただけます。
使用感などのフィードバック大歓迎です！

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 本編

## 受託制作で役立つWordPressブロック開発実践カスタマイズ基礎

Speaker：石川栄和 

ご感想など **#wpvektor** ツイート大歓迎！

---

## みなさんにちょっと質問！ 1/3
### 質問１：カスタムフィールド製造業を…
Slackの投稿か、コメントスクリーンのリアクションボタンで回答してね！
- __バリバリやってます・やってました ->__ ❤️
- __聞いたことはある ->__ 👍 
- __初耳です ->__ 😂

---
## みなさんにちょっと質問！ 2/3

### 質問２：ブロックパターンを…
- __案件で提供してる ->__ ❤️
- __ユーザーとして活用中・認識はしている ->__ 👍 
- __初耳です ->__ 😂

---
## みなさんにちょっと質問！ 3/3

### 質問３：カスタムブロックの制作を…
- __バリバリやってます ->__ ❤️
- __トライ中 ->__ 👍 
- __今日はそれを聞きに来た ->__ 😂

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 特別開催のお知らせ！
2022年7月15日（金） VWSオンライン勉強会

__新書『現場で使える Googleタグマネージャー実践入門』
ハンズオン講座__

Lightningをご紹介いただいた最新書籍の著者陣をお招きしてのオンライン勉強会を開催します。

https://vektor.connpass.com/event/251966/



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
https://forms.gle/boxBhvhXYJgxd1nV7

- 勉強会の感想
- 今後取り上げてほしいテーマなど

よろしければご意見をお聞かせください。

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 次回の勉強会
2022年7月28日（木）予定 VWSオンライン勉強会 #036

__「Lightningで受託制作みんなどうしてる？の会（仮）」__

connpass公開次第お知らせします！

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

# その他の連絡事項、告知など

---

## Gather の懇親会場
https://app.gather.town/app/LCr1WEbHveQsfz9c/202206-vws

カメラはオフのままでもOK！ウロウロして楽しんでください！
名前に★がある人は「気軽に話しかけてね」
名前に●がある人は「ゆるっと聞くだけ参加」


---
<!-- _class: title -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

# ありがとうございました
