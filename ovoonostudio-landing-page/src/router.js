import { createRouter, createWebHistory } from 'vue-router';
import store from './store';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/LoginView.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./views/DashboardView.vue'),
        meta: { requiresAuth: true }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.isAuthenticated) {
            next({
                name: 'Login',
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    if (typeof window.gtag !== 'function') {
      return;
    }
    window.gtag('config', 'G-KZHVCND8ZJ', {
      'page_path': to.path,
      'referrer': from.path
    });
});

export default router;