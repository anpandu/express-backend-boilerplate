const Promise = require('bluebird')
const CONFIG = require('../config')

var ExampleService = function () {}

ExampleService.prototype.method1 = (first_argument) => {
  return 'method1'
}

module.exports = new ExampleService()