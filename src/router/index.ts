import Layouts from '@/views/layouts/main.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/Auth/Login.vue')
  },
  {
    path: '/',
    redirect: '/admin/home/index'
  },
  {
    path: '/admin',
    redirect: '/admin/home/index'
  },
  {
    path: '/admin/home',
    name: 'Admin',
    component: Layouts,
    redirect: '/admin/home/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Home/Index.vue'),
        meta: { title: '首页', icon: 'Home', requireAuth: false }
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
