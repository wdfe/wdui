import Vue from 'vue'
import MessageBoxComponent from './MessageBox.vue'

const MessageBoxConstructor = Vue.extend(MessageBoxComponent)

const init = (propsData) => {
  return new MessageBoxConstructor({
    propsData
  }).$mount(document.createElement('div'))
}

const MessageBox = {
  alert(options = {}) {
    const instance = init({
      title: options.title,
      text: options.text,
      type: 'alert',
      isShowCancelButton: options.isShowCancelButton,
      confirmText: options.confirmText,
      maskColor: options.maskColor,
      maskOpacity: options.maskOpacity,
      transition: options.transition
    })
    instance.open = options.open || true
    instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : (() => {})
    instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance) : (() => {instance.open = false})
    instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : (() => {instance.open = false})
    instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
    instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
    document.body.appendChild(instance.$el)
    return instance
  },
  confirm(options = {}) {
    const instance = init({
      title: options.title,
      text: options.text,
      type: 'confirm',
      isShowCancelButton: options.isShowCancelButton === undefined ? true : options.isShowCancelButton,
      isColumnButton: options.isColumnButton,
      confirmText: options.confirmText,
      cancelText: options.cancelText,
      maskColor: options.maskColor,
      maskOpacity: options.maskOpacity,
      transition: options.transition
    })
    instance.open = options.open || true
    instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : (() => {})
    instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance) : (() => {instance.open = false})
    instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : (() => {instance.open = false})
    instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
    instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
    document.body.appendChild(instance.$el)
    return instance
  },
  prompt(options = {}) {
    const instance = init({
      title: options.title,
      text: options.text,
      type: 'prompt',
      isShowCancelButton: options.isShowCancelButton === undefined ? true : options.isShowCancelButton,
      isColumnButton: options.isColumnButton,
      confirmText: options.confirmText,
      cancelText: options.cancelText,
      isShowInput: true,
      validate: options.validate,
      maskColor: options.maskColor,
      maskOpacity: options.maskOpacity,
      transition: options.transition
    })
    instance.open = options.open || true
    instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : (() => {})
    instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance) : (() => {instance.open = false})
    instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : (() => {instance.open = false})
    instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
    instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
    document.body.appendChild(instance.$el)
    Vue.nextTick(() => {
      instance.inputType = options.inputType || 'text'
    })
    return instance
  }
}

export default MessageBox
