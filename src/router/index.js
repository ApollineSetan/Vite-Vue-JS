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
            path: '/lessonone',
            name: 'LessonTextInterpolation',
            component: () => import('../exos/LessonTextInterpolation.vue')
        },
        {
            path: '/lessontwo',
            name: 'methodslecon',
            component: () => import('../exos/MethodsLecon.vue')
        },
        {
            path: '/lessonthree',
            name: 'bindinglecon',
            component: () => import('../exos/BindingLecon.vue')
        },
        {
            path: '/exoone',
            name: 'Exocomposition',
            component: () => import('../exos/ExoComposition.vue')
        },

        {
            path: '/exotwo',
            name: 'methodesexo',
            component: () => import('../exos/MethodesExo.vue')
        },
        {
            path: '/exothree',
            name: 'tpdatabinding',
            component: () => import('../exos/TPDataBinding.vue')
        },
    ]
});


export default router;