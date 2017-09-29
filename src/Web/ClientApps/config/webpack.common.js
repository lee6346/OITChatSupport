var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('../helpers');

module.exports = {
/*    entry: {
        'polyfills': helpers.root('ClientApps', 'polyfills.js'),
    },*/
    resolve: {
        modules: [helpers.root('node_modules')],
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: helpers.root('tsconfig.json') }
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            },
            {
                test: /\.css(\?|$)/,
                use: ['to-string-loader', 'css-loader']

            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                loader: 'url-loader?limit=25000'
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            helpers.root('wwwroot/chatbotdist'),
        ])
    ]
};