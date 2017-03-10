import MaskManager from './mask-manager'
import {getZIndex} from './utils'
export default {
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    maskOpacity: {
      type: Number,
      default: 0.4
    },
    maskColor: {
      type: String,
      default: '#000'
    },
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      open: false,
      maskZIndex: getZIndex(),
      zIndex: getZIndex(),
      touchStatusCache: {
        clientY: 0,
        scrolling: false
      }
    }
  },
  methods: {
    maskClick(e) {
      this.$emit('maskClick', e)
    },
    setZIndex() {
      const dom = this.$el
      if (!this.zIndex) {
        this.zIndex = getZIndex()
      }
      if (dom) {
        dom.style.zIndex = this.zIndex
      }
    },
    resetZIndex() {
      this.maskZIndex = getZIndex()
      this.zIndex = getZIndex()
    },
    removeWheelEvent(e) {
      e.stopPropagation()
      e.preventDefault()
      e.cancelBubble = false
      return false
    },
    preventScroll() {
      document.addEventListener('mousewheel', this.removeWheelEvent, false)
      document.addEventListener('touchmove', this.removeWheelEvent, false)
    },
    enableScrollable() {
      let $scrollable = Array.prototype.slice.call(this.$el.querySelectorAll('.wd-popup-scrollable'))
      $scrollable.forEach((e) => {
        e.addEventListener('mousewheel', this.enableWheelScrollEventHandler.bind(this, e), false)
        e.addEventListener('touchmove', this.enableTouchScrollEventHandler.bind(this, e), false)
        e.addEventListener('touchstart', this.touchStartEventHandler.bind(this, e), false)
      })
    },
    enableWheelScrollEventHandler(el, e) {
      e.stopPropagation()
      e.cancelBubble = false
      /*
       * 滑到顶部咯
       */
      if(e.deltaY < 0 && el.scrollTop === 0) {
        e.preventDefault()
        return false
      }
      /*
       * 滑到底部咯
       */
      if(e.deltaY > 0 && el.offsetHeight + el.scrollTop === el.scrollHeight) {
        e.preventDefault()
        return false
      }
    },
    enableTouchScrollEventHandler(el, e) {
      e.stopPropagation()
      e.cancelBubble = false
      if(!this.touchStatusCache.clientY) {
        this.touchStatusCache.clientY = e.touches[0].clientY
      }else {
        let delta = e.touches[0].clientY - this.touchStatusCache.clientY
        this.touchStatusCache.clientY = e.touches[0].clientY
        /*
         * 滑到顶部咯
         */
        if(delta > 0 && el.scrollTop === 0) {
          e.preventDefault()
        }
        /*
         * 滑到底部咯
         */
        if(delta < 0 && el.offsetHeight + el.scrollTop === el.scrollHeight) {
          e.preventDefault()
        }
      }
    },
    touchStartEventHandler(el, e) {
      if (!this.touchStatusCache.scrolling) {
        this.touchStatusCache.scrolling = true

        /*
         * 如果滑动时在滑动区域头部/尾部，移动1px来防止背景跟随滚动
         */
        if (e.currentTarget.scrollTop === 0) {
          e.currentTarget.scrollTop = 1
        } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
          e.currentTarget.scrollTop -= 1
        }
        this.touchStatusCache.scrolling = false
      }

      this.touchStatusCache.clientY = e.touches[0].clientY
    },
    allowScroll() {
      document.removeEventListener('mousewheel', this.removeWheelEvent, false)
      document.removeEventListener('touchmove', this.removeWheelEvent, false)
    },
    disableScrollable() {
      let $scrollable = Array.prototype.slice.call(this.$el.querySelectorAll('.wd-popup-scrollable'))
      $scrollable.forEach((e) => {
        e.removeEventListener('mousewheel', this.enableWheelScrollEventHandler.bind(this, e), false)
        e.removeEventListener('touchmove', this.enableTouchScrollEventHandler.bind(this, e), false)
        e.removeEventListener('touchstart', this.touchStartEventHandler.bind(this, e), false)
      })
    }
  },
  mounted() {
    if (this.mask && this.open) {
      MaskManager.open(this)
    }
  },
  updated() {
    if (!this.mask) {
      this.setZIndex()
    }
  },
  beforeDestroy() {
    MaskManager.close(this)
    if(this.$refs.popup) {
      this.$refs.popup.parentNode.removeChild(this.$refs.popup)
    }
  },
  watch: {
    value(val) {
      this.open = val
    },
    open(val, oldVal) {
      if (val === oldVal) {
        return
      }
      if (val) {
        this.resetZIndex()
        if (this.mask) {
          MaskManager.open(this)
          if(this.lockScroll) {
            this.$nextTick(() => {
              this.preventScroll()
              this.enableScrollable()
            })
          }
        }
      } else {
        MaskManager.close(this)
        if(this.lockScroll) {
          this.allowScroll()
          this.disableScrollable()
        }
      }
    },
    mask(val, oldVal) {
      if (val === oldVal) {
        return
      }
      if (val) {
        MaskManager.open(this)
      } else {
        MaskManager.close(this)
      }
    }
  }
}
