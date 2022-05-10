const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;
module.exports = {
    entry: './src/index',
    mode: 'development',
    target: 'web',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3002,
    },
    output: {
        publicPath: 'auto',
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'remoteApp',
            filename: 'remoteEntry.js',
            exposes: {
                './Widget': './src/index',
            },
            shared: {
                'jason-mfe-lib':{
                    eager: true,
                }
            },
        }),
        new HtmlWebpackPlugin(),
    ],
};