---
marp: false
---
<!-- 
theme: vk-slide
size: 4:3
paginate: true
style: |
_paginate: false 
-->
<!-- _class: title -->
<!-- Scoped style -->
<style scoped>
  /*
section{
  background: yellow;
}
*/
</style>

# Marp スライド雛形

このリポジトリはマークダウンでスライドが作れる Marp のベクトル用雛形＆スライド管理用です。

LICENCE : MIT  

---

## セットアップ

VSCODEの機能拡張でMARPをインストールしてください。

## スライドとしての使い方

まず md ファイルの一番最初の marp: false を true に変更すると marp のスライドモードになります。

公式ドキュメント

https://marpit.marp.app/directives?id=usage

---
## カスタマイズ方法

スライドのデザインはCSSでカスタマイズする事ができます。

直接手動でカスタマイズする場合は themes/css/style.css を書き換えてください。

#### テーマのCSSドキュメント

https://marpit.marp.app/theme-css

---

## SCSSでのカスタマイズ

scssで編集する場合は以下でgulpが走ります。

```
npm install
gulp
````

theme/_scss/raw.scss を変更してください。

しかし Marpのデフォルトのスタイルを読み込むのが @default だが、これが scss のファイルにあるとsassのコンパイルでエラーになるため、別途コンパイルした後で @import "default" が書いてある _default_import.css を raw.cssと結合して style.css を生成している。

---