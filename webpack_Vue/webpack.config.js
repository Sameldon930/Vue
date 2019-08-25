/**
 * 配置文件
 * 通过node中的模块操作 向外暴露一个配置对象
 */
//启用path
const path = require('path')
//启用webpack
const webpack  = require('webpack')
//导入在内存中生成 html页面的插件 html-pack-plugin
/**
 * 需要注意 只要是插件 都一定要放到plugin节点中
 */
const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 手动指定入口和出口
    entry:  path.join(__dirname,'./src/main.js'),//表示要使用 webpack打包哪个文件
    output:{//出口
        path:path.join(__dirname,'./dist'),//指定到哪个文件夹下
        filename:'bundle.js'//指定输出的文件名称  
    },
    devServer:{
        // 配置命令参数的第二种方式
        open:true,
        port:3000,
        contentBase:'src',
        hot:true
    },
    plugins:[
        //new一个热更新的模块对象 
        new webpack.HotModuleReplacementPlugin(),
        //new上面的插件工具
        new htmlWebpackPlugin({
            // 创建一个在内存中 生成html页面的 插件
             
            //指定模板页面 根据页面的路径 去生成内存中的页面
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'//指定生成的页面的名称 也就是将页面复制一份放到内存中去
        }),
        new VueLoaderPlugin()
    ],
    module:{//这个节点用于配置所有第三方的加载器
        rules:[//所有第三方规则
            //正则匹配.css结尾的文件 然后使用加载器进行打包
            {test:/\.css$/,use:['style-loader','css-loader']},
            //正则匹配.less结尾的文件 然后进行打包
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //正则匹配scss文件 
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //匹配url的图片后缀 比如 .jpg .gif等
            {test:/\.(jpg|png|gif|jpeg)$/,use:'url-loader?limit=7632&name=[name].[ext]'},
            //匹配字体文件
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            //配置babel
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //处理.vue文件
            {test:/\.vue$/,use:'vue-loader'}
        ]

    }
    // ,
    // resolve:{
	// 	alias:{
	// 		"vue$":"vue/dist/vue.js"
	// 	}
	// }
}