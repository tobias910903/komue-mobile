import Vue from 'vue'
import Alert from '@/components/messagebox/alert'
import Confirm from '@/components/messagebox/confirm'
import Toast from '@/components/messagebox/toast'
import Loading from '@/components/messagebox/loading'

import wcThen from '@/components/messagebox/directives/wc-then'
import wcCatch from '@/components/messagebox/directives/wc-catch'
import wcMask from '@/components/messagebox/directives/wc-mask'
import wcPopup from '@/components/messagebox/directives/wc-popup'

import '@/components/messagebox/transition.css'

export default {
	install (Vue) {
		Vue.directive('wcThen', wcThen);
		Vue.directive('wcCatch', wcCatch);
		Vue.directive('wcMask', wcMask);
		Vue.directive('wcPopup', wcPopup);
	}
}

export{
	Alert,
	Confirm,
	Toast,
  	Loading
}