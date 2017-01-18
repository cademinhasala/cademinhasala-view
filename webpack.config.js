const path = require('path') 
const webpack = require('webpack') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const port = process.env.PORT || 8080

module.exports = {
    entry: [`webpack-dev-server/client?http://0.0.0.0:${port}/`, "webpack/hot/dev-server", "./src/index"],
    devServer: {
        hot:true,        
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