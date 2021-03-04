const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //分离CSS
var webpack = require('webpack'); //引入jquery
const {
    merge
} = require('webpack-merge'); //引入merge
const common = require('./webpack.basics.conf.js'); //引入
module.exports = merge(common, {
    // /*处理跨域
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    // */
    devServer: {
        contentBase: './dist', //设置服务器访问的基本目录
        host: 'localhost', //配置服务器的IP地址
        port: 9090, //端口
        open: true, //自动打开页面
        inline: true, //自动刷新
        hot: true, //模块热替换
        historyApiFallback: true, //无刷新更改地址栏, 可解决路由刷新
        progress: true, //打包进度条
        lazy: false, //不启动懒加载
        quiet: false, //控制台中不输出打包的信息
        watchOptions: {
            aggregateTimeout: 300
        },
        // /*
        proxyTable: {
            '/api': {
                target: 'https://api.gzwjfh.com/',
                // target: 'http://192.168.0.200:7070/',
                // ws: true, // 是否启用websockets
                secure: false, // 使用的是http协议则设置为false，https协议则设置为true,   即：不检查安全问题
                changeOrigin: true, //开启代理： 在本地会创建一个虚拟服务端， 然后发送请求的数据， 并同时接收请求的数据
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
        // */
    },
    plugins: [ //配置生成html文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin( //分离CSS
            {
                filename: 'css/main.css'
            }
        ),
    ]
})