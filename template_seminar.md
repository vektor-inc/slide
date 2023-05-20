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

ベクトル勉強会 東京開催＆ライブ配信
2023年5月21日　15時30分〜
# WordPress 最新機能<br>フルサイト編集での制作実演

#wpvektor ツイート大歓迎！

※会場の写真撮影は、他の参加者さんの写り込みに
　ご配慮ください。


---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# ようこそ！はじめに

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 株式会社ベクトルについて

---

![bg](images/Vektor-product-2023.png)


<!-- Figmaデータはこちら:
https://www.figma.com/file/KG5vrcxtDwQGBOwHRiJlHm/VWS%E5%8B%89%E5%BC%B7%E4%BC%9A-%2F-%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9?node-id=705-95&t=J1LhNNlIF3qqVELK-4
-->

---

![bg](images/Vektor-plugin-2023.png)

<!-- Figmaデータはこちら:
https://www.figma.com/file/KG5vrcxtDwQGBOwHRiJlHm/VWS%E5%8B%89%E5%BC%B7%E4%BC%9A-%2F-%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9?node-id=705-170&t=J1LhNNlIF3qqVELK-4
-->

---

![bg](images/Vektor-plugin-pro-2023.png)

<!-- Figmaデータはこちら:
https://www.figma.com/file/KG5vrcxtDwQGBOwHRiJlHm/VWS%E5%8B%89%E5%BC%B7%E4%BC%9A-%2F-%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9?node-id=705-170&t=J1LhNNlIF3qqVELK-4
-->


---
![bg](images/Team-Vektor-202208.png)


---
## 本日の内容

* ご参加にあたって & 会場のご案内
* WordPress 最新機能フルサイト編集での制作実演（約90分）
* 休憩（ライブ配信はここまで）
* アンカンファレンス、プレゼント企画（〜17:50頃まで）
* 記念撮影（希望者のみで）
* 18時終了（会場は18時まで）

---


## ご参加にあたって（１）

* WordPressでのサイト制作（特に受託制作）にご興味がある方 であれば、どなたでもご参加いただけます。
* PHPの知識はなくても大丈夫ですが、WordPressとCSS＋HTMLの基礎知識があることが前提の内容になります。


---

## ご参加にあたって（２）

* WordPressが全く初心者の方には難しい内容となっています。（本日のスピーカー石川の共著のWordPress入門最新書籍を後程ご案内します。プレゼント企画も！）
* 本日対面で参加の方への後日サポートなどは特に設けておりませんのでご了承ください。不明点などは後半のアンカンファレンスの際に一緒に解決していきましょう。
* ライブ配信はオマケです。視聴のみでご参加のみの場合、テキストチャットサポートなどはありませんのでご了承ください。

---

## セッションの内容は後から振り返りできます
動画アーカイブや本日の関連資料は後日のレポートブログで共有いたします。安心してゆっくり見てください。

### ベクトル公式 Twitter @vektor_inc 
レポートブログなどお知らせしております。
ぜひフォローしてください


---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 会場について

（Zoom画面共有をストップ）


---
## 会場について
- Wi-Fi のご案内
- お手洗い、非常口
- お飲み物、ごみばこ
- 写真撮影について（ツイートなどする場合、他の参加者さんの写り込みにご配慮お願いします。スピーカーの石川を始め、ベクトルスタッフは大丈夫です。）

---

## 会場の皆さんとのやりとり Sli.do

- 本編で気になったこと、ご質問を気軽に書き込めます
- 後半のアンカンファレンスで、出てきた質問をみんなで見ていきましょう

---

![bg](images/slido-20230520.png)

<!-- Figmaデータはこちら:
https://www.figma.com/file/KG5vrcxtDwQGBOwHRiJlHm/VWS%E5%8B%89%E5%BC%B7%E4%BC%9A-%2F-%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E7%94%BB%E5%83%8F%E3%81%AA%E3%81%A9?type=design&node-id=802-94&t=85Rr5CC2dj6QYzd2-4
-->

---

(Zoom 画面共有再開)

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 本編
## WordPress 最新機能<br>フルサイト編集での制作実演
スピーカー：石川栄和 

ご感想など **#wpvektor** ツイート大歓迎！

---

## ブロックテーマでの解説にフルリニューアル  「いちばんやさしいWordPressの教本 第６版」発売されました！

初版の発売から早9年、WordPressをはじめて触る人にもウェブサイトが開設できるところまで細かく解説した「いちばんやさしいWordPressの教本」第6版が2023年4月25日に発売！
https://www.vektor-inc.co.jp/info/wp-book-v6/

---

（本編終了後、ライブ配信の締め）

---

## VWSオンライン勉強会について
ベクトルがWordPressやウェブ制作にかかせないさまざまなテーマをとりあげて開催しているオンライン勉強会です。

ご興味がある方であれば、経験や技術レベルに関係なく、どなたでもご参加いただけます。

また、ベクトル製WordPressテーマLightning・X-T9などの最新機能情報・カスタマイズ・運用方法についてもご案内しています。

---

## 過去の動画アーカイブをYouTubeでご覧いただけます！

https://www.youtube.com/@VektorInc
🌟2022年12月までの勉強会動画がまるッとみれます！

おすすめプラグイン / フルサイト編集 / Googleタグマネージャー / トラブルシューティング / CSSカスタマイズ / PHP超入門 / アクションフック / 物件情報サイト作成 / ビジネスサイト作成 / パターン活用 / Lightningカスタマイズ / 配色の基本 / SEO関連
 

__🔔チャンネル登録もよろしければぜひ！__


---



<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 休憩


---


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## アンカンファレンス

皆さんからの質問・回答を見ていきましょう！
（17:45頃まで）

---


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## プレゼント企画！
じゃんけんで勝利した方にお好きなアイテムをプレゼント！
ステッカーもぜひ持って帰ってください⭐︎



---

![bg](images/Vektor-Passport-2023.png)

<!-- Figmaデータはこちら:
-->

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# その他の連絡事項、告知など

---
<!-- _class: title -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

# ありがとうございました

また次の勉強会でお会いしましょう！
