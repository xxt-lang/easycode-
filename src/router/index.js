import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: Home,
    },

  ]
})

export default router
