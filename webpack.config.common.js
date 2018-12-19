const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		filename: "[name].[hash].js",
		chunkFilename: "[name].[hash].js",
		path: path.join(__dirname, "dist"),
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new MiniCssExtractPlugin({
			filename: "style.[hash].css"
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			favicon: "./src/favicon.png",
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
				]
			},
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[hash].[ext]"
						}
					}
				]
			},
			{
				test: /\.webmanifest$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].webmanifest"
						}
					}
				]
			},
		]
	}
};