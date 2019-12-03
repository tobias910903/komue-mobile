/**
 * Date: 2019/12/3
 * Auth: LiHuYong
 * Desc: touch 封装
 */

import Vue from 'vue'
import TouchCls from './indexCls'

// 点击
Vue.directive('tap', {
    bind: function (el, binding) {
        const touch = new TouchCls(el, binding, 'tap');
        touch.initialize()
    }
});

// 长按
Vue.directive('longtap', {
    bind: function (el, binding) {
        const touch = new TouchCls(el, binding, 'longtap');
        touch.initialize()
    }
});

// 滑动
Vue.directive('swipe', {
    bind: function (el, binding) {
        const touch = new TouchCls(el, binding, 'swipe');
        touch.initialize()
    }
});

// 左滑
Vue.directive('swipeleft', {
    bind: function (el, binding) {
        const touch = new TouchCls(el, binding, 'swipeleft');
        touch.initialize()
    }
});

// 右滑
Vue.directive('swiperight', {
    bind: function (el, binding) {
        const touch = new TouchCls(el, binding, 'swiperight');
        touch.initialize()
    }
});

// 下滑
Vue.directive('swipedown', {
    bind: function (el, binding) {
        const touch = new TouchCls(el, binding, 'swipedown');
        touch.initialize()
    }
});

// 上滑
Vue.directive('swipeup', {
    bind: function (el, binding) {
        const touch = new TouchCls(el, binding, 'swipeup');
        touch.initialize()
    }
});
