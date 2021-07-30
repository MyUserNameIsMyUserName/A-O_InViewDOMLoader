

function isDev() {
	var isDevCheck = false;
	if (typeof process.env.NODE_ENV !== "undefined") {
		console.log("FOUND process.env.NODE_ENV === " + process.env.NODE_ENV);
		if (process.env.NODE_ENV === "production") {
			console.log("[ NODE_ENV = production ] - PRODUCTION MODE SET");
			isDevCheck = false;
		} else if (process.env.NODE_ENV === "development") {
			console.log("[ NODE_ENV = development ] - DEVELOPMENT MODE SET");
			isDevCheck = true;
		} else if (process.env.NODE_ENV === "none") {
			console.log("[ NODE_ENV = none ] - PRODUCTION MODE SET ");
			isDevCheck = false;
		} else {
			console.log("[ NODE_ENV = WTF? HOW? ] - PRODUCTION MODE SET");
			isDevCheck = false;
		}
	} else {
		console.log("process.env.NODE_ENV === UNDEFINED || WILL SET TO PRODUCTION");
		console.log("[ NODE_ENV = UNDEFINED ] - PRODUCTION MODE SET");
		isDevCheck = false;
	}
	return isDevCheck;
}

module.exports = isDev;
