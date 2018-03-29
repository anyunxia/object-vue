import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/Index'
import VueRouter from 'vue-router'
import Detail from '@/page/detail/Detail'

Vue.use(Router)
Vue.use(VueRouter)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
