import {createRouter,createWebHistory} from 'vue-router'
import TheCatalog from '@/views/the-catalog.component.vue'
import TheProductDetail from '@/views/product-detail.component.vue'
import TheLogin from '@/views/the-login.component.vue'
import TheRegister from '@/views/the-register.component.vue'
import ResetPassword from '@/views/reset-password.component.vue'
import Parameters from '@/views/parameters.component.vue'
import Acquisition from '@/views/acquisition.component.vue'
const routes = [
  // Coloquen los paths de sus componentes aquí

  //Funciones Log-in
  { path: '', component: TheLogin},
  { path: '/register', component: TheRegister},
  { path: '/resetPassword', component: ResetPassword},

  { path: '/catalog', component: TheCatalog },
  { path: '/product_detail', component: TheProductDetail },
  { path: '/parameters', component: Parameters },
  { path: '/acquisition', component: Acquisition },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router