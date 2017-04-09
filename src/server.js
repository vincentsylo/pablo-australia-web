import express from 'express';
import 'dotenv/config'; // Setup process.env variables
import models from './models';
import getApi from './api';

const app = express();

getApi(app);

/* eslint-disable */
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack/browser.local');
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr',
  }));
  app.get('*', require('../build/serverSideRender'));
 } else {
  app.use(express.static('dist/public'));
  app.get('*', require('./serverSideRender'));
 }
/* eslint-enable */

const port = process.env.PORT || 8080;
models.sequelize.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port: ${port}`); // eslint-disable-line
    });
  });
