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

プラグイン UpdraftPlus を使った

# 自動バックアップの設定 と <br>検証環境の作り方


<!-- https://www.meetup.com/ja-JP/kochi-wordpress-meetup-group/events/307763191/ -->


<!-- _class: title -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

---


## アップデートで発生する不具合

テーマやプラグインが悪い事もあるけど...

* テーマやプラグインの組み合わせで干渉する
* 開発者が想定してない使い方をしている

設定・組み合わせとかは無限にあるので
全ての対応は現実的に難しい

---

## アップデートしないのが一番ダメ

* 脆弱性の修正版が出てるのに古いバージョンで放置される
* 後になって一気にバージョンアップ
  - 不具合が発生する可能性が高い
  - 何が原因か特定が難しい


---

## バックアップや検証環境があれば...

* 検証環境でテストしてからアップデートすればいい
* トラブルが発生してもバックアップからすぐ戻せばいい

---

## バックアップがなくて不具合が発生した場合

そのまま本番環境ではテストし辛い

1. 検証環境をつくる
2. プラグインを順番にオフにしたりして原因を検証する

---


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 実際にやっていきます

---


---

<!-- _paginate: false  -->

<center>

# チャンネル登録よろしく！

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)
