# Skills 運用仕様

このドキュメントは、本リポジトリにおける AI Skills の運用仕様をまとめたものです。
公式スキルをベースに、自社ルールを上書き・追記して各ツールに配布します。

## 目的
- 公式スキルを共通の土台として利用する
- プロジェクト固有のルールを上書き・追記できるようにする
- ツール間の同期漏れを防ぐ

## 参照元（自社ルール）
以下のドキュメントが自社ルールの一次ソースです。

- `docs/common/common.md`
- `docs/ai-skills/skills/coding-rules.md`
- `docs/ai-skills/skills/design-rules.md`
- `docs/ai-skills/skills/phpunit.md`

## 配布先
以下のディレクトリにスキルを配布します。

- `.codex/skills/`（OpenAI Codex）
- `.cursor/skills/`（Cursor）
- `.github/skills/`（VS Code / Copilot）
- `.claude/skills/`（Claude）
- `.agent/skills/`（Antigravity）

## スキル構成
### 公式スキル
WordPress/agent-skills から指定スキルを取得し、配布します。

対象:
- `wp-plugin-development`
- `wp-block-development`
- `wp-rest-api`
- `wp-performance`
- `wp-project-triage`

### 自社ルール（上書きスキル）
`vkbm-project-rules` を追加し、公式スキルの上に重ねます。

ソース:
- `docs/ai-skills/vkbm-project-rules/SKILL.md`
- `docs/common/common.md`
- `docs/ai-skills/skills/coding-rules.md`
- `docs/ai-skills/skills/design-rules.md`
- `docs/ai-skills/skills/phpunit.md`

配布先:
- `.codex/skills/vkbm-project-rules`
- `.cursor/skills/vkbm-project-rules`
- `.github/skills/vkbm-project-rules`
- `.claude/skills/vkbm-project-rules`
- `.agent/skills/vkbm-project-rules`

## コマンド
### 公式スキル更新 + 自社ルール配布
```
npm run skills:update
```

処理内容:
1. `WordPress/agent-skills` を一時ディレクトリにクローン
2. スキルパックをビルド
3. 指定スキルを配布先へインストール
4. wp-performance の実行コマンドを配布後に補正
5. Antigravity 用に公式スキルを `.agent/skills/` へ反映
6. 自社ルールを上書き・追記して配布
7. 一時ディレクトリを削除

### 自社ルールのみ配布
```
npm run skills:sync
```

処理内容:
1. `docs/` 配下の自社ルールを読み込み
2. `vkbm-project-rules` として各配布先に同期

## 実装ファイル
- `bin/update-official-skills.js`
- `bin/sync-ai-skills.js`
- `docs/ai-skills/vkbm-project-rules/SKILL.md`

## 更新時の注意
- `docs/` 配下のルール変更後は `npm run skills:sync` を実行する
- 公式スキルの更新が必要な場合は `npm run skills:update` を実行する
- `.tmp/` は一時ディレクトリのため Git 管理対象外
