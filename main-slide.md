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

AIは敵か味方か？

# AI時代のテーマ・<br>プラグイン開発者の生存戦略

発表者 : 石川栄和@Vektor,Inc.

<!-- _class: title -->
![bg](themes/vk-slide/images/vws_title_01_red.svg)

---

急激なAIの進化によって今までのビジネスモデルで生きていけるのか恐怖の日々を送ってます！

そんな状況を打開して新たな収益源を確保するために、AIの力を借りてかなり複雑なサロン向け予約システムプラグインを開発中です。

ほぼほぼバイブコーディング。
どんな感じで作ったのか？
品質や保守性、ビジネスとして成り立つのか？
実際作ってみた知見をご紹介したいと思います。

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# はじめに

---

この内容はあくまで発表者が手探りでやっている事です。  

* 勘違いな思考
* 時代遅れな実装
* よくない実装

など多々含まれていると思います。あらかじめご了承ください。  
また「こうした方が捗るで」などありましたら
よろしくお願いいたします。  

---

と、言う事で...

---

### みなさん、AI 使ってます？

<div class="list-icon">

<i class="fa-regular fa-message"></i> ChatGPT や Gemini に聞いてコードを貼り付ける  
<i class="fa-brands fa-github"></i> GitHub Copilot  
<i class="fa-solid fa-terminal"></i> OpenAI Codex  
<i class="fa-solid fa-pen-ruler"></i> Cursor  
<i class="fa-solid fa-robot"></i> Claude  
<i class="fa-solid fa-wand-magic-sparkles"></i> Antigravity

</div>

---

### 最近の AI のサイト制作能力がすごすぎませんか？

1. ポン出しでもそれっぽいサイト作ってくれる
2. だがしかし調整が結局大変で実用性微妙
3. 設計書ややデザインシステムなどをちゃんと定義すると実用に耐えるようになってきた

---

* 自然言語で指示してそのまま公開できちゃうようなサービス
  ※ まだいろいろ怖くて実用性が微妙な印象だけど、僕が知らないだけで恐らく諸問題は概ね解決されてる
* 画像とかも自然言語で指示してそのまま生成・配置・公開してくれたりする

---

普段のテーマやパターン開発者の普段の思考としては...

<div class="list-icon">

<i class="fa-solid fa-puzzle-piece"></i> どうやって自動的にパターンに割り振ろう？  
<i class="fa-solid fa-table-cells-large"></i> どうやったら適切なブロックで作ってくれるだろう？

</div>

WordPressのブロックやパターンに当てはめる工程  

<i class="fa-sharp fa-solid fa-arrow-right"></i> ここを開発しないといけない

---

### 一方で...

先に AI がレイアウトしたHTMLを作ってもらう  
<i class="fa-sharp fa-solid fa-arrow-right"></i> WordPressのブロックに変換するようなAIツール

<div class="alert alert-warning mt-32" style="width:78%">
そんな回りくどいことしなくても HTML で出来てるなら WordPress 使わなくてもそのまま公開しちゃえば...
</div>


---

# AI の浸透によって...

---

小規模なウェブサイト制作においてはある程度WordPressの需要が奪われる

ベクトルの主力は小規模サイト制作向けのテーマ・プラグイン・ブロックパターン・ウェブサイトデータなので競合する

---

<p class="text-center" style="margin-top:2em;font-size:70px;font-weight:900">
つまり...
</p>

---

<p class="text-center" style="font-size:88px;font-weight:900;line-height:1.2;margin-bottom:0.5em;">
マネタイズ機会の減少<br>
</p>

<p class="text-center" style="font-size:100px;font-weight:900;line-height:1.2;">
 (´；ω；｀)
</p>

---

更に

* コロナによる副業ブームの終了（WordPressでのウェブ制作を勉強する人数の減少）
* WordPressでブログ作っても...
  - AIによる検索の影響力低下
  - noteやzennの台頭  
    -> ブログ需要の低下
* デモサイトをそのままインポートできる VK FullSite Installer  
  → AIの勢いが強すぎるのも相まって想定よりも広がってない...

---

スタッフ複数名抱える企業として、小規模ウェブサイト制作だけ全振りしたビジネスを続けてるのは危ない

<i class="fa-sharp fa-solid fa-arrow-right"></i> 定期収入を見込める製品を持っておきたい（切実）

---

そんな頃...

ヘアサロンのデモサイトデータを制作  
※ 予約システム無し
https://demo.vk-fullsite-installer.com/hairsalon/

予約システムはみなさん大手のとか使ってるからそっち使ってもらう前提でいいたろうと思ってたのですが...

__なかなか高額__ 
最も安いサービスでも実質月額 5,000円〜

---

* これなら予約システムのプラグインで年間2万円くらいでも売れるんじゃない...？
* AI前提で複雑な実装を実際にやってみる

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 作ってみた

---

# <center>ウェブ予約システムプラグイン！

<center>主にサロン向け

---

<p class="text-center" style="font-size:72px;font-weight:900;line-height:1.2;margin-bottom:0.5em;">・・・。</p>

---

<p class="text-center" style="font-size:72px;font-weight:900;line-height:1.2;margin-bottom:0.5em;">
まだちゃんと出来てません...orz
</p>

<p class="text-center">途中経過報告という事で...。</p>

---

VK Booking Manager Pro を導入したデモ
https://demo.dev3.biz/booking-manager/

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# プロダクト仕様作成

---

* かなり多機能になるため当然複雑になる
* プロンプト一発で到底できるわけもない

実装がブレたりしないように仕様書を作成します。

実装を進める過程でいつの間にかAIが仕様から外れたものを作らないように、  
定期的に参照させるのでプロジェクトのリポジトリ内の `docs/` ディレクトリに仕様のファイルを作成しました。

---

### どういうモノを作りたいか？

1. 作りたいものの概要とコンセプトを伝える
2. 必要な機能を提案してもらう
3. 各機能について自分の意見や他のサービスでの状況を踏まえてつめていく
4. それを実現するために指定しないといけない事があるれば出してもらう
5. 考えて回答するかおすすめ案を貰う

3〜5を無限に繰り返して....

---

<p class="text-center" style="margin-top:2em;font-size:60px">
脳が疲れてきて...
</p>

---

1. おまかせで...
2. おまかせで...
3. はい...
4. それで...

---

<p class="text-center" style="margin-top:2em;font-size:60px">
ってなりませんかね...（・ｗ・；
</p>

---

いくら脳内でシミュレーションしたところで、
触ってみたら結局「あ...」ってなるのは普通だと思うので、
動く最小限の基本仕様のみ。

---

#### 着手前
おまかせで仕様考えてもらったら、
優秀なAIさんがちゃちゃちゃっとやってくれるだろう

---

#### 現実
想定する状況や好みに左右される部分が大きく
人間が決めないといけない部分が超膨大

---

### ドキュメントに落とし込んでいく

* 決まった事は `docs/` ディレクトリの中に機能毎などでファイルを分けて記載してもらう
* AIが最初に読むリポジトリ直下の `AGENTS.md` に `docs/` の仕様に従うように記載

https://github.com/vektor-inc/slide/blob/202602_gifu/sample-project/AGENTS.md

---

### 結局技術仕様もこのあたりで詰められていく

どんな機能が必要か？の仕様を考えていると、
結局技術的にどう実装するかという事も含まれていく。

カスタム投稿タイプ / カスタムフィールド / オプション値 / カスタムテーブル など情報をどう扱うか？

バイブコーディングと言ってもそういった仕様をつめていく過程でやはり一定のプログラムのスキルは必要になってくる。

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# プログラムの実装ルールの指定

---

### 実装初期の段階（2025年11月頃）

`docs/coding-rules.md` にさっくり以下のように記載  

https://github.com/vektor-inc/slide/blob/202602_gifu/sample-project/docs/ai-skills/skills/coding-rules.md

---

### 最近

WordPressでの実装用の Agent Skills というのが公開された  
https://github.com/WordPress/agent-skills/

エージェント スキルは、AI アシスタント (Claude、Copilot、Codex、Cursor など) が WordPress 開発パターンを理解し、よくある間違いを回避し、ベスト プラクティスに従うのに役立つ手順、チェックリスト、スクリプトのポータブルなバンドルです。

---

##### そもそも skills とは

`docs/coding-rules.md` に書いてあっても毎回ちゃんと参照してくれるわけでもないし、イマイチ効きが弱い。
skills を設定しておくと、skills の情報を前提に実装してくれるし、skills 全体の情報量が多くても、その実装に必要な情報だけを参照して処理してくれる...らしい。

---

##### 設定方法

導入したいリポジトリ内で「https://github.com/WordPress/agent-skills/ をこのリポジトリで設定したいです。」  
みたいに AI にお願いしたらよしなにしてくれる。

---

#### MCPサーバーは？

https://mcp.digitalcu.be/ja  
WordPressの公式ドキュメントから正しい情報をAIに提供してくれる

個人的には今まで、無しでやってきました。
公式の Agent Skills が公開されたのでほとんどのケースはそれで事たりるかなと思いますが、AIが困った時に参照できるように一応設定しました。

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# 実装

---

### 部分的に作る

いきなり全部実装スタートさせるなんて恐ろしい事しない  
細かい画面や機能単位で実装してもらう

AIでの規模の大きい実装ははじめてなので、  
細かく実装計画練ってもどうせ想定外だらけになる
→ 雑にスタート

---

例）
1. スタッフの投稿タイプ作成
2. サービスメニューの投稿タイプ作成
3. シフトの投稿タイプ作成
4. 基本設定画面作成

---

<center>ってやってると...

---

<div style="font-size:48px;font-weight:bold;text-align:center;" >＿人人人人人人人人人人人人人＿<br />
＞　無限に出てくる仕様の穴！　＜<br />
￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y￣

---

## デザイン関連の一貫性に問題が出る

#### 最初のデザイン関連コーディング指定

* 汎用製品でユーザーがCSSを上書きする事を想定
  → 基本的にBEMで指示
* プリフィックス

---

進めてもらうと...

* 同じようなデザインでも個別にコンポーネントを作り出す
* 各要素の色やサイズなど各種パラメータを直接数値で指定される

---

### 反省して再指定

* よく使う色やサイズ指定のCSS変数を用意
→ 基本的にそれを使うように
* 共通のUIコンポーネント用の簡単なスタイルガイドをHTMLで作成
→ 人力調整
* スタイルガイドに沿って構築して、むやみに独自のクラス名を作らないように指示

---

まぁあたりまえですが...

---

<p class="text-center" style="margin-top:2em;font-size:64px;font-weight:900">
普通は先にスタイルガイド作るよね！
</p>

---

https://github.com/vektor-inc/slide/blob/202602_gifu/sample-project/docs/ui/style-guide.html

https://github.com/vektor-inc/slide/blob/202602_gifu/sample-project/docs/ai-skills/skills/design-rules.md

---

## 細かい実装・調整を繰り返す

#### 触りながら操作すると次から次へと必要な機能・処理

* 指名料
* 指名料が発生しないケース
* イレギュラーな営業・出勤シフト
* メニューの並び替え機能

...etc

---

## Skill のブラッシュアップ

同じような実装指示をする都度、実装ルールとして追加していく

---

<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# テストの追加

いつの間にか動かなくなったりしないように！

---

## PHPUnit テスト

##### テスト形式の指定

おまかせで書いてもらうと、どんなテストをしてるのかさっぱりわからないテストコードが量産されるので、  
テストの書き方のルールを指定

https://github.com/vektor-inc/slide/blob/202602_gifu/sample-project/docs/ai-skills/skills/phpunit.md

---

## E2Eテスト

ブラウザで実際に操作するテスト

手動で書くと超絶面倒なので、これを自動で書いてくれるのが本当にありがたい！

何をしているのかしているのか人間が見て把握しやすいように、操作内容を日本語でコメントを入れておいて貰う

---

## 実装内容のレビュー

* skills で指定したルールになってるか改めて確認してください。
* 懸念点・改善点などないか確認してください  
  （AIエージェントを切り替える）

https://www.coderabbit.ai/ja

GitHub で Coderabbit っての使ってます。

---

### 現状のAI関連構成

* `AGENTS.md` : AIエージェントが最初に読み込む
* `docs/`
  * `spec-***.md` : 製品仕様をいろいろ記載していく
  * `ai-skills/`
    * `skills/` ... 実装時に守って欲しいルール  
      ※ 実際には `.claude` や `.cursor` など各エージェント用のディレクトリに自動複製する。
  * `ui/` ... スタイルガイドのHTML

---

* `tests`
  * `e2e` ... ブラウザで実際に操作するテスト
  * `phpunit` ... クラスのメソッドや関数などが期待値を返すかテスト

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# やった方がいい事

---

* 仕様書をプロジェクト内に設置してAGENTS.mdに読ませる
* コーディング規約などあらかじめ指定する 
* デザインに関するスタイルガイドもあらかじめ作成する
* ちゃんとテストを書く
* AI同士でコードレビュー

<i class="fa-sharp fa-solid fa-arrow-right"></i> ブラッシュアップしていく -> 他のプロジェクトでも再利用

---
<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)

# ビジネスのお話

---

## 懸念点

なんだかんだメッチャ時間かかるけど...

ユーザーは一旦入手したら、そこから先、ライセンス費用払わなくても

不具合発生 ... 自分でAIに直してもらう  
機能追加は改造 ... 自分でAIに直してもらう

<i class="fa-sharp fa-solid fa-arrow-right"></i> お金払ってもらえなくて開発費用を回収できない（；ｗ；

---

## ドキュメントの重要性

開発ドキュメントやテストコードがないと、AIがカスタマイズなどした時に、今までの機能・品質の保証されない

<i class="fa-sharp fa-solid fa-arrow-right"></i> この部分を非公開・配布しなければ実用性が微妙になる  
<i class="fa-sharp fa-solid fa-arrow-right"></i> ライセンス買った方が早い

という状況になるから正規品が成り立つのでは？

---

<p class="text-center" style="margin-top:2em;font-size:72px;font-weight:900">
だがしかし...
</p>

---

<p class="text-center" style="margin-top:2em;font-size:64px;font-weight:900">
ソースコード（ドキュメント）<br>オープンじゃないってどうなんよ？
</p>

<center>とか...ねぇ．．．オープンソース的じゃねえだろ的なごにょごにょごにょ...</center>

---

<p class="text-center" style="margin-top:2em;font-size:70px;font-weight:900">
どう思います？
</p>


<!-- _paginate: false  -->

<center>つづきは懇親会などで...

<p class="mt-48">ありがとうございました</p>


<!-- _class: title-chapter  -->
<!-- _paginate: false  -->
![bg](themes/vk-slide/images/vws_title_01_lightgray.svg)
