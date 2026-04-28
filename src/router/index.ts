import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Welcome from '@/views/Welcome.vue'
import Auth from '@/views/Auth.vue'
import Info from '@/views/Info.vue'
import Qrcode from '@/views/QrCode.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    
    },
     {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
    
    },

    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    
    },

    {
      path: '/info',
      name: 'info',
      component: Info,
    
    },

    {
      path: '/qrcode',
      name: 'QrCode',
      component: Qrcode,
    
    },
  ],
})

export default router
