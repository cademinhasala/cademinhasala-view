const CompressionPlugin = require('compression-webpack-plugin')
const rimrafSync = require('rimraf').sync
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

function resolve(to) {
  return path.resolve(__dirname, to)
}

rimrafSync(resolve('../build/'))

const title = 'Cadê Minha Sala'

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
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                emitFile: false,
                publicPath: '/img/',
              },
            },
            'image-webpack-loader',
          ],
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
        title,
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
      new FaviconsWebpackPlugin({
        logo: resolve('../src/img/favicon.png'),
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
        title,
      }),
      new FaviconsWebpackPlugin({
        logo: resolve('../src/img/logo.jpg'),
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: false,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: false,
          windows: true,
        },
        title,
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
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'img/',
                publicPath: '/img/',
              },
            },
            'image-webpack-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    target: 'web',
  }
]
