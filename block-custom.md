# WordPressの受託制作で役立つブロック開発

## 〜 カスタムフィールド製造業界からブロック製造業界へ 〜

今までテンプレートをPHPでカスタマイズして対応していたカスタムフィールドの表示などのカスタマイズを、ブロックエディタで効率よく＆使いやすく実装する方法を紹介します。

こんな方向け：受託でサイト制作をしていて、WordPressとHTML+CSSの基礎を理解している。また、PHP基礎が理解できているとより分かりやすいです。

---

## プラグインでブロックパターンを登録する

* プラグイン VK Block Patterns などを使うと簡単に登録できる
* パターンからベースになるのを探して改変すれば楽
 https://patterns.vektor-inc.co.jp/ 

---

## ブロックのロック機能を使う

WordPress 6.0 から、ブロックの移動・削除 をロックする事ができるようになった
※全部ロックするのが少し面倒
※6.0ではユーザーがロック解除できてしまう

---

## ピンポイントでカスタムフィールドを読み込む

1. カスタムフィールドの内容を表示するショートコードを作成

```
function my_display_cf_yachin( $post ) {
	$yachin = get_post_meta( get_the_ID(), 'yachin', true );
	return esc_html( $yachin );
}
add_shortcode( 'cf_yachin', 'my_display_cf_yachin' );
```
2. ショートコードブロックやカスタムHTMLブロックで配置する

### カスタムフィールドに値をもたせるメリット

* 詳細ページだけでなくアーカイブページなどでも同じ値を呼び出して表示できる

Lightningの投稿一覧にカスタムフィールドを表示するカスタマイズ
https://training.vektor-inc.co.jp/courses/lightning-customize/lessons/add-custom-fields-to-vk-post/

---

## プラグインを使ってカスタムフィールドを含んだ動的ブロックを作る

### Genesis Custom Blocks

* PHPでブロックが作れるプラグイン
* 以前は Block Lab という名前で開発されていたプラグインの後継

公式ドキュメント
https://developer.wpengine.com/genesis-custom-blocks/get-started/add-a-custom-block-to-your-website-content/

### 1. インストール・有効化
### 2. 管理画面のメニューの Content Blocks からカスタムブロックを新規登録
### 3. 公開テンプレートファイルを作成

実際にページに表示するテンプレートをPHPで作成します。



`{テーマ（子テーマ）のディレクトリ名}/blocks/block-{ブロックslug}.php`

または

`{テーマ（子テーマ）のディレクトリ名}/blocks/{ブロックslug}/block.php`


に、表示用のテンプレートを作成する。

### 4. 公開テンプレートの作成

* Content Blocks で作った値を呼び出すには Genesis Custom Blocks の独自関数 `block_field()` で出力できます。
* ブロックの追加CSSは `block_field( 'className' )` で出力できます。


#### {テーマ（子テーマ）のディレクトリ名}/blocks/block-example.php の例
```
<div class="my-product <?php block_field( 'className' ); ?>">
<h2><?php block_field( 'title' ); ?></h2>
<p><?php block_field( 'description' ); ?></p>
<a href="<?php block_field( 'button-link' ); ?>" class="btn btn-primary"><?php block_field( 'button-text' ); ?></a>
</div>
```

<!--
Lightning G3 Pro Pack は無料テーマ Lightning に様々な機能を追加する拡張プラグイ Lightning G3 Pro Unit 以外にも、ブロックを追加するプラグイン VK Blocks Pro 、加えてフォーラムでの質問や、学習サイト ベクトレ の学習管理 など、株式会社ベクトルが提供する主要サービスの統合ライセンスです。
-->

### 5. プレビューテンプレートを作る（オプション）

`{テーマ（子テーマ）のディレクトリ名}/blocks/preview-{ブロックslug}.php`

または

`{テーマ（子テーマ）のディレクトリ名}/blocks/{ブロックslug}/preview.php`

### 6. CSSの追加

`{テーマ（子テーマ）のディレクトリ名}/blocks/{ブロックslug}/block.css`

でブロック専用のCSSを出力できます。


### 7. ファイル階層

階層構造 A

* {テーマ（子テーマ）のディレクトリ名}/blocks/block-{ブロックslug}.php
* {テーマ（子テーマ）のディレクトリ名}/blocks/preview-{ブロックslug}.php

階層構造 B

* {テーマ（子テーマ）のディレクトリ名}/blocks/{ブロックslug}/block.php
* {テーマ（子テーマ）のディレクトリ名}/blocks/{ブロックslug}/preview.php
* {テーマ（子テーマ）のディレクトリ名}/blocks/{ブロックslug}/block.css

<!--
階層構造 B

* theme
  * blocks
    * block_one
      * block.php
      * preview.php
      * block.css
    * block_two
      * block.php
      * preview.php
      * block.css
-->

### 8. 条件分岐

Genesis Custom Blocks で設定した入力項目で、入力がない場合に外側のタグを表示しない場合、Genesis Custom Blocks の独自関数 block_value() で値を取得して条件分岐します。

```
<?php if ( block_value( 'description' ) ) : ?>
<p><?php block_field( 'description' ); ?></p>
<?php endif; ?>
```

### 9.カスタムフィールドの表示

#### カスタムフィールドが必要なケースについて

* ブロックエディタがない時代は意図したレイアウトを実現するために多用されていた
→ レイアウトに関する事はここまで紹介したようにブロックで実現可能になった
→ アーカイブページなど、他のページでも指定の場所に出力したい場合に利用

#### カスタムフィールドの実装例

1. プラグイン Advanced Custom Fields などでカスタムフィールドを作る
2. ブロックの表示用テンプレート内で呼び出す

Genesis Custom Blocks はブロックがPHPなので、テーマファイルをカスタマイズしていた時と同じ要領でカスタムフィールドを呼び出せばよい。

```
<?php if ( $post->price ) : ?>
<p>販売価格 : <?php echo esc_html( $post->price ); ?>円（税込）</p>
<?php endif; ?>
```

---

## ブロックパターンで作るのと、Genesis Custom Blocks で作る違い

### 特性の違い
WordPress 標準の機能ではパターンはHTMLとして本文欄に保存されるが、
Genesis Custom Blocks は動的に該当ブロックを生成する

#### ■ 通常のブロックパターン（静的ブロック）

##### メリット
* 公開画面に近い画面で編集が容易
* 表示するHTMLの状態で既に保存されているので表示速度が早い
* パターンの作成が容易

##### デメリット
* 後からレイアウト変更と言われましても...
* ブロックを全部ロックするのは面倒...

#### ■ Genesis Custom Blocks（動的ブロック）

##### メリット
* 動的ブロックなので後からレイアウトの変更や入力項目を増やしたりといった仕様変更に対応しやすい

##### デメリット
* プラグインを停止すると公開画面でも表示されなくなる
* 表示レスポンスが悪い
* レイアウトの改変には基礎的なPHPの知識やサーバーへのファイルアップロード作業は必要
* カスタムフィールドの値は保存して再読み込みしないとプレビューに反映されない。

---

## 最初から特定のブロックを配置する

## 指定のブロックを予め配置する

公式ドキュメント
https://developer.wordpress.org/block-editor/reference-guides/block-api/block-templates/

https://training.vektor-inc.co.jp/courses/wordpress-customize/lessons/add-default-block-template/

```
function my_add_default_template() {
	// 対象の投稿タイプを指定.
	$post_type_object = get_post_type_object( 'post' );
	// 挿入するブロックの情報.
	$post_type_object->template      = array(
		array(
			'core/columns',
			array(),
			array(
				array(
					'core/column',
					array(),
					array(
						array( 'core/image', array() ),
					),
				),
				array(
					'core/column',
					array(),
					array(
						array(
							'core/heading',
							array(
								'className' => 'is-style-vk-heading-plain vk_block-margin-0--margin-top',
								'content'   => 'Lightning',
							),
						),
						array(
							'core/paragraph',
							array(
								'content' => 'Lightning G3 Pro Pack は無料テーマ Lightning に様々な機能を追加する拡張プラグイ Lightning G3 Pro Unit 以外にも、ブロックを追加するプラグイン VK Blocks Pro 、加えてフォーラムでの質問や、学習サイト ベクトレ の学習管理 など、株式会社ベクトルが提供する主要サービスの統合ライセンスです。',
								'lock'    => array(
									'move'   => true,
									'remove' => true,
								),
							),
						),
						array(
							'core/paragraph',
							array(
								'align'   => 'right',
								'content' => '9,900円（税込）',
							),
						),
					),
				),
			),
		),
	);
	$post_type_object->template_lock = 'all';
}
add_action( 'init', 'my_add_default_template' );
```

メンテナンス性が良いとは言えない...

---

## Genesis Custom Blocks で作った動的ブロックを指定の投稿タイプに固定で配置する

* 新規作成 → 必要なブロックは配置済で変更できにようにしたい
* 後からの仕様変更に柔軟に内藤したい
* カスタムフィールドにも対応したい

→ Genesis Custom Blocks を使ってPHPベースでブロックを作成して、
そのブロックを最初から配置されるようにしてロックする。

```
function my_add_default_template() {
	// 対象の投稿タイプを指定.
	$post_type_object = get_post_type_object( 'post' );
	// 挿入するブロックの情報.
	$post_type_object->template      = array(
		array(
			'genesis-custom-blocks/example-block',
			array(
				'title'       => 'Lightning',
				'description' => 'Lightning G3 Pro Pack は無料テーマ Lightning に様々な機能を追加する拡張プラグイ Lightning G3 Pro Unit 以外にも、ブロックを追加するプラグイン VK Blocks Pro 、加えてフォーラムでの質問や、学習サイト ベクトレ の学習管理 など、株式会社ベクトルが提供する主要サービスの統合ライセンスです。',
				'button-text' => '詳しくはこちら',
				'button-link' => 'https://google.com',
			),
		),
	);
	$post_type_object->template_lock = 'all';
}
add_action( 'init', 'my_add_default_template' );
```

---

# おまけ

---

## PHPの動的ブロックを作る（要PHPの基礎知識）

https://ja.wordpress.org/team/handbook/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/

---

## 子テーマにパターンファイルを登録して使う

WordPress 6.0 からはの新機能テーマ（子テーマ）の patterns フォルダに入れればパターンが認識されるようになりました

https://github.com/WordPress/gutenberg/pull/36751

→ どちらかというと汎用テーマ制作者向け機能な印象。パターンを登録するなら先に紹介したプラグインの方が使い勝手が良い。