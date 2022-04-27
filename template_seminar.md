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

# VWS オンライン勉強会 #033
__WordPressのトラブルシューティングについて__

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
* 本編:WordPressのトラブルシューティングについて(約45分)
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

初めて＆日頃Lightningなどのベクトル製テーマ・プラグインを
ご利用中に困ったことが出てきたら
https://lightning.vektor-inc.co.jp/support/

---

## ハッシュタグは #wpvektor

## コメントスクリーンはこちらから 
https://commentscreen.com/comments?id=Iq522Ws84xqW1YTGgKcM

コメント、リアクションをぜひお願いします！


---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 今月の新機能 / 新製品その他お知らせ

---
## VK Blocks (Pro) / Lightning / Lightning Pro / Katawara で Font Awesome 6 に対応しました
https://www.vektor-inc.co.jp/product-update/support-font-awesome-6/
Font Awesome側で後方互換性を維持しているので、5 から 6 に設定を切り替えても設置済みアイコンの表示に問題が起きないようになっています。

---

## FSE対応ブロックテーマ「X-T9」を公開しております
X-T9は、WordPress5.9から β版 として実装されているフルサイト編集機能に対応したブロックテーマです。
https://x-t9.vektor-inc.co.jp/
WordPressの公式テーマディレクトリよりご利用いただけます。
使用感などのフィードバック大歓迎です！

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 本編

## WordPressのトラブルシューティングについて

Speaker：石川栄和 

ご感想など **#wpvektor** ツイート大歓迎！

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

## 次回の勉強会
2022/5月27日（金）予定 VWSオンライン勉強会 #034

__「WordPress 最新バージョン6.0 を触ってみよう （仮）」__

ブロックエディタの機能の最新版やそのほか追加になった機能を、デモ画面を見ながら一緒に見ていきましょう。

https://vektor.connpass.com/event/246146/


---


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 参加後アンケートのお願い

参加後アンケートよろしくおねがいします！（1〜2分）
https://forms.gle/usoyYrzSRoTkC7E46

- 勉強会の感想
- WordPressのトラブルで苦労した思い出話などあれば
- 今後取り上げてほしいテーマなど

よろしければご意見をお聞かせください。

---

## フォーラムを活用しよう！500ポイントへ増量！キャンペーン実施中です（期間未定）
ベストアンサーに選ばれると、これまで300ポイントだったところ、500ポイント付与されます！🎉
https://www.vektor-inc.co.jp/info/forum-point-up-campaign/
フォーラムの回答にぜひご参加いただけると嬉しいです！

✅質問した人は、解決に役立った返信に「ベストアンサー」をつけてください✨

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# その他の連絡事項、告知など

---

## Gather の懇親会場
https://app.gather.town/app/VfsK1iktjUPTUGyI/202204-vws
カメラはオフのままでもOK！ウロウロして楽しんでください！
名前に★がある人は「気軽に話しかけてね」
名前に●がある人は「ゆるっと聞くだけ参加」


---
<!-- _class: title -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

# ありがとうございました
