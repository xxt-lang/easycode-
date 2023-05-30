import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: () => import('../views/home/home.vue'),
      children:[
        // {
        //   path: '/user',
        //   name: '用户管理',
        //   component: () => import('../views/user/index.vue')
        // },
      ]
    },

  ]
})

export default router
