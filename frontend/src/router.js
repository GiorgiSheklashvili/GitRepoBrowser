import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from '@/components/User'
import Service from '@/components/Service'
import Bootstrap from '@/components/Bootstrap'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: '/callservice',
            name: 'Service',
            component: Service
        },
        {
            path: '/bootstrap',
            name: 'Bootstrap',
            component: Bootstrap
        },
        {
            path: '/user',
            name: 'user',
            component: User
        }
    ]
});
