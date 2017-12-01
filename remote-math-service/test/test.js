require('./SpecHelper')

describe('remoteMathService', () => {
  it('should return the integer 3', (done) => {
    remoteMathService(function(err, answer){
      expect(answer).to.be.equal(3);
      done();
    })
  });

  it('should not return an undefined error', (done) => {
    remoteMathService(function(err, answer){
      expect(err).to.be.equal(undefined);
      done();
    })
  });

  it('should call the remoteMathService function once', (done) => {
    let remoteMathServiceSpy = chai.spy();
    remoteMathService(remoteMathServiceSpy)

    expect(remoteMathServiceSpy).to.have.been.called.once;
    done();
  });

  it('should call the callOneService function with the number 1', (done) => {
    let callOneServiceSpy = chai.spy();
    callOneService(callOneServiceSpy)

    expect(callOneServiceSpy).to.have.been.called.with(1);
    expect(callOneServiceSpy).to.not.have.been.called.with(2);
    done();
  });

  it('should call the callTwoService function with the number 2', (done) => {
    let callTwoServiceSpy = chai.spy();
    callTwoService(callTwoServiceSpy)

    expect(callTwoServiceSpy).to.have.been.called.with(2);
    expect(callTwoServiceSpy).to.not.have.been.called.with(1);
    done();
  });
})
