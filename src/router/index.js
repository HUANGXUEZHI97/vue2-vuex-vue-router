import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home')
    },
    {
      path: '/item',
      name: 'item',
      component: () => import('@/components/item')
    },
    {
      path: '/score',
      name: 'score',
      component: () => import('@/components/score')
    }
  ]
})
