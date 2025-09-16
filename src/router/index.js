import { createRouter, createWebHashHistory } from 'vue-router'
import PracticeTaoismPage from '../views/PracticeTaoismPage.vue'

const routes = [
  {
    path: '/practice-taoism-page',
    name: 'PracticeTaoism',
    component: PracticeTaoismPage, // 普通加载
    props: true,
    meta: { // 路由元信息
      requiresAuth: true // 修正拼写错误：requlesAuth → requiresAuth
    }
  },
  {
    path: '/armor-page',
    name: 'ArmorPage',
    component: () => import('../views/ArmorPage.vue'), // 动态加载（懒加载）
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/travelling-bag-page',
    name: 'TravellingBagPage',
    component: () => import('../views/TravellingBagPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/travel-notes-page',
    name: 'TravelNotesPage',
    component: () => import('../views/TravelNotesPage.vue'),
    meta: {
      requiresAuth: true
    },
    children: [] // 子路由（空数组需保留逗号）
  },
  {
    path: '/settings-page',
    name: 'SettingsPage',
    component: () => import('../views/SettingsPage.vue'),
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes // 使用 routes 定义
});

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  console.log("全局前置路由守卫");
  console.log("from:", from);
  console.log("to:", to);
  next(); // 修正拼写错误：nextO → next()
});

// 全局后置路由守卫
router.afterEach((to, from) => {
  console.log("全局后置路由守卫");
  console.log("from:", from);
  console.log("to:", to);
});

export default router;

