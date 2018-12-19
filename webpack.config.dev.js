const merge = require("webpack-merge");
const { HotModuleReplacementPlugin } = require("webpack");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "cheap-module-eval-source-map",
	output: {
		publicPath: "/"
	},
	plugins: [
		new HotModuleReplacementPlugin()
	],
	module: {
		rules: [

		]
	},
});