/*****

1 配置css加载器以及编译css之后自动添加前缀

*****/

'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap

module.exports = {
  // css加载器
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  // 让vue-loader知道需要对audio的src属性的内容转换为模块
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
