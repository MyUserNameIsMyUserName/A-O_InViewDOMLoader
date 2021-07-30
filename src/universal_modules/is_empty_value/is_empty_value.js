is_empty_value = (value = "") => {
  return value === "" ? true : false;
};

v0 = (value) => {
	return is_empty_value(value);
}

module.exports = {
  is_empty_value: is_empty_value,
	v0: v0,
};
