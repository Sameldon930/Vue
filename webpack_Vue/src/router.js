//导入vue-router
import VueRouter from 'vue-router'
//导入Account组件
import account from './main/Account.vue'
//导入GoodList组件
import goodlist from './main/GoodList.vue'


//导入两个子组件
import login1 from './subcom/login.vue'
import register from './subcom/register.vue'

//创建路由对象
var router = new VueRouter({
    routes:[
      {path:'/account',component:account,children:[
        {path:'login',component:login1},
        {path:'register',component:register}
      ]},
      {path:'/goodlist',component:goodlist}
    ]
  })

//导出这个文件

export default router