import Vue from 'vue'
import Alert from '@/components/kom-messagebox/alert'
import Confirm from '@/components/kom-messagebox/confirm'
import Toast from '@/components/kom-messagebox/toast'
import Loading from '@/components/kom-messagebox/loading'

import wcThen from '@/components/kom-messagebox/directives/wc-then'
import wcCatch from '@/components/kom-messagebox/directives/wc-catch'
import wcMask from '@/components/kom-messagebox/directives/wc-mask'
import wcPopup from '@/components/kom-messagebox/directives/wc-popup'

import '@/components/kom-messagebox/transition.css'

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
