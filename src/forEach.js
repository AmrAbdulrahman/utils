const isFunction = require('./isFunction');

module.exports = function forEach(iterable, cb) {
  const blackHole = () => {};

  cb = isFunction(cb) ? cb : blackHole;

  for (var i = 0; i < iterable.length; i++) {
    var value = cb(iterable[i], i);

    if (value === false) {
      break;
    }
  }
};
