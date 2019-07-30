import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'

import axios from 'axios'
import {post, get} from '@/api'
import {apiurl} from '@/api/url'

//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$api = apiurl;

// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
