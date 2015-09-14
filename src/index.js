'use strict';
var isPlainObject = require('is-plain-object');

module.exports = function all(val) {
	if (Array.isArray(val)) {
		return Promise.all(val);
	} else if (!isPlainObject(val)) {
		return Promise.resolve(val);
	}
	var keys = Object.keys(val);
	var promises = keys.map(function (key) {
		return val[key];
	});
	return Promise.all(promises)
		.then(function (results) {
			return keys.reduce(function (obj, key, i) {
				obj[key] = results[i];
				return obj;
			}, {});
		});
};
