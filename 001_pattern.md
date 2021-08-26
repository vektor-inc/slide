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

# ブロックパターンを使って<br>効率よくサイト構築しよう

---

## ブロックパターンとは

https://www.figma.com/file/5qrAKvgQV8Ilx6WF4qoT5f/VWS%E5%8B%89%E5%BC%B7%E4%BC%9A-25-%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3v

- WordPress 5.5から搭載されている機能です。

---

## プラグイン VK Block Patterns(無料)

プラグインの VK Block Patternsでさらに使いやすく

https://www.vektor-inc.co.jp/service/wordpress-plugins/vk-block-patterns/

* ビジネスサイトでよく使いそうなパターンが登録されている
* 独自のパターンを登録する事ができる

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# ブロックパターンの挿入方法

---

## 左上の新規ブロック追加 -> パターンタブ

 * カテゴリーを選択
 * 検索から選択

---

## 本文欄の + に検索からも挿入可能

ただし...
 * ブロックのように 本文欄に / からパターン名を入力しても出てこない
 * パターン名が長いものは出てこない？

---

## ブロックから変換

1. 見出しや段落ブロックを配置
1. 配置したブロックのツールバーのアイコン部分をクリック
   → パターン

※ ベクトル製品では全幅のパターンは現状変換対象外になっている

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## ブロックパターンの使い所

---

## 自分で新規要素・ページ追加する時

かんたんにポチポチできるから単純に作りやすい
クライアントにイメージ・構成確認するのも容易

---

## クライアントが頻繁に追加更新する特定のコンテンツ用

* 製品紹介
* スタッフ紹介
* 実績紹介
* 物件紹介

---

#### 独自に改変してVK ブロックパターンに登録

1. 組み合わせて編集する
2. VK ブロックパターンに登録
3. クライアント名のカテゴリーを作成して登録

※「複製すればいいだけじゃね？」説あり

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## ブロックパターンの編集のコツ

---

### リスト表示モード / パンくずを使って選択する

クリックしにくい要素も、リスト表示モード / パンくずを使って選択する事ができる

（フィットカラムバナーでテスト）

### 高度な設定 > クラス名を確認する

高度な設定 > クラス名 に位置指定などのクラス名が入っている事がある

---

## 再利用ブロックとの違い

* 再利用ブロック : 複数箇所に置いておきたい共通の内容
* ブロックパターン : 書き換え前提の雛形

再利用ブロックをひな形として使うと、配置したあとに解除し忘れて元を破壊される

---

## VK Block Patterns の注意点

* パターン名やカテゴリー分類は試行錯誤中につき変更される事がある

---

## ジェネレーター（有料）使うと別プラグインとして書き出せる

VK Block Pattern Plugin Generator
https://www.vektor-inc.co.jp/service/wordpress-plugins/vk-block-pattern-plugin-generator/

VKブロックパターンや再利用ブロックはDBに保存されるので、
* 他のサイトに移動するなら手動になる
* サイト内の保存データなので該当の投稿データを削除されると消える

---

## パターンディレクトリ

https://wordpress.org/patterns/

* コピーして貼り付けられる
* テーマのCSSとの依存もあるので、なかなか実用的でないかも
* 独自に調整して VK ブロックパターンなどに登録するのが良いかな

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

## 余談 : <br>カスタムフィールドでもいいんじゃないか説

---

### カスタムフィールドでテンプレートを組むメリット

* 後からレイアウトの変更がしやすい
* クライアントがレイアウトを壊す事がない
* 入力された値を投稿一覧と詳細ページで共通で表示させる事ができる

---

### カスタムフィールドでテンプレートを組むデメリット

* PHPでテンプレートを組む必要がある（そんなに難しくはない）
* フィールド毎にDBを消費していく
* 動的表示なのでその分遅い（キャッシュを使えばかわらない）
* WordPress標準の検索フィールドにはひっかからない

---

カスタムフィールドの方が良さげなケース（個人的見解）
* 投稿一覧にも共通の値を表示したい場合
* 後からレイアウト変更になった場合に手動で対応が困難な件数の場合