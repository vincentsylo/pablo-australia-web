import webpack from 'webpack';
import ProgressPlugin from 'webpack/lib/ProgressPlugin';
import webpackBrowserConfig from '../webpack/browser.dist';
import webpackServerConfig from '../webpack/server.dist';

const compiler = webpack([webpackServerConfig, webpackBrowserConfig]);

compiler.apply(new ProgressPlugin(function(percentage, msg) {
  console.log((percentage * 100) + '%', msg);
}));

compiler.run(function(err, stats) {
  if (err) console.error(err);
  console.log(`** Done building dist! **`);
});

