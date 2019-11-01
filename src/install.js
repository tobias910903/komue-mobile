import Vue from 'vue'
import FastClick from 'fastclick'
import _ from 'lodash'

// style
import "@/assets/less/komue.less"
import "@/assets/iconfonts/iconfont.css"

// axios
import ajax from '@/api'

// utils
import {arrayFun} from '@/utils/array'
import {timeFun} from '@/utils/time'
import {validatorFun} from '@/utils/validator'

// components
import KomButton from '@/components/kom-button'

// services


const is_ios = () =>{
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export default function install(Vue) {

    // axios
    Vue.prototype.$ajax = ajax;

    // utils
    Vue.prototype.$array = arrayFun;
    Vue.prototype.$time = timeFun;
    Vue.prototype.$validator = validatorFun;

    // components
    Vue.component('KomButton', KomButton);

    // services


    /* 对于ios 10，即使网站在视窗中设置了user scalable=no，用户现在也可以收缩缩放 */
    document.documentElement.addEventListener('touchstart', (e) => {
        if(e.touches.length > 1){
            e.preventDefault();
        }
    }, false);

    /* iOS Safari-禁用双击缩放 */
    if (is_ios()) {
        let lastTouchEnd = 0;
        document.documentElement.addEventListener('touchend', (e) => {
            let now = (new Date()).getTime();
            if(now - lastTouchEnd < 300){
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }

    FastClick.attach(document.body);
}
