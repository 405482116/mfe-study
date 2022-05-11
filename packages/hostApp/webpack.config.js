const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
    entry: './src/index',
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3001,
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: 'auto',
    },
    resolve: {
        extensions: [ '.js'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'hostApp',
            shared: {
                'jason-mfe-lib':{
                    eager: false,
                    // singleton: true,
                }
            },
        }),
        new HtmlWebpackPlugin(),
    ],
};