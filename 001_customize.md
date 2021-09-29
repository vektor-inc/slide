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

# <center>Lightning カスタマイズの<br>ベストプラクティス</center>

---

まず最初に結論を言いますと...

---
# <center>＿人人人人人人人人人人人＿<br>＞　そんなモノは無い！　＜<br>￣Y^Y^Y^Y^Y^Y^Y^Y^Y￣
<center>

---

という事になってしまうのですが、
Lightning をカスタマイズする上で、
主なカスタマイズの種類・手法について、
それぞれどんな手法があって、
メリット・デメリットについて概要を紹介します。
あなたにとってのベストな手法の参考になれば幸いです。

---

## 目次

* ノーコードで出来る事を把握する
* 子テーマと独自プラグイン
* デザインのカスタマイズ（CSS）はどこに書く？
* 機能のカスタマイズは子テーマ？プラグイン？
* 子テーマ/サンプルプラグインの高度な使い方（開発者向け）

※各項目について細かい説明は今回はしません。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# ノーコードで出来る事を把握

---

## 公式の解説を確認

#### Lightning 基本設定
https://training.vektor-inc.co.jp/courses/lightning-basic-settings/

#### Lightning G3 Pro Unit 基本設定
https://training.vektor-inc.co.jp/courses/lightning-g3-pro-unit-basic-settings/

---

## 直接触ってみよう

ノーコードでかなりの事は出来る。直接触って把握しよう。

* 外観 > カスタマイズ 画面で 各パネルや鉛筆アイコン
* 各記事編集画面の「Lightning デザイン設定」
* ExUnit > メイン設定
* 設定 > VK Blocks 設定

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 子テーマと独自プラグイン

標準でできない部分のカスタマイズ

---

## カスタマイズの前に

需要の高い部分はコードを書かなくても出来るようには日々改善しているので、
設定方法Slackやフォーラムで一度聞いてみてください

https://vws.vektor-inc.co.jp/forums
https://vektor-vws.slack.com/
https://github.com/vektor-inc/lightning

---

## 子テーマについて

子テーマの概要とカスタマイズ用の子テーマは下記を参照ください

https://training.vektor-inc.co.jp/courses/lightning-customize/lessons/how-to-use-child-theme-sample/

---

## カスタマイズ用プラグイン

カスタマイズ用の独自プラグインのサンプルは下記からダウンロードいただけます。

https://training.vektor-inc.co.jp/courses/lightning-customize/lessons/lightning-customize-plugin-introduction/

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# デザイン（CSS）のカスタマイズ

---

## 特定の場所のみCSSでカスタマイズ

https://training.vektor-inc.co.jp/courses/wordpress-customize/lessons/css-customize/

---

## CSSはどこに書くのがベスト？

* 外観 > カスタマイズ > 追加CSS
* ExUnit > CSSカスタマイズ
* 各投稿編集画面のCSSカスタマイズ
* 子テーマのstyle.css

---

* 子テーマまたは独自のプラグインでカスタマイズ用のCSSファイルを読み込ませる
* オリジナルスキン 

それぞれ特徴があるが詳細は下記記事後半を参照

https://www.vektor-inc.co.jp/post/wordpress-css-customize-2020/

---

## オリジナルデザインスキン

所定の書式でCSSファイルを登録すると
外観 > Lightning デザイン設定 で選択するデザインスキンを増やす事ができる...のですが...

プレーン + 子テーマのstyle.cssあるいは プレーン + 独自cssファイル読み込みとやってる事は同じ

→ デザインスキンプラグインとして配布・販売するのでなければ上記方法の方が簡単

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 機能のカスタマイズ

---

## WordPressのカスタマイズは子テーマ？プラグイン？

https://www.vektor-inc.co.jp/post/wp-customize-file/

---

## 管理画面だけの設定が正しいのか？

* 書く場所はあまり分散しないほうがよい


---

# おしまい