import path from 'path';
import nodeExternals from 'webpack-node-externals';
import CopyPlugin from 'copy-webpack-plugin';

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
      assets: './assets.json',
    }
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
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
    new CopyPlugin([{
      from: '../package.json',
      to: '../package.json',
    }, {
      from: '../yarn.lock',
      to: '../yarn.lock',
    }, {
      from: '../.env-prod',
      to: '../.env',
      toType: 'file',
    }, {
      from: '../uploads',
      to: '../uploads',
    }]),
  ],
}
