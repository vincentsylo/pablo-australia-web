import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';

export default {
  devtool: 'cheap-module-source-map',

  context: path.join(__dirname, '../src'),

  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './client',
    ],
  },

  output: {
    path: path.join(__dirname, '../build/public'),
    filename: '[name].js',
    publicPath: '/',
    hotUpdateChunkFilename: 'hot-update/[id].[hash].js',
    hotUpdateMainFilename: 'hot-update/[hash].json',
  },

  target: 'web',

  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../build/public'),
    publicPath: '/',
    host: '0.0.0.0',
    inline: false,
    port: 8080,
    proxy: [
      {
        context: ['**', '!/hot-update/**'],
        target: 'http://localhost:8081',
        secure: false,
      },
    ],
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
    new WriteFilePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new AssetsPlugin({
      path: path.join(__dirname, '../build'),
      filename: 'assets.json',
    }),
  ],
}
