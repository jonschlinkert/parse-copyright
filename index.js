/*!
 * parse-copyright <https://github.com/jonschlinkert/parse-copyright>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var regex = require('copyright-regex');

module.exports = function (str) {
  return parse(str);
};

function parse(str) {
  var match = regex().exec(str);
  if (!match) { return null; }
  var res = {};

  res.statement = match[0] // 'Copyright (c) 2013-2015, 2016, Jon Schlinkert'
  res.prefix    = match[1] // 'Copyright'
  res.symbol    = match[2] // '(c)'
  res.dateRange = parseRange(match[3]) // '2013-2015, 2016, '
  res.latest    = match[4] // '2016'
  res.author    = match[5] // 'Jon Schlinkert'
  return res;
}

function parseRange(str) {
  return str.split(/\D/).filter(Boolean);
}
