import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: () => import('./views/HomeView.vue') 
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: () => import('./views/LoginView.vue') 
  },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: () => import('./views/DashboardView.vue') 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;