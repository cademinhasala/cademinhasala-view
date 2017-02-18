const CompressionPlugin = require('compression-webpack-plugin')
const rimrafSync = require('rimraf').sync
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const host = '0.0.0.0'
const port = process.env.PORT || 8080

function resolve(to) {
  return path.resolve(__dirname, to)
}

const plugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
]

rimrafSync(resolve('../build/'))

module.exports = [
  // Server
  {
    entry: ['isomorphic-fetch', './server/index.js'],
    externals: [nodeExternals()],
    output: {
      filename: '[name].js',
      path: resolve('../build/node'),
    },
    plugins,
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            extends: resolve('../.babelrc.node.json'),
          },
        },
      ],
    },
    target: 'node',
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  },

  // Client
  {
    entry: {
      vendor: ['babel-polyfill', 'whatwg-fetch', 'react', 'react-dom'],
      index: './src/index.jsx',
    },
    devServer: {
      host,
      port,
    },
    plugins: [
      ...plugins,
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        comments: false,
        sourceMap: false,
      }),
      new HtmlWebpackPlugin({
        filename: 'index.njk',
        template: resolve('../src/views/index.njk'),
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new ExtractTextPlugin('[contenthash].[name].css'),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        minRatio: 0.8
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
      }),
    ],
    output: {
      filename: '[hash].[name].js',
      path: resolve('../build/web'),
      publicPath: '/',
    },
    module: {
      loaders: [
        {
          test: /\.njk$/,
          loader: 'html-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            extends: resolve('../.babelrc.web.json'),
          },
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract([
            'css-loader?minimize&importLoaders=1',
            'postcss-loader',
          ]),
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    postcss: () => ([
      require('autoprefixer'),
    ]),
  }
]
