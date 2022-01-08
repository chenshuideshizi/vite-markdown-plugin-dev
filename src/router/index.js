import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        alias: '/home',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/about',
        component: () => import('@/views/about/index.vue')
    }
]

const router = createRouter({
    history:  createWebHistory(),
    routes
})

export default router