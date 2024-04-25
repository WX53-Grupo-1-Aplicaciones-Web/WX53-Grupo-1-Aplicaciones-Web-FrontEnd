import {createRouter,createWebHistory} from 'vue-router'
import TheCatalog from '@/views/the-catalog.component.vue'
import TheProductDetail from '@/views/product-detail.component.vue'

const routes = [
  // Coloquen los paths de sus componentes aquí
  { path: '/catalog', component: TheCatalog },
  { path: '/product_detail', component: TheProductDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router