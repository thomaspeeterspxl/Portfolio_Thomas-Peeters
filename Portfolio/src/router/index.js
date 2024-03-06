import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from "@/views/ProjectView.vue";
import CodeProjectView from "@/views/CodeProjectView.vue";
import WPL1View from "@/views/WPL1View.vue";
import WPL2View from "@/views/WPL2View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/Code',
      name: 'codeproject',
      component: CodeProjectView
    },
    {
      path: '/WPL1',
      name: 'wpl1',
      component: WPL1View
    },
    {
      path: '/WPL2',
      name: 'wpl2',
      component: WPL2View
    },
  ]
})

export default router
