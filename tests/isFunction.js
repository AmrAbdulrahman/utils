const { describe, it } = require('mocha');
const chai = require('chai');

chai.should();

describe('isFunction', () => {
  const isFunction = require('../src/isFunction');

  it('module exports a function', () => {
    chai.expect(isFunction).to.be.a('function');
  });

  it('returns true on functions', () => {
    isFunction(() => {}).should.equal(true);
  });

  it('returns false otherwise', () => {
    isFunction(1).should.equal(false);
    isFunction(null).should.equal(false);
    isFunction(undefined).should.equal(false);
    isFunction(false).should.equal(false);
    isFunction({}).should.equal(false);
    isFunction([]).should.equal(false);
  });
});
