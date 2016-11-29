React v15をやってみよう (2) - 次はWebPack - Qiita
====

前回までの記事:

+ [React v15をやってみよう (1) - まずはHTMLだけで - Qiita](http://qiita.com/LightSpeedC/items/484fec44a2ca15e48f49)

竹槍で戦いを挑むのは、ちょっと無謀だったと思う。

次に装備すべき武器はいろいろとある中で、npm trends を見ると webpack がいいと思う。

+ [Grunt → Gulp](http://www.npmtrends.com/gulp-vs-grunt)
+ [Browserify → WebPack](http://www.npmtrends.com/webpack-vs-browserify)
+ [Gulp → WebPack](http://www.npmtrends.com/webpack-vs-gulp)

- - -

## 0. 準備

前回、同様、空のディレクトリを作成し、そこでnpmを初期化する。

```bash
$ mkdir react-lesson2-1
$ cd react-lesson2-1
$ npm init -y
```

できたpackage.jsonの内容は多少編集しよう。

- - -

## 1. webpackをインストする

npmを使ってwebpackをインストする。

```bash
$ npm i -g webpack
$ npm i -D webpack
$ webpack -h
```

- - -

## 2. シンプルなソースでwebpackの動作を確認する

srcフォルダを作って、app.jsを作成する。

```js:./src/app.js
console.log('動いた!');
```

srcの下の./app.jsがエントリーで、distフォルダのbundle.jsに出力させる。

```bash
$ webpack --entry ./src/app.js --output-path dist --output-filename bundle.js
$ node dist/bundle.js
動いた!
```

動いた!?

- - -

## 3. webpack設定ファイルを作成する

テスト用にちっちゃい設定ファイルを作ってみる。

```js:webpack.config.entry-test.js
module.exports = {
	entry: {test: './src/entry-test.js'},
	output: {
		path: 'dist',
		filename: 'bundle.js',
	},
};
```

その動作確認テスト。

```bash
$ webpack --config webpack.config.entry-test.js
$ node dist/bundle.js
```

確認できたら、webpackのテストは終わり。

- - -

## 4. JSXが使用できる様にbabel-loaderをインストする

babel-loaderをインストする。
それに伴い依存関係にあるbabel-coreなどもインストする。

```bash
$ npm i -D babel-loader babel-core babel-preset-react babel-preset-es2015
```

- - -

## 5. weboack設定ファイルにbabel-loaderを設定する

webpack設定ファイルのmodule loadersにbabel-loaderを設定する。  
Transpile時間を減らすためにexternalsにreactやreaco-domを設定する。

```js:webpack.config.jsx-test.js
module.exports = {
	entry: './src/jsx-test',
	output: {
		path: 'dist',
		filename: 'jsx-test.js',
	},
	resolve: {
		extensions: ['', '.jsx', '.js']
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {presets: ['react', 'es2015']},
			},
		],
	},
};
```

```html:jsx-test.html
<!DOCTYPE html>
<meta charset="UTF-8">

<script src="node_modules/react/dist/react.min.js"></script>
<script src="node_modules/react-dom/dist/react-dom.min.js"></script>

<div id="container"></div>

<script src="dist/jsx-test.js"></script>
```

```bash
$ webpack --config webpack.config.jsx-test.js
```
