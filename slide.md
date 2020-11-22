---
marp: false
---
<!-- 
theme: my_theme
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

---
## カスタマイズ方法

スライドのデザインはCSSでカスタマイズする事ができます。

直接手動でカスタマイズする場合は themes/css/style.css を書き換えてください。

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