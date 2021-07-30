let path = require("path");
const { is_empty_value, v0 } = require( path.relative( __dirname,"src/universal_modules/is_empty_value/is_empty_value") )

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
	init() {
		console.log(">> In [ v_dom_printer.init() ]");
		//console.log(this);
		//console.log("<< Out [ v_dom_printer.init() ]");
		return JSON.stringify(v_dom_printer);
	},
	print(params = "") {
		if (is_empty_value(params)) {
			console.log("PARAMS HAVE CONTENT");
		} else {
			console.log("PARAMS MISSING CONTENT");
		}
		console.log(params);
		return JSON.stringify(v_dom_printer);
	},
	findTemplate(name = ""){
		if (is_empty_value(name)) {
			console.log("FOUND NAME");
		} else {
			console.log("MISSING NAME");
		}
		console.log(name);
		return JSON.stringify(v_dom_printer);
	},
};

module.exports = v_dom_printer;
