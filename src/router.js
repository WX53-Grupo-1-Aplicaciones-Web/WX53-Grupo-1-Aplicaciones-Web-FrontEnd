import {createRouter,createWebHistory} from 'vue-router'
import TheCatalog from '@/views/the-catalog.component.vue'
import TheProductDetail from '@/views/product-detail.component.vue'
import TheLogin from '@/views/the-login.component.vue'
import TheRegister from '@/views/the-register.component.vue'
import ResetPassword from '@/views/reset-password.component.vue'
import Parameters from '@/views/parameters.component.vue'
import Acquisition from '@/views/acquisition.component.vue'
import BuyProducts from './views/buy-products.component.vue'
import PublicationProduct from './views/publication-product.vue'
import TheProfileInformation from '@/views/profile-information.component.vue'
import TheProfileEdit from '@/views/profile-edit.component.vue'

const routes = [
  // Coloquen los paths de sus componentes aquí

  //Funciones Log-in
  { path: '', component: TheLogin},
  { path: '/register', component: TheRegister},
  { path: '/resetPassword', component: ResetPassword},

  { path: '/catalog', component: TheCatalog },
  { path: '/parameters', component: Parameters },
  { path: '/acquisition/:id',name: 'Acquisition', component: Acquisition },
  { path: '/publication', component: PublicationProduct },
  { path: '/profile_information', component: TheProfileInformation },
  { path: '/profile_edit', component: TheProfileEdit },
  { path: '/buyProducts/:id', component: BuyProducts },
  { path: '/product_detail/:id', component: TheProductDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
