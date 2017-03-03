import Vue from 'vue'
import ActionSheetComponent from './ActionSheet.vue'

const ActionSheetConstructor = Vue.extend(ActionSheetComponent)

const init = (propsData) => {
  return new ActionSheetConstructor({
    propsData
  }).$mount(document.createElement('div'))
}
const ActionSheet = (options = {}) => {
  const instance = init({
    title: options.title,
    actions: options.actions,
    theme: options.theme ? options.theme : {type: 'left', isShowRadio: false, isShowCheckList: false},
    isShowConfirmButton: options.isShowConfirmButton === undefined ? false : options.isShowConfirmButton,
    //isShowCancelButton: options.isShowCancelButton === undefined ? true : options.isShowCancelButton,
    confirmText: options.confirmText,
    cancelText: options.cancelText
  })
  instance.value = options.open || true
  instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : (() => {})
  instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance, instance.data || instance.datas) : (() => {instance.visible = false;instance.value = false})
  instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : (() => {instance.value = false})
  instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
  instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
  document.body.appendChild(instance.$el)
  return instance
}

Vue.$ActionSheet = Vue.prototype.$ActionSheet = ActionSheet
export default ActionSheet
