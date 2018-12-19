const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const WorkboxPlugin = require("workbox-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
	mode: "production",
	plugins: [
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			skipWaiting: true
		}),
		new BundleAnalyzerPlugin()
	],
	module: {
		rules: [

		]
	},
});