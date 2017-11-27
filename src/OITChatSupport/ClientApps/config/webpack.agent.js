var webpack = require('webpack');
var common = require('./webpack.common.js');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('../helpers');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    entry: {
        'agentapp': '../AgentPortal/main.ts',
    },
    output: {
        path: helpers.root('wwwroot', 'agentdist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['agentapp']
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('ClientApps'),
            {} 
        ),
    ]
});
