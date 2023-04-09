---
marp: false
---
<!-- 
theme: vk-slide
size: 16:9
paginate: true
style: |
_paginate: false 
-->
<!-- transition: clockwise -->
<link href="./themes/vk-slide/fontawesome-free/css/all.css" rel="stylesheet">



<!-- _class: title -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)


Gifu WordPress Meet Up
# パターン活用でサクサク作る！Lightning最新情報 と <br/>フルサイト編集時代への取り組み

Hidekazu Ishikawa
@kurudrive

---

<!-- transition: clockwise -->

## 自己紹介

<div class="row colmuns" > 

<div class="col-8">

### 石川栄和 <span class="caption">Hidekazu Ishikawa</span>

<div class="list-icon mb-48">

<i class="fa-brands fa-twitter"></i>kurudrive
<i class="fa-solid fa-laptop-code"></i>テーマ開発者 / Vektor,Inc.

</div>

#### マイブーム

* ベース / SUP / スケートボード など
* スプラトゥーン / 将棋 ... 勝てない...orz

</div>

<div><img src="images/1_profile.png" alt="" style="width:30vw" /></div>
</div>

---


### <i class="fa-solid fa-brush"></i> テーマ : Lightning 
* ビジネスサイト向け（でもオールラウンドでいける）
* 公式ディレクトリ登録テーマなので無料で利用可能

#### <i class="fa-solid fa-plug"></i> プラグイン : VK All in One Expansion Unit

* タイトルタグ制御や noindex 指定、構造化データ、アクセス解析など各種機能面の強化

https://wordpress.org/plugins/vk-all-in-one-expansion-unit/

---

#### <i class="fa-solid fa-plug"></i> プラグイン : VK Blocks 

* スライダーなど各種ブロック拡張
* 余白調整・文字装飾などブロックエディタの機能などを拡張

https://wordpress.org/plugins/vk-blocks/

#### <i class="fa-solid fa-plug"></i> プラグイン : VK Block Patterns

* オリジナルのパターンを登録
* パターンの拡張など

https://wordpress.org/plugins/vk-block-patterns/

---

## なんでこんな面倒な構成なの？

オールインワンタイプだと

* 後からテーマを変更できない
* 使いたい機能を他のテーマで使えない

など弊害があるため

---

## 今日のお題

* Lightningはパターンの方に力入れてて、こんな感じで貼ったらサクっといけるで
* ブロックテーマはこんな感じで進めてて、特徴としてはこのあたり工夫してるで
* ブロックテーマ時代に向けて

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# #01 ブロックパターンについて

Lightningはパターンの方に力入れてて<br>こんな感じで貼ったらサクっといけるで

---

## VK Pattern Library を使ってみよう

https://patterns.vektor-inc.co.jp/

* エディタ上部にVK Pattern Library へのリンクボタンがある
* VK Pattern Library のリンクボタンは 設定 > VK Block Patterns から非表示にもできる
* __無料版だけでやりくりしたかったら VK Blocks__ で絞り込むのがいいかな？

---

## LP用のパターンを試してみよう

* 1カラム / ページヘッダーなどを非表示 / 上下余白削除
* 貼り付ける
* ヘッダーやフッターも非表示で貼り付ける
* スライダーの解説とか
  https://www.vektor-inc.co.jp/post/vws-online-studygroup-042-report/

---

## VK Block Patterns の便利機能

* 投稿新規追加
  → パターンからいろいろ選べるで
* WordPress標準の邪魔なパターンは
  設定 > VK Block Patterns から非表示にできます
* 独自のパターンにカスタマイズして登録してみる
* 投稿タイプのデフォルトテンプレートに指定

---

## デザインを安定させる余白指定のルール

* 共通余白指定とレスポンシブスペーサー
* レスポンシブスペーサーになぜ指定方法の違いがあるのか
* 共通余白とレスポンシブスペーサーの特徴・効果的な使い方
* 共通余白の指定の変更について（未リリース）

https://patterns.vektor-inc.co.jp/margin-guide/

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# #02 ブロックテーマの取り組み

ブロックテーマはこんな感じで<br>特徴としてはこのあたり工夫してるで

---

<!-- _paginate: false  -->

![bg](images/theme-x-t9.png)

<div class="telop telop--left" style="top:3em;">

#### 2022

</div>

<div class="telop telop--left" style="bottom:2.2em;">
<b style="color:yellow">Block theme X-T9</b> released<br>
Currently in trial and error for block theme
</div>

---

## X-T9 についてあれこれ

クイックスタート
https://x-t9.vektor-inc.co.jp/docs/quick-start-import

* カラーパレット構成について
* スペーサーの指定について
* 基本レイアウトのカラム指定について
* ヘッダー固定制御について

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# #02 FSEに向けての取り組み

---

## VK Blocks

* ダイナミックテキストブロック（近日リリース）
* カスタム分類ブロック（近日リリース）
* カスタムアーカイブブロック（近日リリース）

---

 ## その他

#### VK Dynamic If Block（申請中）

https://github.com/vektor-inc/vk-dynamic-if-block

#### VK Simple Copy Block（申請待ち）
