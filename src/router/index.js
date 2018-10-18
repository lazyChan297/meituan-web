import Vue from 'vue'
import Router from 'vue-router'
import index from '@/modules/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
