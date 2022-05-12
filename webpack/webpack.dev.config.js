const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    resolve: { extensions: [ '.js', '.ts' ] },
    entry: path.resolve(__dirname, '..', './src/client/index.js'),
    output:{
        path: path.resolve(__dirname, '..' ,'./dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html')
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ],
    devServer: {
        port: 3000,
        hot: true,
        host: 'localhost',
        static: {
            directory: path.resolve(__dirname, '..', 'dist')
        },
        open: true,
        // proxy: {
        //     '/': 'http://localhost:4000',
        // },
    }
}