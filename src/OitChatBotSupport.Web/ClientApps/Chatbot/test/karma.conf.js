
module.exports = function (config) {
    const webpackConfig = require('../config/webpack.test.js')

    const configuration = {
        //base path for resolving all patterns
        basePath: '',
        //frameworks to use
        frameworks: ['jasmine'],
        // list of files/patterns to load on browser
        files: [
            { pattern: '../config/spec.bundle.js', watched: false }
        ],
        //list of files to exclude
        exclude: [],
        //preprocess matching files before serving to browser
        preprocessors: {
            '../config/spec.bundle.js': ['webpack', 'sourcemap']
        },
        //webpack
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        //test results reporter to use (dots, progress)
        reporters: ['progress'],
        //test web server port
        port: 9876,
        // enable colors in reporter/log output
        colors: true,
        // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable watchign file/executing tests when files change
        autoWatch: true,
        // apply to chrome browser
        browsers: ['Chrome'],
        //CI mode, karma captures browsers, runs tests, then exits
        singleRun: false
    };
    config.set(configuration);
}