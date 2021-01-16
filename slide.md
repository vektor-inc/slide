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
<!-- _class: title -->
<!-- Scoped style -->



<!-- _class: title -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)


# VK Block Pattern Plugin Generator

独自のブロックパターン集プラグインを"生成"して
販売及び案件などでの流用を超簡単にするプラグイン

---

## このプラグインでできる事

* ブロックパターンの作成
* 作成したブロックパターン集のプラグインの生成
* 一度生成したパターンから簡単に再編集・再書き出し

※細かい機能は沢山ありますが順番に解説していきます

---

## ブロックパターン機能とは？

* WordPress 5.5から実装された機能
* 複数のブロックを組み合わせたパータンを一括で挿入する事ができる

---

## パターンの登録だけなら難しくない

---

### プラグインを使う場合

VK Block Patterns などのプラグインを使えばで簡単に独自のパターンを登録できます。

しかし...

<div class="alert alert-danger">

❌ 他のサイトで同じパターンをそのまま使う事ができない
❌ 他のサイトで使おうとするとエクスポート＆インポートが必要だが、キレイに複製するのは知識が必要だったり画像のリンク先などの問題もありかなり手間

</div>

---

### 独自にコードに書いて管理しようとする場合

* まず投稿画面でブロックパターンを作成
* コードエディタに切り替えて表示されるコードをコピー
* register_block_pattern() 関数などでパターンとして登録
* 使用している画像をプラグイン内に複製
* 画像参照URLをプラグイン内で保持している画像に置換

---

# <center>この手順だけでもう面倒</center>

---

# <center>再編集もほぼ同じ手間</center>

### <center>面倒過ぎて追加・修正する気力がわかない

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# VK Block Pattern Plugin Generator

---

## １. 専用の投稿タイプでブロックを登録

<div class="alert alert-info">投稿の際はカテゴリーも指定してください。未指定の場合使用できません。</div>


---

## 2. 設定画面でプラグイン名を入力

データ管理・設定設定画面でプラグイン名を英数字で入力してください。

---

## 3. エクスポートボタンを押すだけ！

「新規プラグインとしてエクスポート」ボタンをクリックするとプラグインとして書き出されます。

---

## 4. プラグイン有効化で即時利用可能

---

## 5. 再編集・再書き出しもワンクリック

--- 

## このプラグインのポイント

* 普通に管理画面からアップした画像も作成したプラグインに自動複製します。
* 画像の参照URLも自動置換します。
* このプラグインから生成するプラグイン以外のディレクトリへの書き出し・読み込みも可能

---

* ブロックパターン用のCSSファイルの適用が可能
* ブロックパターン用のCSSファイルの管理画面から編集も可能
* 利用中のテーマ・プラグインに依存する事なく利用可能
* リモートサーバーの画像を使用している場合も自動取得・調整します。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 想定できる使い方

---

## 受託案件でよく使うパターンをプラグイン化


---

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# そのほか質問などあれば

---

<!-- _class: title -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

# ありがとうございました
