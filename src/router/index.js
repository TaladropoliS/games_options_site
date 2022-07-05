import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: () => import(/* webpackChunkName: "opiniones" */ '../views/OpinionesVue.vue')
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: () => import(/* webpackChunkName: "administracion" */ '../views/AdministracionVue.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../components/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
