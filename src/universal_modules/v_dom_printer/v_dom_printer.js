let v0 = require("../is_empty_value/is_empty_value");

const v_dom_printer = {
  config: {
    // config is a type of content we don't wanna change on users end
    type: "v_app_module",
    name: "V_DOM_Printer",
  },
  options: {
    // these are the options we can allow user to manage or don't, so "changeable config"
    print_mode: "raf",
    print_limit: "screen",
  },
  data: {
    // Maybe some data storage for later
  },
  do: {
    init() {
      console.log(this);
    },
    print(params = "") {
      if (v0(params)) {
        console.log("PARAMS HAVE CONTENT");
      } else {
        console.log("PARAMS MISSING CONTENT");
      }
      console.log(params);
    },
    findTemplate(name = "") {
      if (v0(name)) {
        console.log("FOUND NAME");
      } else {
        console.log("MISSING NAME");
      }
      console.log(name);
    },
  },
};

module.exports = v_dom_printer;