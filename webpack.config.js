const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path(__dirname, 'src/index.jsx'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path(__dirname, 'index.html') })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
};
