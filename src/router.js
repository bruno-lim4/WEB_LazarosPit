import { createRouter, createWebHistory } from 'vue-router'

// Importar seus componentes de páginas
import HomePage from '@/pages/HomePage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import AdminCustomerPage from '@/pages/AdminCustomerPage.vue'
import AdminManagerPage from '@/pages/AdminManagerPage.vue'
import AdminProductPage from '@/pages/AdminProductPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import AdminDashboard from '@/pages/AdminDashboard.vue'
import CartPage from '@/pages/CartPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: ProductPage,
  },
  {
    path: '/admin/customer',
    name: 'AdminCustomerPage',
    component: AdminCustomerPage,
  },
  {
    path: '/admin/product',
    name: 'AdminProductPage',
    component: AdminProductPage,
  },
  {
    path: '/admin/manager',
    name: 'AdminManagerPage',
    component: AdminManagerPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
