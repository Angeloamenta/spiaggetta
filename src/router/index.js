import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PranzoView from '../views/PranzoView.vue'
import CenaView from '../views/CenaView.vue'
import DrinkView from '../views/DrinkView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/pranzo',
    name: 'Pranzo',
    component: PranzoView
  },
  {
    path: '/cena',
    name: 'Cena',
    component: CenaView
  },
  {
    path: '/drink',
    name: 'Drink',
    component: DrinkView
  },
]

const router = new VueRouter({
  routes
})

export default router
