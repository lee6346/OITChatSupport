const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const WebRoot = path.resolve(__dirname, '../../..');
const AppRoot = path.resolve(__dirname, '..');


module.exports = {
    devtool: 'source-map',
    entry: {
        'polyfills': '../src/polyfills.ts',
        'vendor': '../src/vendor.ts',
        'agent-portal': '../src/main.ts'
    },
    output: {
        path: WebRoot + '/wwwroot/oitagents/',
        filename: 'dist/[name].bundle.js',
        chunkFilename: 'dist/[id].chunk.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: path.join(WebRoot, 'tsconfig.json') }
                    },
                    'angular-router-loader',
                    'angular2-template-loader',
                    'source-map-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                use: 'file-loader?name=assets/[name]-[hash:6].[ext]'
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
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),

        new CleanWebpackPlugin(
            [
                './wwwroot/agents/dist',
                './wwwroot/agents/assets'
            ],
            { root: WebRoot }
        ),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: path.join(AppRoot, 'src/index.html')
        })
    ]
};