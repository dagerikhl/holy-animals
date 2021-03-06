const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.css',
            '.js',
            '.jsx'
        ],
        alias: {
            src: path.resolve(__dirname, 'src'),
            css: path.resolve(__dirname, 'css'),
            res: path.resolve(__dirname, 'res')
        }
    }
};
