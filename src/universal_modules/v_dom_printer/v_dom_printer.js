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
		templates: [
			{
				name: 'script_file_chunk',
				file: '<script src="${url}" ></script>',
			}
		]
  },
	init() {
		console.log(">> In [ v_dom_printer.init() ]");
		//console.log(this);
		//console.log("<< Out [ v_dom_printer.init() ]");
	},
	print(params = "") {
		if (!is_empty_value(params)) {
			console.log("PARAMS HAVE CONTENT");
			const TMPL_FILE = this.findTemplate(params.fileName);
			console.log(TMPL_FILE);
		} else {
			console.log("PARAMS MISSING CONTENT");
		}
		console.log(params);
	},
	findTemplate(file_name = ""){
		if (!is_empty_value(file_name)) {
			console.log("FOUND NAME");
			this.data.templates.forEach(tmplFile => {
				if (file_name == tmplFile.name) {
					console.log("FOUND TEMPLATE FILE");
					return tmplFile.file;
				} else {
					console.log("NO SUCH TEMPLATE FILE")
					return false;
				}
			});
		} else {
			console.log("MISSING NAME");
			return null;
		}
	},
};

module.exports = v_dom_printer;
