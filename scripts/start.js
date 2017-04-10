import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import nodemon from 'nodemon';
import webpackServerConfig from '../webpack/server.local';
import webpackBrowserConfig from '../webpack/browser.local';

const serverCompiler = webpack(webpackServerConfig);
serverCompiler.run(() => {
  const watcher = nodemon('./build/server');

  process.once('SIGINT', () => {
    watcher.once('exit', () => {
      process.exit();
    });
  });
});

const browserCompiler = webpack(webpackBrowserConfig);
browserCompiler.run(() => {
  const browser = new WebpackDevServer(browserCompiler, webpackBrowserConfig.devServer);
  browser.listen(8080, 'localhost', () => {
    console.log('listening on 8080')
  });
});
