const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config.base');
// const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(base, {
  mode: 'development',
  entry: {
    client: path.resolve(__dirname, '../src/main.js')
  },

  plugins: [
    // new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html'
    })
  ]
});