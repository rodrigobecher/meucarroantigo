import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Carros from '../components/Carros.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/carros',
      name: 'carros',
      component: Carros
    },
    
  ]
})

export default router
