import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'

// 组件及依赖
import install from './install'
Vue.use(install);

// 阻止启动生产消息
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
