import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
        {
            path: '/lesson-text',
            name: 'LessonText',
            component: () => import('../views/LessonTextInterpolation.vue')
        },

        {
            path: '/exos-text',
            name: 'Exercices',
            component: () => import('../views/Exo.composition.vue')
        },
    ]
});


export default router;