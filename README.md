# parse-copyright [![NPM version](https://badge.fury.io/js/parse-copyright.svg)](http://badge.fury.io/js/parse-copyright)

> Parse copyright statement(s) into an array of copyright objects.

## Install with [npm](npmjs.org)

```bash
npm i parse-copyright --save
```

## Usage

```js
var parse = require('parse-copyright');

parse('abc\nCopyright (c) 2013-2015, Jon Schlinkert.\nxyz');
```

Returns an array of copyright objects:

```js
[{
  statement: 'Copyright (c) 2013-2015, Jon Schlinkert',
  prefix: 'Copyright',
  symbol: '(c)',
  dateRange: ['2013', '2015'],
  latest: '2015',
  author: 'Jon Schlinkert'
}]
```

## Run tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/parse-copyright/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on February 01, 2015._
