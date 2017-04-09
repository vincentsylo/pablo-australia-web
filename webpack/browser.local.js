import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';

export default {
  devtool: 'cheap-module-source-map',

  context: path.join(__dirname, '../src'),

  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr',
      'webpack/hot/only-dev-server',
      './client',
    ],
  },

  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    publicPath: '/',
  },

  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../build'),
    publicPath: '/',
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:5]',
          'postcss-loader',
        ],
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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new AssetsPlugin({
      path: path.join(__dirname, '../build'),
      filename: 'assets.json',
    }),
  ],
}
