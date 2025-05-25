import { createRouter, createWebHistory } from 'vue-router'

// Importar seus componentes de páginas
import HomePage from '@/pages/HomePage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: () => import('@/pages/ProductPage.vue'),
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
