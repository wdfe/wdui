'use strict'
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../example/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist/example'),
    filename: 'demo.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loaders: [{
          loader: 'vue-loader',
          options: {
            postcss: [autoprefixer({browsers: ['> 1%', 'ie >= 9', 'iOS >= 6', 'Android >= 2.1']}), px2rem({remUnit: 75})]
          }
        }]
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|svg)(\?t=\d+)?$/,
        loaders: [{
          loader: 'url-loader?limit=8192&name=[name]-[hash].[ext]'
        }]
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 8083,
    host: '127.0.0.1',
    https: false,
    compress: true,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
