XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var ctype_xdigit = require('/Users/kvz/code/phpjs/src/php/ctype/ctype_xdigit.js')

describe('php.ctype.ctype_xdigit.js', function () {
  it('should pass example 1', function (done) {
    ctype_xdigit('01dF');
    var expected = true
    var result = ctype_xdigit('01dF');
    expect(result).to.deep.equal(expected)
    done()
  })
})