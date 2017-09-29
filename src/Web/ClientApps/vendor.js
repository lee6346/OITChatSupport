var helper = require('./helpers');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
    const extractCSS = new ExtractTextPlugin('vendor.css');
    const vendorConfig = {
        stats: { modules: false },
        resolve: { extensions: ['.js'] },
        entry: {
            vendor: [
                '@angular/animations',
                '@angular/common',
                '@angular/compiler',
                '@angular/core',
                '@angular/forms',
                '@angular/http',
                '@angular/platform-browser',
                '@angular/platform-browser-dynamic',
                '@angular/router',
                'bootstrap',
                'bootstrap/dist/css/bootstrap.css',
                'jquery',
            ],
        },
        module: {
            rules: [
                { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
                { test: /\.css(\?|$)/, use: extractCSS.extract({ fallback: 'style-loader', use: 'css-loader' }) }
            ]
        },
        output: {
            path: helper.root('wwwroot', 'vendordist'),
            filename: '[name].bundle.js',
            chunkFilename: '[id].chunk.js'
        },
        plugins: [
            extractCSS,
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
            new webpack.ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, helper.root('ClientApps')), // Workaround for https://github.com/angular/angular/issues/11580
            new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, helper.root('ClientApps')), // Workaround for https://github.com/angular/angular/issues/14898
            new webpack.IgnorePlugin(/^vertx$/) // Workaround for https://github.com/stefanpenner/es6-promise/issues/100
        ]

    };
    return vendorConfig;
};
