import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import preview from "../views/preview.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: Home,
    },
    {
      path: '/preview',
      name: '预览',
      component: preview,
    },

  ]
})

export default router
