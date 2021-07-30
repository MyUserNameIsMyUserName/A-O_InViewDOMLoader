let path = require("path");
let isDev = require("./src/app/universal_modules/is_dev").default

let config = {
  production: {
    mode: "production",
    entry: {
			main: "./src/server/main.js"
		},
		output: {
		path: path.resolve(__dirname, "dist/api"),
		filename: "[name].pack.js",
		clean: true,
    },
  },
  development: {
    mode: "development",
    entry: {
			main: "./src/server/main.js"
		},
    output: {
      path: path.resolve(__dirname, "dist/api"),
      filename: "[name].pack.js",
    },
  },
};

if (isDev){
	module.exports = config.development;
} else {
	module.exports = config.production;
}