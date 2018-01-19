const isFunction = require('./isFunction');
const identity = require('./identity');

module.exports = function find(iterable, predicate, fallbackValue) {

  predicate = isFunction(predicate) ? predicate : identity;

  for (var i = 0; i < iterable.length; i++) {
    var value = predicate(iterable[i], i);

    // truthy value
    if (value) {
      return iterable[i];
    }
  }

  return fallbackValue;
};
