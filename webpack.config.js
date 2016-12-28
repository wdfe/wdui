'use strict'
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      amd: 'vue',
      commonjs: 'vue'
    }
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
        test: /\.(png|jpg|gif|svg)(\?t=\d+)?$/,
        loader: 'url-loader?limit=10000',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new CleanPlugin(['dist']),
  ]
}

if(process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,
    },
    compress: {
      warnings: false
    }
  }))
}else {
  module.exports.devtool = 'eval-source-map'
}
