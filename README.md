# promise-all

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> A Promise.all but for Objects as well as Arrays

## Installation

Install `promise-all` using [npm](https://www.npmjs.com/):

```bash
npm install --save promise-all
```

## Usage

### Module usage

```javascript
var all = require('promise-all');

all({key1: Promise.resolve(false)})
  .then(function (val) {
    // val === {key1: false}
  });

all([Promise.resolve(false)])
  .then(function (val) {
    // val === [false]
  });
```

## API

### `all(val)`

| Name | Type | Description |
|------|------|-------------|
| `val` | `Array|Object`| An Object or Array of promises to resolve |

Returns: `Promise`, which resolves when all promises in the passed Object or Array are resolved.

## Related

* [`promise-or`](https://github.com/joakimbeng/promise-or)
* [`promise-and`](https://github.com/joakimbeng/promise-and)
* [`promise-not`](https://github.com/joakimbeng/promise-not)
* [`promise-if`](https://github.com/joakimbeng/promise-if)

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/promise-all
[npm-image]: https://badge.fury.io/js/promise-all.svg
[travis-url]: https://travis-ci.org/joakimbeng/promise-all
[travis-image]: https://travis-ci.org/joakimbeng/promise-all.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
