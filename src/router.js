import { createRouter, createWebHistory } from 'vue-router'

// Importar seus componentes de páginas
import HomePage from '@/pages/HomePage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: ProductPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
