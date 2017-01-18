const path = require('path') 
const webpack = require('webpack') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const port = process.env.PORT || 8080

module.exports = {
    entry: "./src/index",
    devServer: {
        host: "0.0.0.0",
        port: port,     
    },
    plugins: [
        new HtmlWebpackPlugin({
             template: 'src/index.html'
        })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};