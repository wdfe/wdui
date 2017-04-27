<template>
  <transition :name="messageBoxTransition" @after-enter="onShow()" @after-leave="onHide()">
    <div class="wd-messagebox" ref="popup" v-if="open" :style="{'z-index': zIndex}">
      <div class="wd-messagebox-content">
        <header v-if="title">{{ title }}</header>
        <p class="wd-messagebox-content-text">{{ text }}</p>
        <input class="wd-messagebox-content-input" v-if="isShowInput" v-model="inputValue" ref="input"></input>
      </div>
      <footer :class="{'wd-messagebox-footer-row': !isColumnButton, 'wd-messagebox-footer-column': isColumnButton}">
        <span @click="onCancel" v-if="isShowCancelButton">{{ cancelText }}</span>
        <span @click="confirmHandler" :class="{disabled: isConfirmDisabled}">{{ confirmText }}</span>
      </footer>
    </div>
  </transition>
</template>

<script>

import Popup from '../../../src/popup/index.js'

export default {
  name: 'wd-messagebox',
  mixins: [Popup],
  props: {
    transition: {
      type: String,
      default: 'fade'
    },
    title: {
      type: [String, Number],
      default: ''
    },
    text: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: [String],
      default: 'alert'
    },
    isShowInput: {
      type: Boolean,
      default: false
    },
    isShowCancelButton: {
      type: Boolean,
      default: false
    },
    isColumnButton: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: [String],
      default: 'text'
    },
    confirmText: {
      type: [String, Number],
      default: '确定'
    },
    cancelText: {
      type: [String, Number],
      default: '取消'
    },
    onShow: {
      type: Function,
      default: () => {}
    },
    onHide: {
      type: Function,
      default: () => {}
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    onCancel: {
      type: Function,
      default: () => {}
    },
    onMaskClick: {
      type: Function,
      default: () => {}
    },
    validate: {
      type: Function,
      default: () => {return true}
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    messageBoxTransition() {
      if(this.transition) {
        return `messagebox-${this.transition}`
      }else {
        return ''
      }
    },
    isConfirmDisabled() {
      if(this.type === 'prompt') {
        return !this.validate(this.inputValue)
      }else {
        return false
      }
    }
  },
  created() {
  },
  watch: {
    inputType(val) {
      this.handleInputType(val)
    }
  },
  methods: {
    maskClick() {
      this.onMaskClick()
    },
    handleInputType(val) {
      if (val === 'range' || !this.$refs.input) {
        return
      }
      this.$refs.input.type = val
    },
    confirmHandler() {
      if(!this.isConfirmDisabled) {
        this.onConfirm()
      }
    }
  }
}

</script>

<style lang="sass">

  $background-color: #FFFFFF;
  $title-color: #222222;
  $text-color: #737373;
  $border-color: #dddddd;
  $button-text-color: #4384d8;
  $button-disabled-text-color: #cacaca;
  $input-border-color: #9a9a9a;
  $title-font-size: 36px;
  $text-font-size: 28px;
  $button-font-size: 32px;

  .wd-messagebox {
    width: 600px;
    position: fixed;
    background-color: $background-color;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;

    .wd-messagebox-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 56px;
      min-height: 200px;
      box-sizing: border-box;

      header {
        margin-bottom: 16px;
        text-align: center;
        align-self: stretch;
        font-size: $title-font-size;
        line-height: 50px;
        color: $title-color;
        font-weight: bold;

        &+.wd-messagebox-content-text {
          font-size: 28px;
          color: $text-color;
          line-height: 40px;
        }
      }

      .wd-messagebox-content-text {
        text-align: center;
        line-height: 50px;
        font-size: $title-font-size;
      }

      input {
        margin-top: 40px;
        padding: 16px;
        width: 488px;
        height: 64px;
        font-size: 28px;
        line-height: 64px;
        border: 1px solid $input-border-color; /* no */
        border-radius: 4px; /* no */
        box-sizing: border-box;
      }
    }

    footer {
      display: flex;
      border-top: 1px solid $border-color; /* no */

      span {
        display: flex;
        flex: 1;
        height: 88px;
        align-items: center;
        justify-content: center;
        font-size: $button-font-size;
        color: $button-text-color;

        &.disabled {
          color: $button-disabled-text-color;
        }
      }

      &.wd-messagebox-footer-row {
        flex-direction: row;

        span {
          &:first-child {
            border-right: 1px solid $border-color; /* no */
          }
        }
      }
      &.wd-messagebox-footer-column {
        flex-direction: column;

        span {
          &:first-child {
            border-bottom: 1px solid $border-color; /* no */
          }
        }
      }
    }
  }
  .messagebox-fade-enter-active,
  .messagebox-fade-leave-active {
    transition: opacity .3s;
  }
  .messagebox-fade-enter,
  .messagebox-fade-leave-active {
    opacity: 0;
  }
</style>
