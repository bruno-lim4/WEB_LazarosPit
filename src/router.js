import { createRouter, createWebHistory } from 'vue-router'

// Importar seus componentes de páginas
import HomePage from '@/pages/HomePage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import AdminDashboard from '@/pages/AdminDashboard.vue'

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
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
