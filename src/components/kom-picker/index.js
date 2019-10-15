import picker from './index.vue'
const komPicker = {
  install (Vue) {
    Vue.component(picker.name, picker)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(komPicker)
}
export default komPicker
