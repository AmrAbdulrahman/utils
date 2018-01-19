const { describe, it } = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const jsdom = require('./utils/jsdom');

chai.should();

describe('getQueryParams', () => {
  const getQueryParams = require('../src/getQueryParams');

  before(() => jsdom());

  it('module exports a function', () => {
    expect(getQueryParams).to.be.a('function');
  });

  it('it parses empty query params', () => {
    window.location.href = 'http://www.something.com/';
    expect(getQueryParams()).to.deep.equal({});
  });

  it('it parses query params', () => {
    window.location.href = 'http://www.something.com/?a=b&dashed-key=dashed-value&camelCaseKey=camelCaseValue';

    const queryParams = getQueryParams();

    queryParams.should.have.keys('a', 'dashed-key', 'camelCaseKey');

    queryParams.a.should.be.equal('b');
    queryParams.camelCaseKey.should.be.equal('camelCaseValue');
    queryParams['dashed-key'].should.be.equal('dashed-value');
  });
});
