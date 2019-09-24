import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Vuex)
Vue.use(Router)

/* 配置路由 */
import welcome from '@/views/welcome'
import post from '@/views/post'
import postDetail from '@/views/postDetail'
import notfound from '@/views/404'

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/post/:id',
      name: 'postDetail',
      component: postDetail
    },
    {
      path: '*',
      name: 'notfound',
      component: notfound
    }
  ]
})

// 导航守卫
router.beforeEach((to, from, next) => {
  next();
});

export default router;
