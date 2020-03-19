import Vue from 'vue'
import VueRouter from 'vue-router'
import MapView from '../views/MapView.vue'
import Forces from '../views/Forces'
import Report from '../views/Report'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Map', component: MapView},
  {path: '/forces', name: 'Forces', component: Forces},
  {path: '/report', name: 'Report', component: Report}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
