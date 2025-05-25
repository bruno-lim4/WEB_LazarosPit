import { createRouter, createWebHistory } from 'vue-router'

// Importar seus componentes de páginas
import HomePage from '@/pages/HomePage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import CartPage from '@/pages/CartPage.vue'
import CartPage from '@/pages/CartPage.vue'

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
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  }
  
],

const router = createRouter({
  history: createWebHistory(),
  routes,
}),

export default router
