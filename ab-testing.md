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

今回ご紹介するのは、
ABテストがめちゃめちゃ簡単にできるプラグイン


---

# VK AB Testing


---

<!-- _class: title -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 全体

---

## ここ数年の反省点

* 僕がサポートにかかりっきりになると技術面も運営面も回らない
* 基本放置プレイだったので各スタッフが何を目指すべきなのか見えずに力が伸びない
* 会社としての方針が後手に回っていきあたりばったりになった

---

## 前期目標

### WordPressを知る

現状WordPressの事をまったく追えていないため、いきあたりばったりで開発しても非効率な開発になる。

今までのように下村さんなど特定の誰かにすべて任せるのではなく、開発チームみんながある程度把握する。
全員が詳しく見るのはコスト的に難しいが、重要な部分を把握した人はちゃんと情報をみんなに共有する事で補完する

---

### チームを回す

* チーム（メンバー）マネージメントを行う習慣をつける
* 勉強会・ミーティングを定期的かつ無駄のないように行う
* 経営計画をたてて動く習慣をつける
* テーマも石川以外で回す基礎をつくる

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 開発チーム

---

## セオリーとコアの動きをちゃんと追う

* 正しい書き方を知る
オレオレ実装は歪な力技のコードになって不具合が多発する
* 外の世界を知る
一般の人にちゃんと伝わるissueやプルリクの書き方に慣れる
* 知らずに独自実装してしまい無駄な開発工数になる事を防ぐ

---

<div class="alert alert-info mt-0" style="font-size:36px;">
<div class="colmuns" style="gap:15px">
<div style="flex-basis:20px;"><i class="fa-solid fa-circle-right"></i></div>
<div style="flex-basis:95%;"><strong>技術勉強会をちゃんとやる</strong><br>
  <ul>
  <li>コアのドキュメントを読む</li>
  <li>コントリ活動を確実に積み重ねる</li>
  </ul>
</div>
</div>
</div>

Gutenberg コントリビューターガイド
https://github.com/WordPress/gutenberg/tree/trunk/docs/contributors/code
Global Setting and Styles(theme.json)
https://developer.wordpress.org/themes/global-settings-and-styles/

---

## レビュー体制・リリース工程の見直し

* なんでもかんでも二人レビューではなく、明確な不具合修正など確認が一人で良いケースは減らしつつ、コードレビューが必要なものは逆にしっかりレビューする体制にする
* リリーススケジュールを切っての運用にする
* develop ブランチ運用の見直し

など具体的な事は相談の上順番に改善していく

---


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# サポート体制

---

## 石川がサポートに入らないようにする

* 新しい技術が追えなくて会社全体の技術力に影響する
* ユーザーの求めるもの、温度感を感じて欲しい


### <i class="fa-solid fa-circle-right"></i> 担当をローテーション制にする

フォーラム : RICK さん
プライベートサポート : 大嶋さん

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# デザインチーム

---

* ベクトル系サイトのデザインをもっと洗練したい。<br>というか微妙な部分を順次潰して欲しい。
* そのためにいろんなサイトと見比べたりデザインの本を見たりデザイン力を向上して欲しい。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 14期上半期 個別の課題

---

## 久納さん

* CSSの最新情報を常に拾って使えそうなものは試す
  （ブログなど書ければなお良い）
  https://coliss.com/ など
* テーマ・デザイン関連についてコアの基本的なドキュメントを把握する
  https://developer.wordpress.org/themes/global-settings-and-styles/
  https://developer.wordpress.org/themes/block-themes/

---

## 佐々木さん

イケてるデザインをいろいろ見てデザイン感覚を養って、
既存のベクトルサイトで微妙な部分を指摘したり自分で修正できるようになると望ましいデス（・ｗ・ｂ

---

## RICKさん

### 使い手の事をちゃんとイメージする
要件に書かれた仕様について、書かれた文字だけそのまま実装するのではなく、実際に利用者の立場で、現場での実用において本当にそれが一番使いやすいか考えて実装及びテストを行い、自身を持ってリリースできる状態にして確認に回すことを意識しましょう。

---

### プルリクに複数の変更事項を含めない

プルリク本来の意図と違う変更があると、そもそもこの変更はissueの変更と関係あるのか、どこまでレビューしたか、問題がある部分の差し戻しなどがしにくいので徹底しましょう。

### 開発チーム共通

前述（コアのドキュメントを読む / コントリビューションに参加する）

---

## ちあきさん

あ　り　ま　せ　ん　！

---

## まるやまさん

複数の意図を含んだプルリクをみかけた記憶があるので、なるべく細かいプルリクでよろしくお願いいたします。気の所為だったらごめんなさい

---

## とりさん

* デザインクオリティの向上
パターンはぱっと見で「あ、これはまぁ普通に作れるよね」のレベルだと課金に繋がらないので、イケてるデザインをいろいろ見て、常に2ランクくらい上のデザインを目指しましょう。

* テーマ・デザイン関連についてコアの基本的なドキュメントを把握する
  https://developer.wordpress.org/themes/global-settings-and-styles/
  https://developer.wordpress.org/themes/block-themes/

---

## 大嶋さん

### 使い手の事をちゃんとイメージする
要件に書かれた仕様について、書かれた文字だけそのまま実装するのではなく、実際に利用者の立場で、現場での実用において本当にそれが一番使いやすいか考えて実装及びテストを行い、自身を持ってリリースできる状態にして確認に回すことを意識しましょう。

---

* テーマ・デザイン関連についてコアの基本的なドキュメントを把握する
  https://developer.wordpress.org/themes/global-settings-and-styles/
  https://developer.wordpress.org/themes/block-themes/

### 開発チーム共通

前述（コアのドキュメントを読む / コントリビューションに参加する）

