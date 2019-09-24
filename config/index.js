'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static', // 编译输出的二级目录
    assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或者cdn域名
    proxyTable: {},
    //proxyTable: {
    //  '/api': {
    //    changeOrigin: true,
    //    target: 'https://www.lihuyong.com/',
    //    pathRewrite: {
    //      '^/api': ''
    //    }
    //  }
    //}, // 需要使用proxyTable代理的接口(可以跨域)
    host: 'localhost',
    port: 8080, // 端口
    autoOpenBrowser: false, // 启动server之后自动打开浏览器
    errorOverlay: true, //  在浏览器是否展示错误蒙层
    notifyOnErrors: true, // 是否展示错误的通知

    // 这个是webpack-dev-servr的watchOptions的一个选项，指定webpack检查文件的方式
    // 因为webpack使用文件系统去获取文件改变的通知。在有些情况下，这个可能不起作用。例如，当使用NFC的时候，
    // vagrant也会在这方面存在很多问题，在这些情况下，使用poll选项（以轮询的方式去检查文件是否改变）可以设定为true
    // 或者具体的数值，指定文件查询的具体周期。
    poll: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true, // 指定是否通过在文件名称后面添加一个查询字符串来创建source map的缓存
    cssSourceMap: true
  },

  build: {
    prodEnv: require('./prod.env'),
    testEnv: require('./test.env'),
    devEnv: require('./dev.env'),

    index: path.resolve(__dirname, '../dist/index.html'),

    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    productionSourceMap: true,
    devtool: '#source-map',

    productionGzip: false, // 是否开启生产环境的gzip压缩
    productionGzipExtensions: ['js', 'css'], // 开启gzip压缩的文件的后缀名称

    bundleAnalyzerReport: process.env.npm_config_report // 如果这个选项是true的话，那么则会在build后，会在浏览器中生成一份bundler报告
  }
}
