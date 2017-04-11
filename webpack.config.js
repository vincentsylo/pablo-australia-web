/* eslint-disable */
require('babel-register')();

if (process.argv[1].indexOf('webpack-dev-server') > 1) {
  module.exports = [
    require('./webpack/browser.local.js'),
    require('./webpack/server.local.js'),
  ];
} else {
  module.exports = [
    require('./webpack/browser.dist.js'),
    require('./webpack/server.dist.js'),
  ];
}
