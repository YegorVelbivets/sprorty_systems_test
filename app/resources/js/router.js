import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store.js';

import About from "./components/About";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";


Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/protected',
            name: 'protected',
            component: Protected,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/autht/login',
            name: 'auth.login',
            component: Login
        },
        {
            path: '/autht/register',
            name: 'auth.register',
            component: Register
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next({ name: 'auth.login' });
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router;
