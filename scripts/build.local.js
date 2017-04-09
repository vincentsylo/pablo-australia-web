import webpack from 'webpack';
import webpackServerConfig from '../webpack/server.local';
import webpackBrowserConfig from '../webpack/browser.local';

const compiler = webpack([webpackServerConfig, webpackBrowserConfig]);

compiler.run(function(err, stats) {
  if (err) console.error(err);
  console.log(`** Local server ready! **`);
});
