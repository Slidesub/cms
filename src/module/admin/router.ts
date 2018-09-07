import Vue from 'vue'
import Router from 'vue-router'
import Page from './views/page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: '/admin',
  routes: [
    {
      path: '/',
      name: 'page',
      component: Page,
      children: [
        {
          path: '/',
          name: 'dash',
         component: () => import('./views/Dashboard.vue')
        }
      ]
    }
  ]
})
