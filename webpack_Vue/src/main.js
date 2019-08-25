/**
 * 
 * 如何在webpack中 使用vue
 */


 /**
  * 在普通网页中使用vue 如下
  * 
  * 1.使用script src 引入vue.js
  * 2.创建 id="app" 的div盒子
  * 3.创建vue 实例   var Vm = new Vue({})
  */

//导入vue
import Vue from 'vue'

// //定义一个组件对象
// var login =  {
//     template:'<h1>login组件，使用网页中的形式创建出来</h1>'
// }

//导入login.vue组件
import login from './login.vue'

//导入vue-router
import VueRouter from 'vue-router'


import router from './router.js'


//手动安装
Vue.use(VueRouter)

var vm = new Vue({
    el:'#app',
    data:{
        msg:123123
    },
    // ,
    // //注册上面的login
    // components:{
    //     login
    // }
    
    render:createElements =>{
        return createElements(login)
    },
    router
})