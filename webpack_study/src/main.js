/**
 * 项目的入口文件 配置全局
 */
// 1.导入jquery  
import $ from 'jquery'
//导入css文件
import './css/index.css'
//导入less文件
import './css/index.less'
//导入scss
import './css/index.scss'
//导入bootstrap.css
import 'bootstrap/dist/css/bootstrap.css'
$(function(){
    $('li:odd').css('backgroundColor','orange')
    $('li:even').css('backgroundColor',function(){
        return 'yellow' 
    })
})

/**
 * 综上所述  
 * webpack可以处理js文件的互相依赖关系
 * 可以将某些不支持的js 打包成一个文件 也就是处理兼容问题
 * 把高级的浏览器不能识别的语法 转成 低级的能识别的语法
 */

class Person{
    static info = {name:'zs',age:'20'}
}

console.log(Person.info)