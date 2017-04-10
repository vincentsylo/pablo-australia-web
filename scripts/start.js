import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackServerConfig from '../webpack/server.local';
import webpackBrowserConfig from '../webpack/browser.local';

const compiler = webpack([webpackBrowserConfig, webpackServerConfig]);
compiler.run(() => {
  const browser = new WebpackDevServer(compiler, webpackBrowserConfig.devServer);
  browser.listen(8080, 'localhost', () => {
    console.log('listening on 8080')
  });
});
