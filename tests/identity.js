const fs = require('fs');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('identity', () => {
  const identity = require('../src/identity');

  it('utils index exports a function', () => {
    expect(identity).to.be.a('function');
  });

  it('it returns the same arguments as it is', () => {
    expect(identity(1)).to.equal(1);
    expect(identity(false)).to.equal(false);
    expect(identity(undefined)).to.equal(undefined);
    expect(identity(null)).to.equal(null);
    expect(identity({})).to.deep.equal({});
  });
});
