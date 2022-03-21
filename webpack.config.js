// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

// export 
module.exports = {
	resolve: {
		extensions: ['.js', '.vue'],
		// 확장자 생략 가능 설정
		alias: {
			'~': path.resolve(__dirname, 'src'),
			'assets': path.resolve(__dirname, 'src/assets'),
		}
		// file-loader의 경로 별칭 
	},
	// parcel index.html
	// 파일을 읽어들이기 시작하는 진입점 설정 
	entry: './src/main.js',

	// 결과물(번들)을 변환하는 설정
	output: {
		// path: path.resolve(__dirname, 'dist'), // resolve 는 첫번째 인수의 경로와 두번째 인수의 경로를 합쳐주는 메소드
		// // __dirname 는 현재 파일이 있는 경로 지칭
		// filename: 'main.js',
		// path 와 filename 생략해도 기본값 dist 로 생성 됨
		clean: true // 새로 build 할 시 기존내역 지우고 새로 생성
	},

	module: {
		rules:[
			{
				test: /\.vue$/,
				use: [
					'vue-loader'
				]
			},
			{
				test: /\.s?css$/,
				use: [
					'vue-style-loader',
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.(png|jpe?g|svg|gif|webp|bmp)$/,
				use: 'file-loader'
			}
		]
	},

	// 변들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
	plugins: [
		new HtmlPlugin({
			template: './index.html'
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'static'}
			]
		}),
		new VueLoaderPlugin()
	],
	devServer: {
		host: 'localhost'
	}
}