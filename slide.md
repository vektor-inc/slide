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

---

![bg right](images/G3_change_generation.png)
<!--<img src="images/G3_change_generation.png" alt="" />-->

外観 > カスタマイズ > Lightning 機能設定から「Generation3（β）」に切り替えて保存・画面を再読み込みしてください。

---

## テーマ内でディレクトリが分かれている

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

## 現状の Lightning Pro は継続メンテナンス

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

G3 Pro Pack 販売開始までは __既存のPro版ユーザーに
2022年4月末までの G3 Pro Unit の更新ライセンスが付属__ します。

### G3 にしない場合

Lightning Pro のみの更新ライセンス 7150円（年）は継続販売

※ Lightning Pro 単体での販売は終了します。

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

## ナビゲーションカラーも指定可能に

---

## ページヘッダー機能強化

* 投稿ページのページヘッダーの表示要素が切り替え可能
* 固定ページのページヘッダーにサブテキスト表示可能
* 固定ページのページヘッダーに先祖階層を要素を表示可能
* 投稿タイプ毎に色やサイズ指定可能

---

![bg right](images/Lightning-G3-Pro-Unit-setting-page.png)

## 必要な機能のみ<br>有効化

使わない機能は設定画面から停止できます。

---

## 非表示機能強化

各ページ毎に非表示に指定できる部分が増えました

| 従来（G2） | G3 |
| ------------- | ------------- |
| ページヘッダー<br>パンくずリスト  | ヘッダー<br>ページヘッダー<br>パンくずリスト<br>フッター |

※ G3無料版からは非表示設定がなくなります。

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

<!-- _class: title -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

# ありがとうございました