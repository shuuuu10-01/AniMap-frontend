import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from '../views/TopPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/nearanimal',
    name: 'NearAnimal',
    component: () => import('../views/NearAnimal.vue')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import('../views/Find.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('../views/Weather.vue')
  },
  {
    path: '/arcamera',
    name: 'ARCamera',
    component: () => import('../views/ARCamera.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
