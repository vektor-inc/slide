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
<link href="./themes/vk-slide/fontawesome-free/css/all.css" rel="stylesheet">

# ゼロから覚えたくない<br>WordPress の最新フルサイト編集

VWSオンライン勉強会 #047

石川栄和@Vektor,Inc.

<!-- https://www.meetup.com/ja-JP/kochi-wordpress-meetup-group/events/307763191/ -->


<!-- _class: title -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# ようこそ！はじめに

---

## この勉強会について

WordPressやウェブ制作にまつわる様々なテーマをとりあげて開催しているオンライン勉強会。

ご興味がある方であれば、経験や技術レベルに関係なく、どなたでもご参加いただけます。

---

## 運営元 : 株式会社ベクトル

WordPress テーマ「Lightning」をはじめ、WordPress 関連のテーマ・プラグインなどを多数開発しています。

---

<!-- _paginate: false  -->

![bg right](images/WordCamp_Kansai_2025.jpg)

国内外の WordCamp に協賛しています。

WordCamp Kansai 2025 
WordCamp Asia 2025 
など...

<img class="mt-32" src="images/wca2025-top.png" alt="" />

---

## メディアスポンサー

<img src="images/logo-sakura.png" alt="" style="margin-top:20px;" />

---

<img src="images/staging-sakura.png" alt="" style="max-width:80%;margin-bottom:20px;border:1px solid #ccc;" />

指定のディレクトリを対象にしたバックアップ・ステージング環境をつくれる機能が特におすすめ！

---

<div class="row">  <div class="col-6"><img src="images/sakura-conpane-a.png" alt="" class="mb-32" style="border:1px solid #ccc;" /></div>  <div class="col-6"><img src="images/sakura-fsi.png" alt="" class="mb-24" />
さくらのレンタルサーバーのコントロールパネルから弊社製品2,000円割引のクーポンが入手できます。</div></div>






https://rs.sakura.ad.jp/biz/solutions/web-development/vektor/

---

## 勉強会中のコメント

勉強会中のコメントは YouTube の方によろしくお願いします。
できるかぎり拾っていきたいとは思っています。

#### 歓迎されること

* __チャットでわいわい__ コメントしてください。
* ぜひSNSにも投稿して盛り上げてください <strong>#wpvektor</strong>
* __やさしい言葉使い__ を心がけて、誰にとっても快適な勉強会となるようにご協力ください。

---

## 本日の内容

* ご挨拶・その他お知らせ（約10分）
* 本編（45分程度）
* 質疑応答（〜30分程度）
* 懇親会・質問回・ユーザーフィードバック会

---

## セッションの内容は後から振り返りできます

URLリンク情報などはコメント欄や twitter(X) のアカウントから投稿します。

https://x.com/vektor_inc

動画もシェアされますので安心してゆっくり見てください。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# それでは本編スタート

---

## この勉強会の対象

* ビジネス用のウェブサイトを簡単に作りたい人
  （個人事業主・店舗オーナーなど）
・WordPressの基本操作はわかるが、ブロックテーマでフルサイト編集に慣れていない人
・他の人がブロックテーマをどう使ってるのか見たい人

---

## ブロックエディタの操作自体に慣れてない人

ゼロから覚えたくない人のためのWordPressブロックエディタハンズオン

https://training.vektor-inc.co.jp/courses/wordpress-block-editor/lessons/creating-web-pages-using-block-patterns/

---


* デモサイトのインポート
* WordPressの編集箇所に関する大まかな概念について（ページコンテンツとテンプレート）
* ロゴ画像の変更
* 色の変更
* ヘッダーの変更
* フッターの変更
* 投稿一覧の変更
* ページテンプレートの変更
etc...

---

## デモサイトのインポート

VK FullSite Installer から「X-T9 無料版」をインポート
https://vk-fullsite-installer.com/

---

# WordPressの編集箇所に関する<br>大まかな概念
※ 今まで WordPressを使ってない非エンジニア向け

---

## WordPress は静的HTMLファイルを表示しているわけじゃない

## コンテンツがデータベースに保存される

固定ページや投稿の、タイトルや本文などがデータベースに保存される。

---

## URLにアクセスされたらページを生成する

ページにアクセスされたら、テンプレートにコンテンツデータを反映させて返す。

---

## テンプレートがノーコードで編集可能

クラシックテーマ ・・・　PHPファイル
ブロックテーマ ・・・ ブロックエディタで編集可能

---

* ヘッダーロゴ変更 / サイズ調整
  - 同期パターンが使われてる
* キーカラー / ホバーカラーの変更
* ヘッダーメニューの変更
  - 不要メニューの削除
  - メニューの追加
  - URL変更したらリンク切れるで
* サイトアイコンの変更
* フッターの変更
  - メニューのハンバーガーの切り替え
* ページテンプレートの変更

---

おまけ

* サイトタイトルのフォント変更 / タグの分岐


---


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 質疑応答

---

最後までご参加ありがとうございました！

# 告知とお知らせ

---

## 次回の告知

2025/12/25?(木) 21:00 〜 22:30
### 何かやります

https://vektor.connpass.com/

---

🎄ベクトル製品にまつわるブログリレー🎄

## 12月開催 VWS アドベントカレンダー<br>ぜひご参加ください🎁

カレンダーに参加登録をして、自分のサイトにベクトル製品に関する記事を書いて公開していただくと、ベクトル製品のお買い物に使える __1,000円分__ のクーポンをプレゼント！🎟️✨

無料版のテーマやプラグインに関するブログ記事でもOK！
https://adventar.org/calendars/11894

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)


ベクトルって、どんな製品があるの？
# ベクトル製品ご紹介
沢山あるので、おすすめトップ３をご紹介

---

# おすすめ ①

本日のセッション序盤でも活用しました！
## VK フルサイトインストーラー
https://vk-fullsite-installer.com/
お好みのデモサイトを数クリックで爆速セットアップ！
選択するデモサイトによって無料版・有料版があります。

---

# おすすめ ②

## VK パターンライブラリ
https://patterns.vektor-inc.co.jp/
コピペで使える WordPress のブロックパターンライブラリ
ただいま 470 パターンを公開中（無料版も沢山！）
実用的なビジネスLPも丸ごとコピペできる有料パターンも好評✨

---

# おすすめ ③
ベクトル主要製品とサービス使えるお得なライセンス
## ベクトルパスポート
https://vws.vektor-inc.co.jp/vektor-passport
コピペで使える豊富なプロ品質プレミアムパターンをはじめ、
高機能プラグインや、お気に入り機能・学習サービスなどが
オールインワン！
プロの受託制作者さまにも多数ご活用いただいております。


---

# ありがとうございましたん
懇親会でもお待ちしております


