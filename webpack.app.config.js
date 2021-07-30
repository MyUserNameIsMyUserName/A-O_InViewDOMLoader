let path = require("path");
let isDev = require("./src/universal_modules/Dev_Mode_Detector/is_dev");

let config = {
  production: {
    mode: "production",
    entry: {
			main: "./src/app/main.js"
		},
		output: {
		path: path.resolve(__dirname, "dist/app"),
		filename: "[name].pack.js",
		clean: true,
    },
		resolve: {
			fallback: {
				fs: false,
				path: false
			},
		},
  },
  development: {
    mode: "development",
    entry: {
			main: "./src/app/main.js"
		},
    output: {
      path: path.resolve(__dirname, "dist/app"),
      filename: "[name].pack.js",
    },
		resolve: {
			fallback: {
				fs: false,
				path: false
			},
		},
  },
};

if (isDev){
	module.exports = config.development;
} else {
	module.exports = config.production;
}