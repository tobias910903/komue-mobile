import Vue from 'vue'

// Plugin
import _ from 'lodash'
import fastClick from 'fastclick'

// style
import "@/assets/iconfonts/iconfont.css"
import "@/assets/styles/base.less"

// axios
import ajax from '@/api'

// utils
import arrayFun from '@/utils/array'
import timeFun from '@/utils/time'
import methodFun from '@/utils/method'
import {regexp, validatorFun} from '@/utils/validator'

// directive
import '@/directive/touch/index.js' // 触摸手势

// components
import {Accordion, AccordionItem} from '@/components/accordion';
import {ActionSheet} from '@/components/actionsheet';
import {BackTop} from '@/components/backtop';
import {Badge} from '@/components/badge';
import {Button, ButtonGroup} from '@/components/button';
import {CellItem, CellGroup} from '@/components/cell';
import {CheckBox, CheckBoxGroup} from '@/components/checkbox';
import {CheckList, CheckListItem} from '@/components/checklist';
import {CountDown} from '@/components/countdown';
import {CountUp} from '@/components/countup';
import {DateTime} from '@/components/datetime';
import {FlexBox, FlexBoxItem} from '@/components/flexbox';
import {GridsItem, GridsGroup} from '@/components/grids';
import {Icons} from '@/components/icons';
import {InfiniteScroll} from '@/components/infinitescroll';
import {Input} from '@/components/input';
import {KeyBoard} from '@/components/keyboard';
import {Layout} from '@/components/layout';
import {LightBox, LightBoxImg, LightBoxTxt} from '@/components/lightbox';
import {ListTheme, ListItem, ListOther} from '@/components/list';
import {NavBar, NavBarBackIcon, NavBarNextIcon} from '@/components/navbar';
import {Popup} from '@/components/popup';
import {Preview, PreviewHeader, PreviewItem} from '@/components/preview';
import {ProgressBar} from '@/components/progressbar';
import {PullRefresh} from '@/components/pullrefresh';
import {Radio, RadioGroup} from '@/components/radio';
import {Rate} from '@/components/rate';
import {RollNotice, RollNoticeItem} from '@/components/rollnotice';
import {ScrollNav, ScrollNavPanel} from '@/components/scrollnav';
import {ScrollTab, ScrollTabPanel} from '@/components/scrolltab';
import {Search} from '@/components/search';
import {SendCode} from '@/components/sendcode';
import {Slider, SliderItem} from '@/components/slider';
import {Counter} from '@/components/counter';
import {Step, StepItem} from '@/components/step';
import {Switch} from '@/components/switch';
import {Tab, TabPanel} from '@/components/tab';
import {TabBar, TabBarItem, TabBarOther} from '@/components/tabbar';
import {TextArea} from '@/components/textarea';
import {TimeLine, TimeLineItem} from '@/components/timeline';

import KomDiveditable from "@/components/kom-diveditable"
import komPicker from '@/components/kom-picker'
import KomScroll from '@/components/kom-scroll'
import KomScroller from '@/components/kom-scroller'
import KomSpinner from '@/components/kom-spinner'

import {Alert, Confirm, Toast, Loading} from '@/components/kom-messagebox'
import wxAlert from '@/components/kom-messagebox/wechat/Alert' // 自定义样式的 messagebox
import wxConfirm from '@/components/kom-messagebox/wechat/Confirm' // 自定义样式的 messagebox
import komMessagebox from '@/components/kom-messagebox'

// 干掉的组件 CitySelect、Dialog
// 改名的组件 spinner => counter

const is_ios = () =>{
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export default function install(Vue) {

    // components
    Vue.component('KomAccordion', Accordion);
    Vue.component('KomAccordionItem', AccordionItem);
    Vue.component('KomActionsheet', ActionSheet);
    Vue.component('KomBacktop', BackTop);
    Vue.component('KomBadge', Badge);
    Vue.component('KomButton', Button);
    Vue.component('KomButtonGroup', ButtonGroup);
    Vue.component('KomCellItem', CellItem);
    Vue.component('KomCellGroup', CellGroup);
    Vue.component('KomCheckbox', CheckBox);
    Vue.component('KomCheckboxGroup', CheckBoxGroup);
    Vue.component('KomChecklist', CheckList);
    Vue.component('KomChecklistItem', CheckListItem);
    Vue.component('KomCountdown', CountDown);
    Vue.component('KomCountup', CountUp);
    Vue.component('KomDatetime', DateTime);
    Vue.component('KomFlexbox', FlexBox);
    Vue.component('KomFlexboxItem', FlexBoxItem);
    Vue.component('KomGridsItem', GridsItem);
    Vue.component('KomGridsGroup', GridsGroup);
    Vue.component('KomIcon', Icons);
    Vue.component('KomInfinitescroll', InfiniteScroll);
    Vue.component('KomInput', Input);
    Vue.component('KomKeyboard', KeyBoard);
    Vue.component('KomLayout', Layout);
    Vue.component('KomLightbox', LightBox);
    Vue.component('KomLightboxImg', LightBoxImg);
    Vue.component('KomLightboxTxt', LightBoxTxt);
    Vue.component('KomList', ListTheme);
    Vue.component('KomListItem', ListItem);
    Vue.component('KomListOther', ListOther);
    Vue.component('KomNavbar', NavBar);
    Vue.component('KomNavbarBackIcon', NavBarBackIcon);
    Vue.component('KomNavbarNextIcon', NavBarNextIcon);
    Vue.component('KomPopup', Popup);
    Vue.component('KomPreview', Preview);
    Vue.component('KomPreviewHeader', PreviewHeader);
    Vue.component('KomPreviewItem', PreviewItem);
    Vue.component('KomProgressbar', ProgressBar);
    Vue.component('KomPullrefresh', PullRefresh);
    Vue.component('KomRadio', Radio);
    Vue.component('KomRadioGroup', RadioGroup);
    Vue.component('KomRate', Rate);
    Vue.component('KomRollnotice', RollNotice);
    Vue.component('KomRollnoticeItem', RollNoticeItem);
    Vue.component('KomScrollnav', ScrollNav);
    Vue.component('KomScrollnavPanel', ScrollNavPanel);
    Vue.component('KomScrolltab', ScrollTab);
    Vue.component('KomScrolltabPanel', ScrollTabPanel);
    Vue.component('KomSearch', Search);
    Vue.component('KomSendcode', SendCode);
    Vue.component('KomSlider', Slider);
    Vue.component('KomSliderItem', SliderItem);
    Vue.component('KomCounter', Counter);
    Vue.component('KomStep', Step);
    Vue.component('KomStepItem', StepItem);
    Vue.component('KomSwitch', Switch);
    Vue.component('KomTab', Tab);
    Vue.component('KomTabPanel', TabPanel);
    Vue.component('KomTabbar', TabBar);
    Vue.component('KomTabbarItem', TabBarItem);
    Vue.component('KomTabbarOther', TabBarOther);
    Vue.component('KomTextarea', TextArea);
    Vue.component('KomTimeline', TimeLine);
    Vue.component('KomTimelineItem', TimeLineItem);

    Vue.component('KomDiveditable', KomDiveditable);
    Vue.component('KomScroll', KomScroll);
    Vue.component('KomScroller', KomScroller);
    Vue.component('KomSpinner', KomSpinner);

    Vue.use(Alert);
    Vue.use(Confirm);
    Vue.use(Toast);
    Vue.use(Loading);
    Vue.use(komMessagebox);
    Vue.use(komPicker);

    // unitls
    Vue.prototype.$ajax = ajax;
    Vue.prototype.$array = arrayFun;
    Vue.prototype.$time = timeFun;
    Vue.prototype.$method = methodFun;
    Vue.prototype.$regexp = regexp;
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

    /* 解决ANDROID设备上的延时300ms */
    if(!is_ios()) {
        fastClick.attach(document.body);
    }
}
