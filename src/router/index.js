import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Vuex);
Vue.use(Router);

/* 配置路由 */
let router = new Router({
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: resolve => require(['@/views/welcome'], resolve),
        },
        {
            path: '/post',
            name: 'post',
            component: resolve => require(['@/views/post'], resolve),
        },
        {
            path: '/post/:id',
            name: 'postDetail',
            component: resolve => require(['@/views/postDetail'], resolve),
        },
        {
            path: '*',
            name: 'notfound',
            component: resolve => require(['@/views/404'], resolve),
        }
    ]
});

// 导航守卫
router.beforeEach((to, from, next) => {
    next();
});

export default router;
