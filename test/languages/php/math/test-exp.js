XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var exp = require('/Users/kvz/code/phpjs/src/php/math/exp.js')

describe('php.math.exp.js', function () {
  it('should pass example 1', function (done) {
    exp(0.3);
    var expected = 1.3498588075760032
    var result = exp(0.3);
    expect(result).to.deep.equal(expected)
    done()
  })
})