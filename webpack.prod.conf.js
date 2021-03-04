const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //分离CSS
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //样式压缩与优化
var webpack = require('webpack'); //引入jquery
const {
    merge
} = require('webpack-merge'); //引入merge
const common = require('./webpack.basics.conf.js'); //引入

module.exports = merge(common, {
    plugins: [ //配置生成html文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                minimize: true, //是否打包为最小值
                removeAttributeQuotes: true, //去除引号
                removeComments: true, //去除注释
                collapseWhitespace: true, //去除空格
                minifyCSS: true, //压缩html内的样式
                minifyJS: true, //压缩html内的JS
                removeEmptyElements: true, //清理内容为空的元素
            },
            hash: true //引入产出资源的时候加上哈希避免缓存
        }),
        new MiniCssExtractPlugin( //分离CSS
            {
                filename: 'css/main.css'
            }
        ),
        new OptimizeCSSAssetsPlugin({ // 压缩和优化CSS文件
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true
                    }
                }]
            },
            canPrint: true
        }),
    ]
})