'use strict';
var test = require('ava');
var all = require('../src');

test('object', function (assert) {
	assert.plan(1);
	return all({key1: Promise.resolve(false)})
		.then(function (actual) {
			var expected = {key1: false};
			assert.same(actual, expected);
		});
});

test('array', function (assert) {
	assert.plan(1);
	return all([Promise.resolve(true)])
		.then(function (actual) {
			var expected = [true];
			assert.same(actual, expected);
		});
});

test('non-promise values in array', function (assert) {
	assert.plan(1);
	return all([false])
		.then(function (actual) {
			var expected = [false];
			assert.same(actual, expected);
		});
});

test('non-promise values in object', function (assert) {
	assert.plan(1);
	return all({key: false})
		.then(function (actual) {
			var expected = {key: false};
			assert.same(actual, expected);
		});
});

test('no array or object', function (assert) {
	assert.plan(1);
	return all(1234)
		.then(function (actual) {
			var expected = 1234;
			assert.is(actual, expected);
		});
});

test('object recursive', function (assert) {
	assert.plan(1);
	return all({
		key1: Promise.resolve('key1'),
		key2: {
			key3: Promise.resolve('key2.key3')
		}
	})
		.then(function (actual) {
			var expected = {
				key1: 'key1',
				key2: {
					key3: 'key2.key3'
				}
			};
			assert.same(actual, expected);
		});
});
