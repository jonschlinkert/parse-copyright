/*!
 * parse-copyright <https://github.com/regexps/parse-copyright>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var parse = require('./');

console.log(parse('//   assert.equal(match("Copyright (c) 2013, Jon Schlinkert.")[0], "2013-2015");'))

it('should parse a copyright statement:', function () {
  var parsed = parse('abc\nCopyright (c) 2013, Jon Schlinkert.\nxyz');
  assert.deepEqual(parsed.statement, 'Copyright (c) 2013, Jon Schlinkert');
  assert.deepEqual(parsed.prefix, 'Copyright');
  assert.deepEqual(parsed.symbol, '(c)');
  assert.deepEqual(parsed.dateRange, ['2013']);
  assert.deepEqual(parsed.latest, '2013');
  assert.deepEqual(parsed.author, 'Jon Schlinkert');
});

it('should parse a copyright statement:', function () {
  var parsed = parse('abc\nCopyright (c) 2013-2015, Jon Schlinkert.\nxyz');
  assert.deepEqual(parsed.statement, 'Copyright (c) 2013-2015, Jon Schlinkert');
  assert.deepEqual(parsed.prefix, 'Copyright');
  assert.deepEqual(parsed.symbol, '(c)');
  assert.deepEqual(parsed.dateRange, ['2013', '2015']);
  assert.deepEqual(parsed.latest, '2015');
  assert.deepEqual(parsed.author, 'Jon Schlinkert');
});

it('should return `null` when no valid copyright statement is found:', function () {
  assert.equal(parse('//   assert.equal(match("Copyright (c) 2013, Jon Schlinkert.")[0], "2013-2015");'), null);
  assert.equal(parse('foo'), null);
});
