import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'

import "@/assets/less/komue.less"
import "@/assets/iconfonts/iconfont.css"

// axios
import {post, get} from '@/api'
import {apiurl} from '@/api/url'
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$api = apiurl;

// utils
import {arrayFun} from '@/utils/array'
import {timeFun} from '@/utils/time'
import {validatorFun} from '@/utils/validator'
Vue.prototype.$array = arrayFun
Vue.prototype.$time = timeFun
Vue.prototype.$validator = validatorFun


// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
