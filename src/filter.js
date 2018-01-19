const isFunction = require('./isFunction');
const identity = require('./identity');

module.exports = function find(array, predicate = identity) {

  predicate = isFunction(predicate) ? predicate : identity;

  for (var i = 0; i < array.length; i++) {
    var value = predicate(array[i], i);

    // falsy value
    if (!value) {
      array.splice(i--, 1);
    }
  }

  return array;
};
