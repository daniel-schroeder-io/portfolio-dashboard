import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Architecture from '@/views/Architecture.vue'
import Data from '@/views/Data.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/architecture',
      name: 'architecture',
      component: Architecture
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    }
  ]
})
