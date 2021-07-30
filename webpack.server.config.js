let path = require("path");
let is_dev = require("./src/universal_modules/is_dev/is_dev");

let config = {};

let webpack_config_options = {
  production: {
    mode: "production",
		target: ["node", "es6"],
    entry: {
      main: "./server.js",
      is_empty_value: "./src/universal_modules/is_empty_value/is_empty_value.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].v_enp.js",
      clean: true,
    },
    
  },
  development: {
    mode: "development",
		target: ["node", "es6"],
    entry: {
      main: "./server.js",
      is_empty_value: "./src/universal_modules/is_empty_value/is_empty_value.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].v_enp.js",
    },
  },
};

if (is_dev()) {
  config = webpack_config_options.development;
} else {
  config = webpack_config_options.production;
}

module.exports = config;
