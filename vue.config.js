const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir)
}

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

// vue-cli4 配置参考：https://github.com/staven630/vue-cli4-config
module.exports = {
    publicPath: './',
    filenameHashing: true,
    productionSourceMap: !IS_PROD, // 生产环境的 source map,
    outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
    // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
    // chunkFilename: 'js/[chunkname].[chunkhash].chunk.js',
    pages: {
        production: {
            entry: './src/main.js',
            template: './public/index.html',
            filename: 'index.html'
        }
    },
    devServer: {
        // overlay: { // 让浏览器 overlay 同时显示警告和错误
        //   warnings: true,
        //   errors: true
        // },
        // open: false, // 是否打开浏览器
        // host: "localhost",
        // port: "8080", // 代理端口
        // https: false,
        // hotOnly: false, // 热更新
        proxy: {
            "/api": {
                target: "http://www.baidu.com/", // 目标代理接口地址
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                // ws: true, // 是否启用websockets
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    },

    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set("@assets", resolve("src/assets"))
    }
};
