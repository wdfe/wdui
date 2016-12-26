<template>
  <transition name="wd-mask-fade">
    <div class="wd-mask" v-if="show" @click="handleClick" @touchmove="prevent" :style="maskStyle" ></div>
  </transition>
</template>

<script>
export default {
  name: 'wd-mask',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    color: {
      type: String,
      default: '#000'
    },
    zIndex: {
      type: Number
    }
  },
  computed: {

    /*
     * mask 样式
     */

    maskStyle() {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      }
    }
  },
  methods: {
    prevent(event) {
      event.preventDefault()
      event.stopPropagation()
    },
    handleClick() {
      if (this.onClick) {
        this.onClick()
      }
    }
  }
}
</script>

<style lang="sass">
.wd-mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: .5;
  z-index: 1000;
}
.wd-mask-fade-enter-active, .wd-mask-fade-leave-active {
  transition: opacity .45s cubic-bezier(0.23, 1, 0.32, 1);
}
.wd-mask-fade-enter,
.wd-mask-fade-leave-active {
  opacity: 0 !important;
}
</style>