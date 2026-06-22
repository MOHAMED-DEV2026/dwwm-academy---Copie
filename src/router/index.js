import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CatalogueView from '../views/CatalogueView.vue'
import FormationDetailView from '../views/FormationDetailView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/catalogue',
    component: CatalogueView
  },
  {
    path: '/formation/:id',
    component: FormationDetailView
  },
  {
    path: '/favoris',
    component: FavoritesView
  },
  {
    path: '/contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router