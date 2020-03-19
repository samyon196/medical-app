import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '../views/Map.vue'
import Forces from '../views/Forces'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Map', component: Map},
  {path: '/forces', name: 'Forces', component: Forces}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
