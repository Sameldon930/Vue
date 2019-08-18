/**
 * 项目的入口文件 配置全局
 */
// 1.导入jquery
import $ from 'jquery'
$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})

/**
 * 综上所述  
 * webpack可以处理js文件的互相依赖关系
 * 可以将某些不支持的js 打包成一个文件 也就是处理兼容问题
 * 把高级的浏览器不能识别的语法 转成 低级的能识别的语法
 */