import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/Main.vue'
import Admin from '../views/Admin.vue'
import About from '../views/About.vue'
const routes = [
    {
        path: '/', name: 'Main', component: Main
    },
    {
        path: '/main', component: Main
    },
    {
        path: '/about', name: 'About', component: About
    },
    {
        path: '/Admin',  name: 'Admin', component: Admin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router