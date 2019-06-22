/******

1 loading动画
2 删除创建目标文件夹
3 webpack编译
4 输出信息

*****/

'use strict'
require('./check-versions')() // 检查NodeJS和npm的版本

const ora = require('ora') // 实现node.js 命令行环境的 loading效果，和显示各种状态的图标等
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk') // 用于在控制台输出带颜色字体的插件
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for ' + process.env.NODE_ENV + ' of ' + process.env.ENV_CONFIG + ' mode...')
spinner.start()

// 每次启动编译或者打包之前，先把整个dist文件夹删除，然后再重新生成dist
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({  // 输出打包的状态
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    // 打包完成
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
