import Vue from 'vue'
import MessageBoxComponent from './MessageBox.vue'

const MessageBoxConstructor = Vue.extend(MessageBoxComponent)

const init = () => {
  return new MessageBoxConstructor({
    el: document.createElement('div')
  })
}

const MessageBox = {
  alert(options = {}) {
    const instance = init()
    instance.open = options.open || true
    instance.title = options.title
    instance.text = options.text
    instance.type = 'alert'
    instance.isShowCancelButton = false
    instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : (() => {})
    instance.onClickOutSide = options.onClickOutSide ? options.onClickOutSide.bind(null, instance) : (() => {})
    instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance) : (() => {instance.open = false})
    instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : (() => {instance.open = false})
    instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
    instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
    document.body.appendChild(instance.$el)
    return instance
  },
  confirm(options = {}) {
    const instance = init()
    instance.open = options.open || true
    instance.title = options.title
    instance.text = options.text
    instance.type = 'confirm'
    instance.isShowCancelButton = true
    instance.isColumnButton = options.isColumnButton || false
    instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : (() => {})
    instance.onClickOutSide = options.onClickOutSide ? options.onClickOutSide.bind(null, instance) : (() => {})
    instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance) : (() => {instance.open = false})
    instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : (() => {instance.open = false})
    instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
    instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
    document.body.appendChild(instance.$el)
    return instance
  },
  prompt(options = {}) {
    const instance = init()
    instance.open = options.open || true
    instance.title = options.title
    instance.text = options.text
    instance.type = 'prompt'
    instance.isShowCancelButton = options.isShowCancelButton || true
    instance.isColumnButton = options.isColumnButton || false
    instance.isShowInput = true
    instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : (() => {})
    instance.onClickOutSide = options.onClickOutSide ? options.onClickOutSide.bind(null, instance) : (() => {})
    instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance) : (() => {instance.open = false})
    instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : (() => {instance.open = false})
    instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
    instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
    instance.validate = options.validate || (() => {return true})
    document.body.appendChild(instance.$el)
    return instance
  }
}

Vue.$MessageBox = Vue.prototype.$MessageBox = MessageBox
export default MessageBox
