const CompressionPlugin = require('compression-webpack-plugin')
const rimrafSync = require('rimraf').sync
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

function resolve(to) {
  return path.resolve(__dirname, to)
}

rimrafSync(resolve('../build/'))

module.exports = [
  // Server
  {
    entry: ['isomorphic-fetch', './server/index.js'],
    externals: [nodeExternals()],
    output: {
      filename: '[name].js',
      path: resolve('../build/node'),
      publicPath: '/',
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: { extends: resolve('../.babelrc.node.json') },
        },
      ],
    },
    target: 'node',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },

  // Client
  {
    entry: {
      vendor: ['babel-polyfill', 'whatwg-fetch', 'react', 'react-dom'],
      index: './src/index.jsx',
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
      }),
      new HtmlWebpackPlugin({
        filename: 'index.njk',
        template: resolve('../src/views/index.njk'),
        minify: {
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyURLs: true,
          quoteCharacter: '"',
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          sortAttributes: true,
          sortClassName: true,
          trimCustomFragments: true,
        },
      }),
      new ScriptExtHtmlWebpackPlugin({
        sync: ['vendor'],
        defaultAttribute: 'async',
      }),
      new ExtractTextPlugin('[contenthash].[name].css'),
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
      }),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        minRatio: 0.8
      }),
    ],
    output: {
      filename: '[hash].[name].js',
      path: resolve('../build/web'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.njk$/,
          loader: 'html-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: { extends: resolve('../.babelrc.web.json') },
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => ([
                    require('autoprefixer'),
                  ]),
                }
              },
            ],
          }),
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    target: 'web',
  }
]
