import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';

export default {
  devtool: 'none',

  context: path.join(__dirname, '../src'),

  entry: {
    app: [
      'babel-polyfill',
      './client',
    ],
  },

  output: {
    path: path.join(__dirname, '../dist/public'),
    filename: '[name].[chunkHash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[name]__[local]___[hash:5]',
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff)$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  stats: {
    colors: true,
    timings: true,
    progress: true,
  },

  plugins: [
    new CleanPlugin([
      'build',
      'dist',
    ], {
      root: process.cwd(),
    }),
    new AssetsPlugin({
      path: path.join(__dirname, '../dist'),
      filename: 'assets.json',
    }),
    new ExtractTextPlugin('[name].[chunkHash].css'),
  ],
}
