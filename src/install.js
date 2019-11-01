import Vue from 'vue'

// Plugin
import _ from 'lodash'

// style
import "@/assets/less/komue.less"
import "@/assets/iconfonts/iconfont.css"

// axios
import ajax from '@/api'

// utils
import arrayFun from '@/utils/array'
import timeFun from '@/utils/time'
import validatorFun from '@/utils/validator'

// components
import KomButton from '@/components/kom-button'
import KomDiveditable from "@/components/kom-diveditable"
import KomDrawer from '@/components/kom-drawer'
import KomModal from '@/components/kom-modal'
import komPicker from '@/components/kom-picker'
import KomPopover from '@/components/kom-popover'
import KomRowCell from '@/components/kom-row-cell'
import KomScroll from '@/components/kom-scroll'
import KomScroller from '@/components/kom-scroller'
import KomSlider from '@/components/kom-slider'
import KomTitle from '@/components/kom-title'
import KomToggleSwitch from '@/components/kom-toggle-switch'

import {Alert, Confirm, Toast, Loading} from '@/components/kom-messagebox'
import wxAlert from '@/components/kom-messagebox/wechat/Alert' // 自定义样式的 messagebox
import wxConfirm from '@/components/kom-messagebox/wechat/Confirm' // 自定义样式的 messagebox
import komMessagebox from '@/components/kom-messagebox'


const is_ios = () =>{
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export default function install(Vue) {

    // components
    Vue.component('KomButton', KomButton);
    Vue.component('KomDiveditable', KomDiveditable);
    Vue.component('KomDrawer', KomDrawer);
    Vue.component('KomModal', KomModal);
    Vue.component('KomPopover', KomPopover);
    Vue.component('KomRowCell', KomRowCell);
    Vue.component('KomScroll', KomScroll);
    Vue.component('KomScroller', KomScroller);
    Vue.component('KomSlider', KomSlider);
    Vue.component('KomTitle', KomTitle);
    Vue.component('KomToggleSwitch', KomToggleSwitch);

    Vue.use(Alert);
    Vue.use(Confirm);
    Vue.use(Toast);
    Vue.use(Loading);
    Vue.use(komMessagebox);
    Vue.use(komPicker);

    Vue.prototype.$ajax = ajax;
    Vue.prototype.$array = arrayFun;
    Vue.prototype.$time = timeFun;
    Vue.prototype.$validator = validatorFun;

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
}
