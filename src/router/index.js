import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import "@/assets/css/komue.css"
import "@/assets/iconfonts/iconfont.css"

Vue.use(Vuex)
Vue.use(Router)

/* 配置路由 */
import welcome from '@/pages/welcome'
import post from '@/pages/post'
import postDetail from '@/pages/postDetail'
import test from '@/pages/_test'
import notfound from '@/pages/404'

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: test
    },
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

