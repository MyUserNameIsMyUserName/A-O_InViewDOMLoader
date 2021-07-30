function is_empty_value (value = "") {
   value = ( value === "" ? true : false );
	 return value;
};

function v0 (value = "") {
	return is_empty_value(value);
}

module.exports = {
  is_empty_value: is_empty_value,
	v0: v0,
};
