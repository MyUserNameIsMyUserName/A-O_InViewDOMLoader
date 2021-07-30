const path = require("path");
require("dotenv").config();

const config = {
  production: {
    mode: "production",
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].pack.js",
      clean: true,
    },
  },
  development: {
    mode: "development",
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].pack.js",
    },
  },
  none: {
    mode: "none",
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].pack.js",
      clean: true,
    },
  },
};

if (typeof process.env.NODE_ENV !== "undefined") {
  console.log("FOUND process.env.NODE_ENV === " + process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    module.exports = config.production;
  } else if (process.env.NODE_ENV === "development") {
    module.exports = config.development;
  } else if (process.env.NODE_ENV === "none") {
    module.exports = config.none;
  } else {
    module.exports = config.production;
  }
} else {
  // module.exports = require("./cjs/react.development.js");
  console.warn("process.env.NODE_ENV === UNDEFINED || WILL SET TO PRODUCTION");
  module.exports = config.production;
}
