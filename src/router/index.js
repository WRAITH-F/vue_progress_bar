import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history', //去掉链接上的#
  routes: [
    {
      path: '/',
      component: HelloWorld,
      redirect: {
        name: 'HelloWorld'
      }, //重定向
      children: [{ //首页
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
      }]
    }
  ]
})
