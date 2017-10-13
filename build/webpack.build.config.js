'use strict'
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')
const fs = require('fs')
const path = require('path')
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin

const fileNameTransfer = fileName => fileName.match(/[A-Z][a-z]*/g).map((e) => e.toLowerCase()).join('-')

const generateEntrys = () => {
  let packages = fs.readdirSync('packages')
  let entrys = {
    'index': path.resolve(__dirname, '../src/index.js'),
  }
  if(packages) {
    packages.forEach((e) => {
      if(fs.statSync(`packages/${e}`).isDirectory()) {
        entrys[fileNameTransfer(e)] = path.resolve(__dirname, `../packages/${e}/index.js`)
      }
    })
    return entrys
  }
}

module.exports = {
  entry: generateEntrys(),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: 'wdui',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          eslint: {
            configFile: '../.eslintrc.json'
          }
        }
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
  plugins: [
    new CleanPlugin(['lib'], {
      root: path.resolve(__dirname, '../'),
    })
  ],
  resolve: {
    modules: ['node_modules']
  }
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
  // module.exports.plugins.push(new StatsWriterPlugin({
  //   filename: 'stats.json',
  //   transform: function(data, opts) {
  //     let stats = opts.compiler.getStats().toJson({chunkModules: true})
  //     return JSON.stringify(stats, null, 2)
  //   }
  // }))
}else {
  module.exports.devtool = 'eval-source-map'
}
