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


# Vektor,Inc. <br>14期 前期 ざっくり方向性

<!-- _class: title -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 開発チーム

---

## コアの動きをちゃんと追う

* 正しい書き方を知る - オレオレ実装になりすぎると歪な力技のコードになって不具合が多発する
* 外の世界を知る - 一般の人にちゃんと伝わるissueやプルリクの書き方に慣れる
* 知らずに独自実装してしまい無駄な開発工数になる事を防ぐ

→ 技術勉強会でコアのドキュメントを読んだりコントリ活動を確実に積み重ねる

---

## レビュー体制・リリース工程の見直し

* 明確な不具合修正など確認が一人で良いケース
* コードレビューがちゃんと必要なケース
* リリーススケジュールを切っての運用
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
* ユーザーの温度感を感じて欲しい

↓

### 担当ローテーション制にする

フォーラム : RICK さん
プライベートサポート : 大嶋さん

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 個別の課題

---


## RICKさん

### 使い手の事をちゃんとイメージする
要件に書かれた仕様について、書かれた文字だけそのまま実装するのではなく、実際に利用者の立場で、現場での実用において本当にそれが一番使いやすいか考えて実装及びテストを行い、自身を持ってリリースできる状態にして確認に回せるようになりましょう。

---

### プルリクに複数の変更事項を含めない

プルリク本来の意図と違う変更があると、そもそもこの変更はissueの変更と関係あるのか、どこまでレビューしたか、問題がある部分の差し戻しなどがしにくいので徹底しましょう。

---

## とりさん

### デザインクオリティの向上

パターンはぱっと見で「あ、これはまぁ普通に作れるよね」のレベルだと課金に繋がらないので、イケてるデザインをいろいろ見て、常に2ランクくらい上のデザインを目指しましょう。

---





## 自己紹介 <span class="caption">- Self introduction -</span>

<div class="row colmuns" style="margin-bottom:0em"> 

<div class="col-8">

<h3 class="mb-8">石 川 栄 和</h3>

Hidekazu Ishikawa

<div class="list-icon">

<i class="fa-solid fa-laptop-code"></i>Vektor，Inc．代表 / テーマ開発
<i class="fa-brands fa-x-twitter"></i>kurudrive
<i class="fa-brands fa-facebook"></i>hidekazu.ishikawa

</div>

</div>

<div><img src="images/1_profile.png" alt="" style="width:30vw" /></div>
</div>
