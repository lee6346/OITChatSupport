var helper = require('./helpers');
var webpack = require('webpack');

module.exports = () => {
    const polyfillConfig = {
        stats: { modules: false },
        resolve: { extensions: ['.js'] },
        entry: {

            polyfills: [
                'core-js/es6',
                'core-js/es7/reflect',
                'reflect-metadata',
                'zone.js',
                'es6-promise',
                'es6-shim',
                'event-source-polyfill',
            ],
        },
        output: {
            path: helper.root('wwwroot', 'polyfilldist'),
            filename: '[name].bundle.js',
            chunkFilename: '[id].chunk.js'
        },
        plugins: [
            new webpack.ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, helper.root('ClientApps')), // Workaround for https://github.com/angular/angular/issues/11580
            new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, helper.root('ClientApps')), // Workaround for https://github.com/angular/angular/issues/14898
            new webpack.IgnorePlugin(/^vertx$/) // Workaround for https://github.com/stefanpenner/es6-promise/issues/100
        ]

    };
    return polyfillConfig;
};