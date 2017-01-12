import Vue from 'vue'
import PickerComponent from './Picker.vue'

const PickerConstructor = Vue.extend(PickerComponent)

const init = () => {
  return new PickerConstructor({
    el: document.createElement('div')
  })
}

const Picker = (options = {}) => {
  const instance = init()
  instance.value = options.open || true
  instance.showItemCount = options.showItemCount || 5
  instance.slots = options.slots
  instance.transition = options.transition || 'slide-bottom'
  instance.maskOpacity = options.maskOpacity
  instance.maskColor = options.maskColor
  instance.isShowCancelButton = options.isShowCancelButton === undefined ? true : options.isShowCancelButton
  instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : (() => {})
  instance.onClickOutSide = options.onClickOutSide ? options.onClickOutSide.bind(null, instance) : (() => {})
  instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance, instance.datas) : (() => {instance.value = false})
  instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : (() => {instance.value = false})
  instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
  instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
  instance.onChange = options.onChange ? options.onChange.bind(null, instance) : (() => {})
  document.body.appendChild(instance.$el)
  return instance
}

Vue.$Picker = Vue.prototype.$Picker = Picker
export default Picker
