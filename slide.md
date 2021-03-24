---
marp: true
---
<!-- 
theme: vk-slide
size: 16:9
paginate: false
style: |
_paginate: false 
-->
<!-- _class: title -->
<!-- Scoped style -->



<!-- _class: title -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

Lightning フルリニューアル 第３世代版
# Lightning G3 について

---

## Lightning G3 とは

* G3 は Generation（世代） の略
* Bootstrap3をベースとしていた最初の Lightning 第１世代、
Bootstrap4に変更した第２世代、
そして今回の全面改修で第３世代。
* バージョン番号としては３は遥か昔に通り越してしまっているため、区別するために「G3」と呼んでいます。

---

## Lightning G3 = Lightning 14.x 〜

* Lightning G3 は 無料版 Lightning の version 14.x 〜 の事を指します。
* 別のテーマではなく、__テーマとしては今まで通りの「Lightning」__ です。

---

## モード切り替えを行うとG3になります

無料版Lightningユーザーが __アップデートしていきなりG3版が読み込まれるわけではありません。__
13系（G2）のファイルと新しいG3のファイルがテーマ内にディレクトリ別で共存しており、カスタマイザから Generation3 に設定を切り替える事によって初めてG3になります。

---

キャプチャ

---

## 互換性について

G2とG3の互換性はあまりありません。
__受託案件の既存サイトはG3に変更せずそのまま使ってください。__
自分で運営しているサイトをG3に切り替える場合は必ずバックアップをとった上で行ってください。

---


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# G3版の特徴

---

## 速度改善

* 長年積み重なった古い機能・互換処理のためのコードを削除
* CSSの構造変更

---

<div class="row"> 
<div class="col-6">
Lightning Pro
<img src="images/PageSpeed-Insights-lightning-pro.png" alt="" /></div>
<div class="col-6">
Lightning G3 + G3 Pro Unit 
<img src="images/PageSpeed-Insights-lightning-g3-pro.png" alt="" />
</div>
</div>

爆速とまではいきませんが、以前より速くなりました。

---

## 独自デザインの作成が格段に容易に

基本レイアウトなど共通のCSSとして持つように構造変更

| | 従来 | G3 |
|-| ------------- | ------------- |
| 共通 | ブロックエディタ用  | ブロックエディタ用<br>サイトのレイアウトなど  |
| スキン固有 | サイトのレイアウトなど<br>各種装飾  | 各種装飾  |

---

### 装飾を極力省いたスキン「Plain」を用意

デザインスキン Plain を選んで、自分で少しだけCSSを書き足す

### デザインスキンのプラグインサンプルを用意

https://github.com/vektor-inc/lightning-g3-skin-sample


---

# Pro版で新たに追加した機能

---

## ヘッダーカスタマイズ機能

従来はスキンによってヘッダーレイアウトが違ったが、G3からは<strong>スキンに関係なく様々なレイアウト・機能が利用可能</strong>

---

Pale / Variety / Charm のキャプチャ

---

ヘッダーカスタマイズキャプチャ

---

## ページヘッダー機能強化

* 投稿ページのページヘッダーの表示要素が切り替え可能
* 固定ページのページヘッダーに先祖階層を要素を表示可能
* 固定ページのページヘッダーにサブテキスト表示可能
* 投稿タイプ毎に色やサイズ指定可能

---



---

VK Block Patterns などのプラグインを使えばで
簡単に独自のパターンを登録可能。

しかし...

❌ 登録したパターンが使えるのはそのサイトだけ
移植するにはエクスポート＆インポートが必要
❌ キレイに複製するのは知識が必要だったり画像のリンク先などの問題もありかなり手間

</div>

---

## Pro版の機能がプラグインになります

#### 現状

テーマ Lightning Pro（有料）

#### G3 版

テーマ Lightning + プラグイン Lightning G3 Pro Unit（有料）

---

### 独自にコードに書いて管理しようとする場合

* まず投稿画面でブロックパターンを作成
* コードエディタに切り替えて表示されるコードをコピー
* register_block_pattern() 関数などでパターンとして登録
* 使用している画像をプラグイン内に複製
* 画像参照URLをプラグイン内で保持している画像URLに置換

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

データ管理・設定画面でプラグイン名を英数字で入力します。

---

## 3. エクスポートボタンを押すだけ！

「新規プラグインとしてエクスポート」ボタンをクリックするとプラグインとして書き出されます。

---

## 4. プラグイン有効化で即時利用可能

---

## 5. 再編集・再書き出しもワンクリック

--- 


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# このプラグインのポイント

---

## 管理画面からアップした画像も自動複製

ブロックパターンで使う画像を通常の記事作成時のようにWordPressから挿入しても、自動的に複製してプラグインとして出力してくれます。

#### 画像の参照URLも自動置換

パターンデータはjson形式で出力・入力しますが、その際に画像URLを自動置換してくれます。

---

## 独自CSS適用可能&管理画面から編集可能

データディレクトリ内にstyle.cssがある場合に読み込んで適用されるので、ブロックパターンに __デザイナーがCSSで独自の装飾を施してプラグイン化__ できます。

管理画面でも style.css ファイルを編集する事ができます。

--- 

## 任意のディレクトリにデータ出力可能

このプラグインは作ったパターンをプラグインとして書き出しできますが、指定のディレクトリに書き出し・読み込みも可能なので、 __自作のテーマや既存の自作プラグインなどにブロックパターンを持たせる事が容易__ で管理も簡単です。

---

## 利用中のテーマ依存が少ない

ブロックパターンなので、特にテーマの垣根はありません。
* 特定のブロックプラグインを使用したパターンの場合は、そのプラグインがユーザー環境に入っていない場合はその部分に影響します。
* VK Blocks / VK Blocks Pro のブロックを使った場合、ユーザー環境にVK Blocksがインストールされていない場合はパターン自体自体が自動的に非表示になります。

---

#### その他

* リモートサーバーの画像を使用している場合も自動取得・調整します。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 想定できる使い方

---

## 受託案件でよく使うパターンをプラグイン化

自分がよく使う組み合わせをプラグイン化して使い回せば効率よくサイト構築が可能になります。

---


## 独自のプラグインとしてとして配布・販売

* デザイナーが独自の装飾を施したセクションパターン集
* ページまるごとパターン化して業種別・ページ別のテンプレート集

テーマ・ページテンプレートのような製品をプログラムの知識がなくてもプラグイン化して販売できます。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# β版入手方法

---

## Lightning Pro / Katawara に付属

<div class="alert alert-warning">2021年1月21日〜31日</div>

正式な販売価格・販売形態は未定ですが、Lightning Pro のライセンスが有効あるいは Katawara 購入者は VWSのマイアカウントページ（ https://vws.vektor-inc.co.jp/my-account ) からダウンロード可能

※正規販売価格は現在の Lightning Pro より高くなる予定です。

---

<!-- _class: title -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

# ありがとうございました