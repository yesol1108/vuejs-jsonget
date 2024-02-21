import { createRouter, createWebHistory } from 'vue-router'
import DataList from '../views/DataList.vue'
import About from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'DataList',
    component: DataList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router