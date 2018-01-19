const { describe, it } = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

describe('filter', () => {
  const filter = require('../src/filter');

  it('module exports a function', () => {
    chai.expect(filter).to.be.a('function');
  });

  it('predicate gets invoked with item and index', () => {
    let predicate = sinon.spy(() => {});

    filter(['a', 'b'], predicate);

    predicate.should.have.been.calledWith('a', 0);
    //predicate.should.have.been.calledWith('b', 1);
    predicate.should.have.been.calledTwice;
  });

  it('should filter elements using predicate', () => {
    filter([1, 3, 4, 6, 5], n => n % 2 === 0).should.deep.equal([4, 6]);
  });

  it('should work without predicate', () => {
    filter([false, null, 4, 5, 6]).should.deep.equal([4, 5, 6]);
  });
});
