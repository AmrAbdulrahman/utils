// credits: https://stackoverflow.com/a/7356528
module.exports = function isFunction(functionToCheck) {
  if (!functionToCheck) {
    return false;
  }

  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
