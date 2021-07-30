
const dotenv = require('dotenv')
const webpack = require('webpack')
let path = require("path");
let is_dev = require("./src/universal_modules/is_dev/is_dev");
var config;
let webpack_config_options = {
  production: {
    mode: "production",
    entry: {
      app: "./src/app.js",
    },
    output: {
      path: path.resolve(__dirname, "dist/app"),
      filename: "[name].v_block.js",
      clean: true,
    },
		target: ['web', 'es6'],
    resolve: {
      fallback: {
        fs: false,
        path: false,
      },
    },
		plugins: [
			new webpack.DefinePlugin({
				 'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
			})
		]
  },
  development: {
    mode: "development",
    entry: {
      app: "./src/app.js",
    },
		target: ['web', 'es6'],
    output: {
      path: path.resolve(__dirname, "dist/app"),
      filename: "[name].v_block.js",
    },
    resolve: {
      fallback: {
        fs: false,
        path: false,
      },
    },
		plugins: [
			new webpack.DefinePlugin({
				 'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
			})
		]
  },
};

if (is_dev()) {
  config = webpack_config_options.development;
} else {
  config = webpack_config_options.production;
}

module.exports = config;
