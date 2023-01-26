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

VWS オンライン勉強会 #042
# Lightningや他テーマでも使える<br>無料スライダーブロック徹底解説

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
* 『Lightningや他テーマでも使える無料スライダーブロック徹底解説』
  * 基本編：基本的な使い方・便利な機能 (約25分)
  * 応用編：ブロックを組み合わせて作る実例紹介 (約25分)
* 質問相談会（〜22:00まで）
* 22:05頃から懇親会・ユーザーフィードバック会（Zoomのみ、配信なし）

---

## セッションの内容は後から振り返りできます
URLリンク情報などはSlackや後日のレポートブログで共有いたします。動画もシェアされますので安心してゆっくり見てください。

---

## ハッシュタグは #wpvektor
## コメントスクリーンはこちらから
https://www.commentscreen.com/comments?id=yON1csBVwso87zBaC1Uv

コメント、リアクションをぜひお願いします！

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## だれでもお気軽に 質問・回答 記入シート

https://docs.google.com/spreadsheets/d/1Yvk3AN4pWn2tjL7DBe0HZm4OvvWOWhfp9ub76bAjmpQ/edit?usp=sharing

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 今月の新機能 / 新製品その他お知らせ


---

## Lightning（G3） 15.4.0 でフィルターフックlightning_pagenation_array を追加しました。
https://www.vektor-inc.co.jp/product-update/lightning-15-4-0-lightning_pagenation_array/

---

## VK Filter Search Pro 1.12.1 でカスタム分類検索のプルダウンのデフォルトラベルが変更出来るようになりました
https://www.vektor-inc.co.jp/product-update/vk-filter-search-pro-1-12-1/

---

## VK Blocks Pro1.49.0 でカスタムブロックスタイル設定を追加しました
https://www.vektor-inc.co.jp/product-update/vk-blocks-pro1-49-0-custom-block-style/


---
## VK Blocks のスライダーブロックでカルーセル機能が強化されました


---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 本編

## Lightningや他テーマでも使える<br>無料スライダーブロック徹底解説

ご感想など **#wpvektor** ツイート大歓迎！

---
## Lightningや他テーマでも使える<br>無料スライダーブロック徹底解説

__はじめに__
これまでVK Blocks のPro版でのみの機能だったスライダーブロックが無料版でも利用できるようになりました！
この機会に、スライダーブロックの基礎〜応用の使い方を一緒に見ていきましょう！

---

## 基本編：スライダーブロックの基本的な使い方・便利な機能

スピーカー：佐々木

【無料プラグイン】VK Blocks スライダーブロックの使い方を徹底解説（基本編）
https://www.vektor-inc.co.jp/post/how-to-use-slider-block-basic/

---
## VKパターンライブラリのご紹介(無料/有料)

ただいま 165 パターンを公開中！
https://patterns.vektor-inc.co.jp/

WordPress のブロックエディタで使えるパターンを公開しています。あらかじめデザインされたパターンをコピー＆ペーストすることで、見た目そのままご自分のサイトで使っていただくことができます。

---

## 応用編：こうすればできる！ブロックを組み合わせて作るスライダーの実例紹介と解説

スピーカー：鳥山 / 久納

VK Blocks スライダーブロックのパターン9選（実例編）
https://www.vektor-inc.co.jp/post/vk-blocks-slider-pick-up-pattern/


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
https://forms.gle/CgSpzXMXLJkWgUCq7

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
## ベクトル有償製品ユーザーアンケートを実施しております（再）

製品とサービスの継続的な開発・改善のために、あなたの声をぜひお聞かせください。

アンケート調査期間：2023年1月31日（火）まで
https://www.vektor-inc.co.jp/info/2022-vektor-annual-survey/

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 次回の勉強会（予定）

WordCamp Asia 2023 参加のため…

### 2月の勉強会はおやすみします🙇‍♂️

WordCamp Asia 2023
https://asia.wordcamp.org/2023/


---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 次回の勉強会（予定）
2022/3/23(木)予定 VWSオンライン勉強会 #043

### Lightning勉強会何かやります！

コンパス準備中！受付開始をしましたらご案内します！
ぜひスケジュールをチェックしておいてください。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# その他の連絡事項、告知など

---
![bg](images/konshinkai-40.png)

---
<!-- _class: title -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

# ありがとうございました

また次の勉強会でお会いしましょう！
