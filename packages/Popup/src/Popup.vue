<template lang="html">
  <transition :name="`wd-popup-${position}`">
    <div class="wd-popup" ref="popup" v-if="value" @click="handleClick" :style="modelStyle"><slot></slot></div>
  </transition>
</template>

<script>
import Popup from '../../../src/popup/index.js'

export default {
  name: 'wd-popup',
  mixins: [Popup],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'bottom',
      validator(value) {
        return [
          'bottom',
          'top',
          'left',
          'right'
        ].indexOf(value) > -1
      }
    },
    closeWhenClicked: {
      type: Boolean,
      default: false
    },
    cover: {
      type: String,
      default: '100%'
    },
    onShow: {
      type: Function,
      default: () => {}
    },
    onHide: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    modelStyle() {
      let style = {
        position: 'fixed',
        backgroundColor: '#FFF',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: this.zIndex
      }
      switch (this.position) {
      case 'bottom':
        delete style.top
        style.height = this.cover
        break
      case 'top':
        delete style.bottom
        style.height = this.cover
        break
      case 'left':
        delete style.right
        style.width = this.cover
        break
      case 'right':
        delete style.left
        style.width = this.cover
        break
      }
      return style
    }
  },
  mounted() {
    if (this.value) {
      this.open = true
    }
  },
  methods: {
    handleClick() {
      if(this.closeWhenClicked) {
        this.$emit('input', false)
      }
    }
  }
}
</script>

<style lang="sass">

.wd-popup-bottom-enter-active {
  transform: translate3d(0, 0, 0);
  transition: all .45s ease-out;
}
.wd-popup-bottom-leave-active {
  transform: translate3d(0, 100%, 0);
  transition: all .45s ease-out;
}
.wd-popup-bottom-enter {
  transform: translate3d(0, 100%, 0);
}
.wd-popup-bottom-leave {
  transform: translate3d(0, 0, 0);
}

.wd-popup-top-enter-active {
  transform: translate3d(0, 0, 0);
  transition: all .45s ease-out;
}
.wd-popup-top-leave-active {
  transform: translate3d(0, -100%, 0);
  transition: all .45s ease-out;
}
.wd-popup-top-enter {
  transform: translate3d(0, -100%, 0);
}
.wd-popup-top-leave {
  transform: translate3d(0, 0, 0);
}

.wd-popup-right-enter-active {
  transform: translate3d(0, 0, 0);
  transition: all .45s ease-out;
}
.wd-popup-right-leave-active {
  transform: translate3d(100%, 0, 0);
  transition: all .45s ease-out;
}
.wd-popup-right-enter {
  transform: translate3d(100%, 0, 0);
}
.wd-popup-right-leave {
  transform: translate3d(0, 0, 0);
}

.wd-popup-left-enter-active {
  transform: translate3d(0, 0, 0);
  transition: all .45s ease-out;
}
.wd-popup-left-leave-active {
  transform: translate3d(-100%, 0, 0);
  transition: all .45s ease-out;
}
.wd-popup-left-enter {
  transform: translate3d(-100%, 0, 0);
}
.wd-popup-left-leave {
  transform: translate3d(0, 0, 0);
}
</style>
