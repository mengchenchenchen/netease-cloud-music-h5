/* eslint-disable no-undef */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack  = require('webpack');
const resolve = dir => path.join(__dirname, '..',dir);
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map', //生曾map 映射对应代码  方便错误查询
    devServer: {
        contentBase: './dist', // 告诉服务从哪提供代码内容(静态文件这么使用)
        compress: true,
        hot: true, //hot模式开启
        open:true,
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@src': resolve('src/'),
            '@comp': resolve('src/components'),
            '@page': resolve('src/page/'),
            '@exp': resolve('src/example')
        }
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true,
                },
                exclude: /node_modules/,
            },
            // {
            //     enforce: 'pre',
            //     test: /\.(js|vue)$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/
            // },
            {
                test: /\.(css|less)$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192'
            },
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
