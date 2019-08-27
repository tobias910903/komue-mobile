import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Vuex)
Vue.use(Router)

/* 配置路由 */
import welcome from '@/pages/welcome'
import post from '@/pages/post'
import postDetail from '@/pages/postDetail'
import notfound from '@/pages/404'

export default new Router({
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

