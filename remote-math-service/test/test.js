var Code = require("../src/code");
var expect = require('chai').expect

describe('code', () => {
  describe('remoteMathService', () => {
    it('should return the integer 3', () => {
      let result = remoteMathService();
      setTimeout(function () {
        expect(result).to.be.equal(3);
        done();
      }, 1000);
    });
  })
});
