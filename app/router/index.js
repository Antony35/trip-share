import { createRouter, createWebHistory } from 'vue-router';

// Définir les routes de l'application
const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../src/views/login/LoginView.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../src/views/register/RegisterView.vue')
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/hebergement',
        name: 'Hebergement',
        component: () => import('../src/views/HebergementComponent.vue')
    },
    {
        path: '/activity',
        name: 'activity',
        component: () => import('@/views/ActiviteView.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
