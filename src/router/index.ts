import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'alg',
    //   component: () => import('@/views/Alg.vue'),
    // },
    {
      path: '/alg',
      name: 'alg',
      component: () => import('@/views/Alg.vue'),
    },
    {
      path: '/vue',
      name: 'vue',
      component: () => import('@/views/TestVue.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/HomeView.vue'),
    },
  ],
})

export default router
