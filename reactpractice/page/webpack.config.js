var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件
  module: {
    rules: [
    {
        test: /(\.jsx|\.js)$/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                "env", "react"
                ]
            }
        },
        exclude: /node_modules/
    },
    {
        test: /\.css$/,
        use: [
        {
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }
        ]
    },
    {
        test: /\.less$/,
        use: [
        {
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader"
        }
        ]
    }
    ]
},
output: {
    path: __dirname + "/src",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
}
}