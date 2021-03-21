import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // redirect: '/tabs/home'
    redirect: !localStorage.tutorial ? '/tutorial' : '/tabs/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/tabs/Home.vue')
      }
    ]
  },
  {
    name: 'tutorial',
    path: '/tutorial',
    component: () => import('@/views/Tutorial.vue')

  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
