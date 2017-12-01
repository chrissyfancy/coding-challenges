var code = require("../src/code");
var chai = require('chai')
var spies = require('chai-spies');
var expect = chai.expect;
var should = chai.should()

var remoteMathService = code.remoteMathService
var callOneService = code.callOneService
var callTwoService = code.callTwoService

Object.assign(global, {
  code,
  chai,
  spies,
  expect,
  should,
  remoteMathService,
  callOneService,
  callTwoService
});

beforeEach(() => {
  let _ = require('underscore')
  chai.use(spies);
});

console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
