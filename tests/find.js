const { describe, it } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

describe('find', () => {
  const find = require('../src/find');

  it('module exports a function', () => {
    chai.expect(find).to.be.a('function');
  });

  it('predicate gets invoked with item and index', () => {
    let predicate = sinon.spy(() => {});

    find([1], predicate);

    predicate.should.have.been.calledWith(1, 0);
    predicate.should.have.been.calledOnce;
  });

  it('should find first element and instantly terminate', () => {
    let callback = sinon.spy(n => n === 4); // find first even number

    let value = find([1, 3, 4, 6, 5], callback);

    callback.should.have.been.calledThrice; // 3rd time should be the last one
    value.should.equal(4);
  });

  it('should work on truthy values', () => {
    let callback = sinon.spy(n => n); // return implicit values

    let value = find([null, false, 4, 6, 5], callback);

    callback.should.have.been.calledThrice; // 3rd time should be the last one
    value.should.equal(4);
  });

  it('should use identity predicate by default', () => {
    let value = find([null, false, 4, 6, 5]);
    value.should.equal(4);
  });

  it('should return default value as fallback', () => {
    let value = find([null, false], n => n, 3);
    value.should.equal(3);
  });
});
