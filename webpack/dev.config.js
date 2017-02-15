const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const port = process.env.PORT || 8080

function resolve(to) {
  return path.resolve(__dirname, to)
}

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './src/index'],
  devServer: {
    host: '0.0.0.0',
    port,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html'),
    }),
  ],
  output: {
    path: resolve('../dist'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
