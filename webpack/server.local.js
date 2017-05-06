import path from 'path';
import nodeExternals from 'webpack-node-externals';
import OnBuildPlugin from 'on-build-webpack';
import nodemon from 'nodemon';
import WriteFilePlugin from 'write-file-webpack-plugin';
let serverStarted = false;

export default {
  devtool: 'eval',

  context: path.join(__dirname, '../src'),

  entry: [
    'babel-polyfill',
    './server.js',
  ],

  output: {
    path: path.join(__dirname, '../dist/public'),
    filename: '../server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },

  target: 'node',

  externals: [
    nodeExternals(),
    {
      assets: `${process.cwd()}/dist/assets.json`,
    },
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:5]',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|ico)$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new WriteFilePlugin(),
    new OnBuildPlugin(() => {
      if (!serverStarted) {
        const watcher = nodemon('./dist/server');

        process.once('SIGINT', () => {
          watcher.once('exit', () => {
            process.exit();
          });
        });

        serverStarted = true;
      }
    })
  ],
}
