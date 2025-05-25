import { createRouter, createWebHistory } from 'vue-router'

// Importar seus componentes de páginas
import Home from './pages/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
