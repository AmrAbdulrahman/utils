const { describe, it } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

const bomb = () => { throw new Error('You just crossed a bomb! have a nice day!'); }

describe('forEach', () => {
  const forEach = require('../src/forEach');

  it('module exports a function', () => {
    chai.expect(forEach).to.be.a('function');
  });

  it('work with empty array', () => {
    forEach([], () => bomb());
  });

  it('callback gets invoked with item and index', () => {
    let callback = sinon.spy(() => {});

    forEach([1], callback);

    callback.should.have.been.calledWith(1, 0);
    callback.should.have.been.calledOnce;
  });

  it('should terminate on callback returning explicit false', () => {
    let callback = sinon.spy(n => !!(n % 2)); // terminate on first even number

    forEach([1, 3, 4, 5], callback);

    callback.should.have.been.calledThrice; // 3rd time should be the last one
  });

  it('should not terminate on callback returning implicit false', () => {
    let callback = sinon.spy(n => n % 2); // return 0 on even numbers
    let arr = [1, 3, 4, 5, 6];

    forEach(arr, callback);

    callback.should.have.callCount(arr.length);
  });

  it('should work with no callback', () => {
    forEach([1]);
  });
});
