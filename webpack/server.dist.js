import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  devtool: 'eval',

  context: path.join(__dirname, '../src'),

  entry: [
    'babel-polyfill',
    './server.js',
  ],

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },

  target: 'node',

  externals: [
    nodeExternals(),
    {
      assets: `${process.cwd()}/dist/assets.json`,
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
        test: /\.(png|jpe?g|gif|svg|woff)$/,
        use: [
          'file-loader?name=/public/[name].[ext]',
        ],
        exclude: /node_modules/,
      },
    ],
  },
}
