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
            path: '/lessonfour',
            name: 'VModelLecon',
            component: () => import('../exos/VModelLecon.vue')
        },
        {
            path: '/lessonfive',
            name: 'watcherslecon',
            component: () => import('../exos/WatchersLecon.vue')
        },
        {
            path: '/lessonsix',
            name: 'lessonlistrendering',
            component: () => import('../exos/LessonListRendering.vue')
        },
        {
            path: '/lessonseven',
            name: 'onefriendparentlesson',
            component: () => import('../exos/OneFriendParentLesson.vue')
        },

// Exercices

        {
            path: '/exoone',
            name: 'Exocomposition',
            component: () => import('../exos/ExoComposition.vue'),
            props: true
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
        {
            path: '/exofour',
            name: 'domeventsexo',
            component: () => import('../exos/DOMEventsExo.vue')
        },
        {
            path: '/exofive',
            name: 'keyupeventexo',
            component: () => import('../exos/keyupeventexo.vue')
        },
        {
            path: '/exosix',
            name: 'computedexo',
            component: () => import('../exos/ComputedExo.vue')
        },
        {
            path: '/exoseven',
            name: 'watchersexo',
            component: () => import('../exos/WatchersExo.vue')
        },
        {
            path: '/exoeight',
            name: 'dynamicstylingexo',
            component: () => import('../exos/DynamicStylingExo.vue')
        },
        {
            path: '/exonine',
            name: 'dynamicstylingexo2',
            component: () => import('../exos/DynamixStylingExo2.vue')
        },
        {
            path: '/exoten',
            name: 'dynamikstylingexo3',
            component: () => import('../exos/DynamikStylingExo3.vue')
        },
        {
            path: '/exoeleven',
            name: 'conditionalrendering',
            component: () => import('../exos/ConditionalRendering.vue')
        },
        {
            path: '/exotwelve',
            name: 'exercicelistrendering',
            component: () => import('../exos/ExerciceListRendering.vue')
        },
        {
            path: '/exothirteen',
            name: 'exercicelistrendering2',
            component: () => import('../exos/ExerciceListRendering2.vue')
        },
        {
            path: '/exofourteen',
            name: 'onefriendparent',
            component: () => import('../exos/OneFriendParent.vue')
        },
        {
            path: '/exofifteen',
            name: 'composantdynamique',
            component: () => import('../exos/ComposantDynamique.vue')
        },
        {
            path: '/exosixteen',
            name: 'fetchAPI',
            component: () => import('../exos/FetchAPI.vue')
        },


// Exercices Router

        {
            path: '/lesson-router',
            name: 'lessonrouter',
            component: () => import('../components/Shared/LessonRouterView.vue')
        },
        {
            path: '/details/:id',
            name: 'detailspage',
            component: () => import('../components/Shared/DetailsPage.vue'),
            props: true
        },



    ]
});


export default router;