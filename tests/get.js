const { describe, it } = require('mocha');
const chai = require('chai');
const expect = chai.expect;

chai.should();

describe('get', () => {
  const get = require('../src/get');

  it('module exports a function', () => {
    expect(get).to.be.a('function');
  });

  it('returns the same argument on non-object as first argument', () => {
    get(1, '').should.equal(1);
    get(false, '').should.equal(false);
    get('str', '').should.equal('str');
    expect(get(null, '')).to.equal(null);
  });

  it('throws TypeError on non-array nor string as second argument', () => {
    const badCall = () => get({}, null);
    expect(badCall).to.throw(TypeError, 'Invalid Type');
  });

  it('returns undefined on path break', () => {
    const value = get({a: 'a'}, 'b.c.d');
    expect(value).to.equal(undefined);
  });

  it('returns defaultValue when provided on path break', () => {
    const value = get({a: 'a'}, 'b', 1);
    expect(value).to.equal(1);
  });

  it('returns the value correctly when path matches', () => {
    const value = get({a: ['b', {c: 'c'}]}, 'a.1.c');
    expect(value).to.equal('c');
  });

  it('doesnt mutate object', () => {
    let obj = {a: {b: 'b'}};

    get(obj, 'a.b');

    expect(obj.a.b).to.equal('b');
  });
});
