const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //分离CSS
var VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入vue依赖loader
var webpack = require('webpack'); //引入jquery
module.exports = {
    entry: {
        xyRmain: './src/xyRmain.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script/[name].js',
        publicPath: '/', //指定url图片资源访问路劲
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".vue", ".css", ".less", ".scss"] //配置文件引入略后缀名
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader'], //分离CSS
            },
            { //potho=>loader
                test: /\.(png|svg|jpg|gif|woff|woff2|svg|eot|ttf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]?[hash:8].jpg',
                        limit: 81920,
                        outputPath: 'images',
                    }
                }]
            },
            { //ES6=>loader
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            { //vue=>loader
                test: /\.(vue)$/,
                use: 'vue-loader'
            },

        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ //引入jquery
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        }),
        new VueLoaderPlugin(), //vue
    ]
}