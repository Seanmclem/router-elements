var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    context: path.join(process.cwd(), 'src'),
    entry: './app.js',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    resolve: {
        modules: [
            path.join(process.cwd(), 'node_modules'),
        ]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: 'index.html'
        })
    ],
    devServer: {
        stats: 'minimal',
        contentBase: './dist',
        port: 9000,
        overlay: true,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};