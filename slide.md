---
marp: true
---
<!-- 
theme: vk-slide
size: 4:3
paginate: true
style: |
_paginate: true 
-->
<!-- _class: title -->
<!-- Scoped style -->


<!-- _class: title -->
![bg](themes/vk-slide/images/vws_title_4_3_red.svg)

<center>All New Lightning</center>

# Lightning G3 について

---

<!-- _paginate: false  -->

![bg](images/theme-org.png)

<div class="telop telop--right" style="top:6em;">ビジネスサイト向け無料WordPressテーマ</div>

<div class="telop telop--left" style="bottom:0;">2015年リリース  / おかげ様でアクティブ <b>50,000+</b> インストール</div>

---

* さすがに基本設計が古い
* 互換維持など本来不要なコードが多い
* 諸々改修したいが更に互換コードが増える

#### 最新のウェブ環境にあわせて、<br>より簡単に、よりカスタマイズしやすく

---

<!-- _paginate: false  -->

![bg](images/lightning-still.png)

---

## Lightning G3 とは

G3 は Generation（世代） の略
* 第１世代 : Bootstrap3 ベース
* 第２世代 : Bootstrap4 に変更
* 第３世代 : <b class="text-danger">New!!</b>

バージョン3は既に通り越しているので、
区別するために「G3」と呼んでいます。

---

## Lightning G3 = Lightning 14.x

* Lightning G3 は __無料版 Lightning 14.x__
* テーマとしては今まで通りの「Lightning」

<center class="alert alert-danger">別テーマではありません</center>

* 基本的に従来版からバージョンアップしても即死しない構造にしています。
* 従来版も継続メンテナンスです。　（後述）

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_4_3_lightgray.svg)

# Lightning G3版の特徴

---

<style scoped>
section table{
  font-size:24px;
}
</style>

## 独自デザインの作成が容易

デザインスキンで装飾の切り替えが
できるようにしていたが...

| | 従来 | G3 |
|-| ------------- | ------------- |
| 共通CSS | ブロックエディタ関連  | サイトのレイアウト<br>各パーツのレイアウト等<br>ブロックエディタ関連  |
| スキンCSS | サイトのレイアウト<br>各パーツのレイアウト等<br>各種装飾  | 各種装飾  |


---

### G2以前のデザインカスタマイズ

* 既存のデザインを打ち消すのが手間
* 最初から自作するとテーマの仕様変更などに対応するのが大変すぎて無理

---

### G3以降のデザインカスタマイズ

* 共通CSS : 基本レイアウト・ブロック
* スキン : 細かい装飾用

独自のデザインスキンが作りやすい構造

---

### 装飾を極力省いたスキン<br>「Plain」を用意

デザインスキン Plain を選んで、自分で少しだけCSSを書き足す

### デザインスキンのプラグインサンプルを用意

https://github.com/vektor-inc/lightning-g3-skin-sample

---

## 速度改善

* 長年積み重なった古い機能・互換処理のためのコードを削除
* CSSの構造変更

---

<div class="row"> 
<div class="col-6">
Lightning Pro
<img src="images/PageSpeed-Insights-lightning-pro.png" alt="" class="border" /></div>
<div class="col-6">
Lightning G3 + Pro Unit 
<img src="images/PageSpeed-Insights-lightning-g3-pro.png" alt="" class="border" />
</div>
</div>

<center>爆速とまではいきませんが
以前より速くなりました。</center>


---

# Pro版の新記追加機能

---

## ヘッダーカスタマイズ機能

従来はスキンによってヘッダーレイアウトが違ったが、G3からは<strong>スキンに関係なく様々なレイアウト・機能が利用可能</strong>

---

### 現行（G2）版の例

Fort
https://demo.dev3.biz/fort/

Charm
https://demo.dev3.biz/charm

Variety
https://demo.dev3.biz/variety/

---

## G3版

<div class="row"> 
<div class="col-12"><img src="images/customize-header.png" alt="" style="display:block; width:60%; margin:auto;" /></div>
</div>

---
<!-- Scoped style -->
<style scoped>
section img{
  width:99%;
}
</style>

### ヘッダーレイアウトバリエーション

##### ナビゲーション回り込み（標準）
<img src="images/header-layout-float.png" alt="" class="border" />

##### 中央揃え
<img src="images/header-layout-center.png" alt="" class="border" />



---

<!-- Scoped style -->
<style scoped>
section img{
  width:90%;
}
</style>


##### タイトル中央 & ナビ貫通
<img src="images/header-layout-center-penetrate.png" alt="" class="border" />

##### ヘッダーコンタクトあり & ナビ貫通
<img src="images/header-layout-sub-contact.png" alt="" class="border" />

##### ヘッダーウィジェットあり & ナビ貫通
<img src="images/header-layout-sub-widget.png" alt="" class="border" />

---

## ナビゲーションカラー指定機能

---

## ページヘッダー機能強化

* 投稿ページのページヘッダーの表示要素が切り替え可能
* 固定ページのページヘッダーにサブテキスト表示可能
* 固定ページのページヘッダーに先祖階層を要素を表示可能
* 投稿タイプ毎に色やサイズ指定可能

---

![bg right](images/Lightning-G3-Pro-Unit-setting-page.png)

## 使う機能のみ<br>有効化

使わない機能は設定画面から停止できます。

---
<style scoped>
section table{
  font-size:24px;
}
</style>

## 非表示機能強化

ページ毎に非表示指定できる要素が増えました

| 従来（G2） | G3 |
| ------------- | ------------- |
| ページヘッダー<br>パンくずリスト  | ヘッダー<br>ページヘッダー<br>パンくずリスト<br>フッター |

ヘッダー・フッターを含まないLPの作成が簡単！

<p class="caption">※ G3無料版からは非表示設定がなくなります。</span>

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_4_3_lightgray.svg)

# G3版の構造について

---

## モード切り替えを行うと<br>G3版になります

無料版Lightningユーザーが __アップデートしていきなりG3版が読み込まれるわけではありません。__

---

![bg right](images/G3_change_generation.png)
<!--<img src="images/G3_change_generation.png" alt="" />-->

外観 > カスタマイズ > Lightning 機能設定から「Generation3（β）」に切り替えて保存・画面を再読み込みしてください。

---

## テーマ内で<br>ディレクトリが分かれている

テーマ内に 13系（G2）のファイルと新しいG3のファイルが
それぞれ ___g2__ ディレクトリ、 ___g3__ ディレクトリにわかれています。

---


## 互換性について

G2からG3へモードを切り替えた時互換性はあまりありません。
__受託案件の既存サイトはG3に変更せずそのまま使ってください。__
自分で運営しているサイトをG3に切り替える場合は必ずバックアップをとった上で行ってください。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# Pro版の扱いについて

---

## 拡張プラグインに変更になります

テーマとしての Lightning Pro の G3 版は作りません。

* 無料テーマLightning
* 有料の機能拡張 __プラグイン Lightning G3 Pro Unit__

という構成に移行します。

---

## 現状の Lightning Pro は継続メンテ

基本的に新機能追加はG3版に移行します。
WordPressのバージョンアップや不具合修正など
__<span class="text-danger">メンテナンスは引き続き継続</span>__ しますので、
__<span class="text-danger">受託案件</span>で利用や、<span class="text-danger">アップデートが頻繁すぎると思われる方</span>は Lightning Pro をそのまま継続してください。__

---

## ライセンスと商品構成について（予定）

#### 現状 : Lightning Pro 

製品構成 : 
* テーマ Lightning Pro（G2）
* プラグイン VK Blocks Pro

新規 7700円（税込み）
アップデート更新ライセンス 7150円（年）

---

####  改定後 : Lightning G3 Pro Pack（仮）

製品構成 : 
* プラグイン : Lightning G3 Pro Unit
* プラグイン VK Blocks Pro
* テーマ Lightning Pro（G2）

アップデート１年 9900円（税込）
アップデート３年 26,400円（税込）
アップデート５年 39,600円（税込）

---

### 新プランは４月中旬頃販売開始予定

G3 Pro Pack 販売開始前に Lightning Pro 購入ユーザーは、ライセンス有効期間内は G3 Pro Unit がダウンロード可能

### G3 にしない場合

Lightning Pro のみの更新ライセンス 7150円（年）は継続販売

※ Lightning Pro 単体での販売は終了します。

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# β版入手方法

---

## Lightning 14系

まだ公式ディレクトリにはアップしていません。

https://lightning.vektor-inc.co.jp/

## Lightning G3 Pro Unit

Lightning Pro のライセンスが有効な方は VWSのマイアカウントページよりダウンロードできます。

https://vws.vektor-inc.co.jp/my-account


---

## ついでに

絞り込み検索ができる無料プラグイン

#### VK Filter Search もよろしく

<img src="images/VK-Filter-Search-WordPress-org2.png" alt="" class="border" />


---

<!-- _class: title -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_4_3_red.svg)

# ありがとうございました