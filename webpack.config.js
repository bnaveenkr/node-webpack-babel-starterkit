const path = require('path');
const nodeExternals = require('webpack-node-externals');

const webpack_opts = {
    context: path.resolve('./'),
    entry: [
        './src',
    ],
    target: 'node',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            './node_modules',
            './src',
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['eslint-loader'],
                enforce: 'pre',
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
            },
        ]
    },
    externals: [nodeExternals()]
};

module.exports = webpack_opts;
