const { is_empty_value, v0 } = require(".");

var someTestValEmpty = "";
console.log(is_empty_value(someTestValEmpty));

var someTestValGood = "Not So Empty";
console.log(is_empty_value(someTestValGood));

var someValEmpty = "";
console.log(v0(someValEmpty));

var someValGood = "Not So Empty";
console.log(v0(someValGood));
