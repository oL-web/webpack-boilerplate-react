const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.dev.js");

const port = process.env.PORT || 1234;
const options = {
	contentBase: "./dist",
	hot: true,
	host: "localhost"
};

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen(port, "localhost", () => {
	console.log(`Dev server active on localhost:${port}`);
});