import {createRouter,createWebHistory} from 'vue-router'
import TheCatalog from '@/views/the-catalog.component.vue'

const routes = [
  // Coloquen los paths de sus componentes aquí
  { path: '/catalog', component: TheCatalog }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router