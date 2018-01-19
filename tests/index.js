const fs = require('fs');
const path = require('path');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

function getUtilsFunctions() {
  return fs
    .readdirSync(path.join(__dirname, '../src'))
    .map(f => f.replace('.js', ''))
    .filter(f => f !== 'index');
}

describe('index', () => {
  const utils = require('../src');

  it('utils index exports an object', () => {
    expect(utils).to.be.an('object');
  });

  it('it includes references to all utility functions', () => {
    getUtilsFunctions().forEach(key =>
      expect(utils[key]).to.be.a('function')
    );
  });

  it(`there's a test file for each util`, () => {
    getUtilsFunctions().forEach(util => {
      const testPath = path.join(__dirname, `../src/${util}.js`);
      const testExists = fs.existsSync(testPath);
      expect(testExists).to.equal(true);
    });
  });
});
