import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import DashboardView from './views/DashboardView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: DashboardView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;