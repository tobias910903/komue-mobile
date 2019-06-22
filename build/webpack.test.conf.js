/*****

1 将hot-reload相关的代码添加到entry chunks
2 合并基础的webpack配置
3 使用styleLoaders
4 配置Source Maps
5 配置webpack插件

******/

'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge') // 一个可以合并数组和对象的插件
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 一个用于生成HTML文件并自动注入依赖文件（link/script）的webpack插件
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin') // 用于更友好地输出webpack的警告、错误等信息
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

 // 合并基础的webpack配置
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    // 配置样式文件的处理规则，使用styleLoaders
    rules: utils.styleLoaders({ 
      sourceMap: config.dev.cssSourceMap, 
      usePostCSS: true 
    })
  },

  // 配置Source Maps。在开发中使用cheap-module-eval-source-map更快
  devtool: config.dev.devtool,

  // webpack-dev-server选项的基本配置，可以在/config/index.js文件中进行自定义配置。
  devServer: {
    clientLogLevel: 'warning',  // 用于配置在开发工具的控制台中显示的日志级别
    historyApiFallback: {  // 表示当使用html5的history api的时候，任意的404响应都需要被替代为index.html
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true, // 启用webpack的热替换特性
    contentBase: false, 
    compress: true, // 可以在js，css等文件的response header中发现有Content-Encoding:gzip响应头
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser, // 当编译出现错误的时候，是否希望在浏览器中展示一个全屏的蒙层来展示错误信息
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false, // 表示只显示错误信息而不显示警告信息
    publicPath: config.dev.assetsPublicPath, 
    proxy: config.dev.proxyTable, // 配置代理，跨域访问某些接口
    quiet: true,  // 与监视文件相关的控制选项
    watchOptions: {
      poll: config.dev.poll, // 如果这个选项为true，会以轮询的方式检查我们的文件的变动，效率不好
    }
  },

  // 配置webpack插件
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    }),
    new webpack.HotModuleReplacementPlugin(), // 不要再生产环境中使用hmr
    new webpack.NamedModulesPlugin(), // 这个插件的主要作用就是在热加载的时候直接返回更新文件的名称，而不是文件的id
    new webpack.NoEmitOnErrorsPlugin(), // 页面中的报错不会阻塞，但是会在编译结束后报错

    // 生成html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true // 将所有的静态文件都插入到body文件的末尾
    }),

    // 复制static资源
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
      }))
      resolve(devWebpackConfig)
    }
  })
})
