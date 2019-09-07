import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            name: 'home',
            component: require('./views/Home.vue').default
        },
        {
            path: '/blog',
            name: 'blog',
            component: require('./views/Blog.vue').default
        },
        {
            path: '/:slug',
            name: 'post',
            component: require('./views/Post.vue').default,
            props: true
        },
        {
            path: '/profile/user/:username',
            name: 'profile',
            component: require('./views/profile.vue').default,
            props: true
        },
        {
            path: '*',
            component: require('./views/404.vue').default
        }
    ],
    mode: 'history'
})