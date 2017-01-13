import Vue from 'vue'
import MaskComponent from './mask.vue'
const Mask = Vue.extend(MaskComponent)

const MaskManager = {
  instances: [],
  mask: false,

  /*
   * 打开 mask
   */

  open(instance) {
    if(!instance || this.instances.indexOf(instance) !== -1) {
      return
    }
    if(this.instances.length === 0) {
      this.showMask(instance)
    }
    this.instances.push(instance)
    this.changeMaskStyle()
  },

  /*
   * 关闭 mask
   */

  close(instance) {
    let index = this.instances.indexOf(instance)
    if(index === -1) {
      return
    }
    Vue.nextTick(() => {
      this.instances.splice(index, 1)
      if (this.instances.length === 0) {
        this.closeMask()
      }
      this.changeMaskStyle()
    })
  },

  /*
   * 创建与插入 mask 节点
   */

  showMask(instance) {
    let mask = this.mask = new Mask({
      el: document.createElement('div')
    })
    mask.fixed = true
    mask.color = instance.maskColor || '#000'
    mask.opacity = instance.maskOpacity || 0.4
    mask.zIndex = instance.maskZIndex
    mask.onClick = this.handleMaskClick.bind(this)
    document.body.appendChild(mask.$el)
    Vue.nextTick(() => {
      mask.show = true
    })
  },

  /*
   * 移除mask
   */

  closeMask() {
    if(!this.mask) {
      return
    }
    let mask = this.mask
    mask.show = false
    this.mask = null
    setTimeout(() => {
      mask.$el.remove()
      mask.$destroy()
    }, 450)
  },

  /*
   * 应用 mask 样式
   */

  changeMaskStyle() {
    if(!this.mask || this.instances.length === 0) {
      return
    }
    const instance = this.instances[this.instances.length - 1]
    this.mask.color = instance.maskColor || '#000'
    this.mask.opacity = instance.maskOpacity || 0.4
    this.mask.zIndex = instance.maskZIndex
    this.mask.onClick = this.handleMaskClick.bind(this)
  },

  /*
   * 触发 mask 点击事件
   */

  handleMaskClick() {
    if(this.instances.length === 0) {
      return
    }
    const instance = this.instances[this.instances.length - 1]
    if (instance.maskClick) {
      instance.maskClick()
    }
  }
}

export default MaskManager
