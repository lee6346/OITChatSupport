﻿const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'source-map-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'to-string-loader',
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ],
        exprContextCritical: false
    }
};