const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const host = '0.0.0.0'
const port = process.env.PORT || 8080

function resolve(to) {
  return path.resolve(__dirname, to)
}

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx',
  ],
  devServer: {
    hotOnly: true,
    host,
    port,
  },
  devtool: 'eval',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      favicon: resolve('../src/img/favicon.png'),
      template: resolve('../src/views/index.njk'),
      title: 'Cadê Minha Sala',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve('../build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.njk$/,
        use: ['html-loader', 'nunjucks-html-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { extends: resolve('../.babelrc.web.json') },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.img$/,
        use: ['style-loader', 'img-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'web',
};
