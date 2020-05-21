const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

var commonConfig = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: 'style!less!css'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = [

    // Config 1: For browser environment
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'vue-game-countdown.min.js',
            libraryTarget: 'window',
            library: 'VueClock'
        }
    }),

    // Config 2: For Node-based development environments
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/GameCountdown.vue'),
        output: {
            filename: 'vue-game-countdown.js',
            libraryTarget: 'umd',

            // These options are useful if the user wants to load the module with AMD
            library: 'vue-game-countdown',
            umdNamedDefine: true
        }
    })
];
