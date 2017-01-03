<template>
  <transition :name="dialogTransition" @after-enter="onShow()" @after-leave="onHide()">
    <div class="wd-dialog" :class="dialogClass" ref="popup" v-if="visible" :style="{'z-index': zIndex}">
      <div class="wd-dialog-header">
        <div v-if="showClose" class="wd-dialog-header-close" @click="close()"></div>
      </div>
      <div class="wd-dialog-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>

import Popup from '../../../src/popup/index.js'

export default {
  name: 'wdDialog',
  mixins: [Popup],
  props: {
    transition: {
      type: String,
      default: 'fade'
    },
    value: {
      type: Boolean,
      default: false
    },
    dialogClass: {
      type: [String, Array, Object]
    },
    showClose: {
      type: Boolean,
      default: true
    },
    onShow: {
      type: Function,
      default: () => {}
    },
    onHide: {
      type: Function,
      default: () => {}
    },
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    dialogTransition() {
      if(this.transition) {
        return `dialog-${this.transition}`
      }else {
        return ''
      }
    },
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
      if (val) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
    }
  },
  methods: {
    close() {
      this.visible = false
    }
  },
  mounted() {
    if (this.value) {
      this.visible = true;
    }
  }
}
</script>
<style lang="sass">

  $background-color: #FFFFFF;
  $close-color: #000000;

  .wd-dialog {
    width: 560px;
    position: fixed;
    background-color: $background-color;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;

    .wd-dialog-header {
      position: relative;
      height: 94px;
      line-height: 94px;
      padding: 0 56px;

      .wd-dialog-header-close {
        position: absolute;
        top: 36px;
        right: 36px;
        width: 32px;
        height: 32px;
        &:before, &:after {
          content: '';
          position: absolute;
          height: 1px; /* no */
          width: 100%;
          top: 50%;
          left: 0;
          background: $close-color;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
    }

    .wd-dialog-content {
      box-sizing: border-box;
      padding: 0 56px 56px;
    }

  }
</style>
