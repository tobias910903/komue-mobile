import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'

import axios from 'axios'
import {post, get} from '@/api'

//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;

// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
