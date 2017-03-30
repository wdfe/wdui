import Vue from 'vue'
import ImagePreviewComponent from './ImagePreview.vue'

const ImagePreviewConstructor = Vue.extend(ImagePreviewComponent)

const init = (propsData) => {
  return new ImagePreviewConstructor({
    propsData
  }).$mount(document.createElement('div'))
}

const ImagePreview = (options = {}) => {
  const instance = init({
    transition: options.transition,
    maskOpacity: options.maskOpacity,
    maskColor: options.maskColor,
    imgList: options.imgList,
    autoClose: options.autoClose,
    showIndicator: options.showIndicator,
    defaultIndex: options.defaultIndex
  })
  instance.value = options.open !== false
  instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
  instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
  instance.onClose = (() => {instance.value = false})
  document.body.appendChild(instance.$el)
  return instance
}

export default ImagePreview
