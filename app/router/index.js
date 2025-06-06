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
        path: '/form-trip',
        name: 'Form trip',
        component: () => import('../src/views/trip/FormTrip.vue')
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/hebergement',
        name: 'Hebergement',
        component: () => import('../src/views/HebergementComponent.vue')
    },
    {
        path: '/activite',
        name: 'Activite',
        component: () => import('../src/views/ActiviteComponent.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
