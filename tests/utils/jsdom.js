const { JSDOM } = require('jsdom');

module.exports = () => {
  global.window = new JSDOM('<!doctype html><html><body></body></html>');
  global.document = global.window.document;
  global.navigator = global.window.navigator;
  global.window.location = {};
};

// @TODO follow up on this:
// https://github.com/rstacruz/mocha-jsdom/issues/16
