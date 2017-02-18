const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const host = '0.0.0.0'
const port = process.env.PORT || 8080

function resolve(to) {
  return path.resolve(__dirname, to)
}

module.exports = {
  entry: ['webpack/hot/dev-server', './src/index'],
  devServer: {
    inline: true,
    hot: true,
    host,
    port,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../src/views/index.njk'),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  output: {
    filename: 'app.js',
    path: resolve('../build'),
    publicPath: `http://${host}:${port}/`,
  },
  module: {
    loaders: [
      {
        test: /\.njk$/,
        loaders: ['html', 'nunjucks-html'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
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
