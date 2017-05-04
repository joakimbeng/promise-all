'use strict';
var isPlainObject = require('is-plain-object');

function all(val) {
	if (Array.isArray(val)) {
		return Promise.all(val);
	} else if (!isPlainObject(val)) {
		return Promise.resolve(val);
	}

	val = Object.keys(val).reduce(function (res, k) {
		var obj = {};
		obj[k] = typeof val[k] === 'object' ? all(val[k]) : val[k];
		return Object.assign(res, obj);
	}, {});

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
}

module.exports = all;
