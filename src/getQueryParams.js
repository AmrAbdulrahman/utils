module.exports = function getQueryParams() {
  var regex = /[?&]([^=#]+)=([^&#]*)/g,
      url = window.location.href,
      params = {},
      match;

  while(match = regex.exec(url)) {
    params[match[1]] = match[2];
  }

  return params;
};
