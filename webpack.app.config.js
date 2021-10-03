let path = require("path");
let is_dev = require("./src/modules/is_dev");
var config;
let webpack_config_options = {
  production: {
    mode: "production",
    entry: {
      app: "./src/application_root.js",
      v_display_driver: "./src/v_display_driver.js",
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
  },
  development: {
    mode: "development",
    entry: {
      main: "./src/app.js",
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
  },
};

if (is_dev()) {
  config = webpack_config_options.development;
} else {
  config = webpack_config_options.production;
}

module.exports = config;
