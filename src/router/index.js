import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import preview from "../views/preview.vue";
import EditorMap from "../views/coreComponents/EditorMap.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        keepAlive:true
      },
      component: Home,
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview,
    },
    {
      path:'/EditorMap',
      name:"EditorMap",
      component:EditorMap
    }

  ]
})

export default router
