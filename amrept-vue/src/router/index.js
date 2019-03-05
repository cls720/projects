import Vue from 'vue' // 引入Vue
import Router from 'vue-router' // 引用Vue-router
import HelloWorld from '@/components/HelloWorld' // 引入componenets下HelloWorld.vue组件
import LayAsideMain from '@/components/layout/LayAsideMain'

Vue.use(Router) // vue全局使用router

export default new Router({
  routes: [                       // 配置路由这里是个数组
    {                             // 每一个链接是一个对象      
      path: '/HelloWorld',                  // 链接路径
      name: 'HelloWorld',         // 路由名称
      component: HelloWorld       // 对应的Vue组件
    },{
      path: '/LayAsideMain',
      name: 'LayAsideMain',
      component: LayAsideMain
    }
  ]
})
