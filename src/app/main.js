const isDev = require("../universal_modules/is_dev/is_dev");

const V_App = {
  config: {
    isDev: isDev,
    system: {},
  },
  isDev() {
    this.config.isDev = isDev();
    console.log(
      `[ V_App.isDev() -> < this->config->isDev > = ${this.config.isDev} ]`
    );
    return isDev;
  },
  healthCheck() {
    var returnVal = false;
    console.group("\nHealthCheck() Results:");
    if (V_App) {
      console.info("V_App.healthCheck() function has found the main object.");
      console.info(V_App);
      returnVal = true;
    } else {
      console.warn(
        "V_App.healthCheck() function has not found the main object, how are you running this???"
      );
      console.log(this);
      returnVal = false;
    }
    console.groupEnd();
    console.log(" ");
    return returnVal;
  },
  init() {
    this.isDev();
    this.isDev = this.config.isDev;
    this.config.system.iniTime = Date.now();
    console.log("[ V_App.init() ]");
    this.config.system.bootTime = Date.now();
    console.log(
      "System Booted In : " +
        (this.config.system.bootTime - this.config.system.iniTime) +
        "ms ;"
    );

    if (this.config.isDev) {
      console.log("V_App Dev Mode -> Starting V_App.healthCheck()");
      this.healthCheck();
    }
  },
};

//const v_app = V_App;

//v_app.init();

module.exports = {
  V_App: V_App,
};
