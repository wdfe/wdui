import Vue from 'vue'
import MaskManager from './mask-manager'
import {getZIndex} from './utils'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskOpacity: {
      type: Number,
      default: 0.5
    },
    maskColor: {
      type: String,
      default: '#000'
    }
  },
  data() {
    return {
      maskZIndex: getZIndex(),
      zIndex: getZIndex()
    }
  },
  methods: {
    maskClick(e) {
      this.$emit('maskClick', e)
    },
    clickOutSide(e) {
      this.$emit('clickOutSide', e)
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
    bindClickOutSide() {
      if (!this._handleClickOutSide) {
        this._handleClickOutSide = (e) => {
          if (this.$refs.popup.contains(e.target)) {
            return
          }
          this.clickOutSide(e)
        }
      }
      setTimeout(() => {
        document.addEventListener('click', this._handleClickOutSide)
      }, 0)
    },
    unBindClickOutSide() {
      document.removeEventListener('click', this._handleClickOutSide)
    },
    resetZIndex() {
      this.maskZIndex = getZIndex()
      this.zIndex = getZIndex()
    }
  },
  mounted() {
    if (this.mask && this.open) {
      MaskManager.open(this)
    }
    if (this.open) {
      this.bindClickOutSide()
    }
  },
  updated() {
    if (!this.mask) {
      this.setZIndex()
    }
  },
  beforeDestroy() {
    MaskManager.close(this)
    this.unBindClickOutSide()
    document.body.removeChild(this.$refs.popup)
  },
  watch: {
    open(val, oldVal) {
      if (val === oldVal) {
        return
      }
      if (val) {
        this.bindClickOutSide()
        this.resetZIndex()
        if (this.mask) {
          MaskManager.open(this)
        }
      } else {
        this.unBindClickOutSide()
        MaskManager.close(this)
      }
    }
  }
}
