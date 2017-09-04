var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',
    // context: path.join(__dirname),
    entry: {
        app: './src/index.js',
        vendor: ['react', 'react-dom', 'redux', 'react-router']
    },
    output: {
        filename: '[name].js', //打包后文件名
        path: path.join(__dirname, 'dist'), //文件打包后存放路径，通常时绝对路径
        chunkFilename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            loader: "babel-loader",
            options: {
                presets: ['es2015', 'react'],
                "plugins": [
                    "react-html-attrs", ["import", { libraryName: "antd", style: true }]
                ]
            }
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings 
            }, {
                loader: "css-loader" // translates CSS into CommonJS 
            }, {
                loader: "less-loader" // compiles Less to CSS 
            }]
        }]
    },
    devServer: {
        hot: true, //启用模块热替换，当前端代码变动的时候无需刷新整个页面，只替换变换的部分
        compress: true, //启用gzip压缩
        inline: true, //以inline内联模式刷新
        // color: true, //设置打印为彩色，仅对命令行有效
        contentBase: path.join(__dirname, 'src'), //设置基本目录，默认未当前目录
        port: 8080, //设置端口号，默认为8080，
        lazy: false //为true时表示仅当服务收到请求时编译
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}