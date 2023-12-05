import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/allstarships',
      name: 'alltarships',
      component: () => import('../views/AllStarshipsView.vue')
    },
    {
      path: '/stops',
      name: 'stops',
      component: () => import('../views/CalculateStopsView.vue')
    },
    {
      path: '/liststops',
      name: 'liststops',
      component: () => import('../views/ListStopCalculationsView.vue')
    },
  ]
})

export default router
