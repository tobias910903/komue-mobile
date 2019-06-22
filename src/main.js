import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'

// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
