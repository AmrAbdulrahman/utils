module.exports = function get(obj, path, defaultValue) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (typeof path === 'string') {
    path = path.split('.');
  } else if (!path || !path.constructur || path.constructur.name !== 'Array') {
    throw new TypeError('Invalid Type: path must be a string or array');
  }

  let res = obj;

  for (var i = 0; i < path.length; i++) {
    res = res[path[i]];

    if (res === undefined) {
      break;
    }
  }

  return res === undefined ? defaultValue : res;
};
