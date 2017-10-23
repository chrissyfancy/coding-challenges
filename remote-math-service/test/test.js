var Code = require("../code");
var expect = require('chai').expect

var foo = 1;
before(function(done) {
  setTimeout(function(){
    foo = 2;
    done();
  }, 500)
});

describe("Async setup", function(done){

  it("should have foo equal to 2.", function(done){
    expect(foo).to.be.equal(2);
    done();
  });

  it("should have foo not equal 3.", function(done){
    expect(foo).to.be.not.equal(3);
    done();
  });

});

describe('#remoteMathService()', function() {
  it('should return the sum of callOneService and callTwoService', function(done) {
    setTimeout(function () {
      expect(Code.remoteMathService()).to.equal("correct");
      done();
    }, 1000);
  });
});

describe('#callOneService()', function() {
  it('should return the integer 1', function(done) {
    setTimeout(function () {
      expect(Code.callOneService()).to.equal(1);
      done();
    }, 1000);
  });
});

describe('#callTwoService()', function() {
  it('should return the integer 2', function(done) {
    expect(Code.callTwoService()).to.equal(2);
  });
});
