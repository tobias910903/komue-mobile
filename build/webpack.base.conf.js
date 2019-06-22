/*****

1 配置webpack编译入口
2 配置webpack输出路径和命名规则
3 配置模块resolve规则
4 配置不同类型模块的处理规则

*****/

'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

// 给出正确的绝对路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  // 配置webpack编译入口
  entry: { 
    app: './src/main.js'
  },
  // 配置webpack输出路径和命名规则
  output: {
    path: config.build.assetsRoot, // webpack输出的目标文件夹路径（例如：/dist）
    filename: '[name].js', // webpack输出bundle文件命名格式
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'development' ? config.build.assetsPublicPath : config.dev.assetsPublicPath)
  },
  // 配置模块resolve的规则
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 自动resolve的扩展名
    alias: { // 创建路径别名，方便引用模块
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  // 配置不同类型模块的处理规则
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"    
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    setImmediate: false, // check观察者 每轮循环中执行链表中的一个回调函数
    dgram: 'empty', // dgram模块提供了UDP数据包socket的实现
    fs: 'empty', // fs模块用于对系统文件及目录进行读写操作
    net: 'empty', // 提供了一些用于底层的网络通信的小工具 包含了创建服务器/客户端的方法
    tls: 'empty',
    child_process: 'empty' // 创建独立的子进程
  }
}
