var Code = require("../src/code");
var expect = require('chai').expect

// var foo = 1;
// before(function(done) {
//   setTimeout(function(){
//     foo = 2;
//     done();
//   }, 500)
// });
//
// describe("Async setup", function(done){
//
//   it("should have foo equal to 2.", function(done){
//     expect(foo).to.be.equal(2);
//     done();
//   });
//
//   it("should have foo not equal 3.", function(done){
//     expect(foo).to.be.not.equal(3);
//     done();
//   });
//
// });

describe('code', () => {
  let a;
  let b;
  let c;

  beforeEach(() => {
    a = 1;
    b = 2;
    c = 3
  });

  describe('remoteMathService', () => {
    it('should return the integer 3', () => {
      let result = remoteMathService();
      setTimeout(function () {
        expect(result).to.be.equal(a);
        done();
      }, 1000);
    });
  })

  describe('callOneService', function() {
    it('should return the integer 1', function(done) {
      let result = callOneService();
      setTimeout(function () {
        expect(result).to.be.equal(a);
        done();
      }, 1500);
    });
  });

  describe('callTwoService', function() {
    it('should return the integer 2', function(done) {
      let result = callTwoService();
      setTimeout(function () {
        expect(result).to.be.equal(b);
        done();
      }, 3000);
    });
  });
});
