import path from 'path';
import nodeExternals from 'webpack-node-externals';
import CleanPlugin from 'clean-webpack-plugin';

export default {
  devtool: 'eval',

  context: path.join(__dirname, '../src'),

  entry: [
    './serverSideRender.js',
  ],

  output: {
    path: path.join(__dirname, '../build'),
    filename: 'serverSideRender.js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },

  target: 'node',

  externals: [
    nodeExternals(),
    {
      assets: `${process.cwd()}/build/assets.json`,
    }
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
    ],
  },

  plugins: [
    new CleanPlugin([
      'build',
      'dist',
    ], {
      root: process.cwd(),
    }),
  ],
}
