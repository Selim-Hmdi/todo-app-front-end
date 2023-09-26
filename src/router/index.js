import { createRouter, createWebHistory } from 'vue-router'
import TodoAppView from '../views/TodoAppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: TodoAppView
    }
  ]
})

export default router
