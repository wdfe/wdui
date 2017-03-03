<template>
  <transition :name="actionsheetTransition" @after-enter="onShow()" @after-leave="onHide()">
    <div :class="{'wd-actionsheet-theme-left': theme.type === 'left','wd-actionsheet-theme-center': theme.type === 'center'}" class="wd-actionsheet" ref="popup" v-if="visible" :style="{'z-index': zIndex}">
      <header v-if="title" class="wd-actionsheet-header">{{ title }}</header>
      <div class="wd-actionsheet-content">
        <ul class="wd-actionsheet-list">
          <li v-for="item in actions" class="wd-actionsheet-listitem" @click="itemClick(item)">
            <span v-if="!item.title && !item.subtitle">{{ item }}</span>
            <span v-if="item.title">{{ item.title }}</span>
            <span class="wd-item-sub" v-if="item.subtitle">{{ item.subtitle }}</span></li>
        </ul>
      </div>
      <footer class="wd-actionsheet-footer">
        <span @click="onCancel" v-if="isShowCancelButton">{{ cancelText }}</span>
        <span @click="onConfirm" v-if="isShowConfirmButton">{{ confirmText }}</span>
      </footer>
    </div>
  </transition>
</template>
<script>
  import Popup from '../../../src/popup/index.js'

  export default {
    name: 'wd-actionsheet',
    mixins: [Popup],
    props: {
      transition: {
        type: String,
        default: 'slide-bottom'
      },
      theme: {
        type: Object,
        default: {}
      },
      title: {
        type: [String, Number],
        default: ''
      },
      actions: {
        type: Array,
        default: () => []
      },
      confirmText: {
        type: [String, Number],
        default: '确定'
      },
      cancelText: {
        type: [String, Number],
        default: '取消'
      },
      isShowCancelButton: {
        type: Boolean,
        default: true
      },
      isShowConfirmButton: {
        type: Boolean,
        default: false
      },
      value: {
        type: Boolean,
        default: false
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
    },
    data() {
      return {
        visible: false,
        //datas: {}
      }
    },
    computed: {
      actionsheetTransition() {
        if(this.transition) {
          return `actionsheet-${this.transition}`
        }else {
          return ''
        }
      }
    },
    watch: {
      visible(val) {
        this.$emit('input', val)
      },
      value(val) {
        this.visible = val
      }
    },
    methods: {
      maskClick() {
        this.onMaskClick()
      },
      itemClick(item) {
        if(!item.title) {
          this.data = item;
          console.log(this.data)
        }
        if(item.title && item.subtitle) {
          this.datas = {'title': item.title, 'subtitle': item.subtitle}
          console.log(this.datas)
        }
        if(item.method && typeof item.method === 'function') {
          item.method()
        }
        if(!this.isShowConfirmButton) {
          this.visible = false
          this.value = false
        }
      }
    }
  };
</script>
<style lang="sass">
  $header-text-color: #9a9a9a;
  $header-text-size: 24px;
  $header-line-height: 88px;
  $content-text-color: #222;
  $content-text-size: 36px;
  $content-line-height: 104px;
  $border-color: #ddd;
  $button-background-color: #f7f7f7;
  .wd-actionsheet {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #FFF;
    .wd-actionsheet-header {
      padding: 0 40px;
      height: $header-line-height;                   /* px */
      line-height: $header-line-height;              /* px */
      font-size: $header-text-size;                  /* px */
      color: $header-text-color;
    }
    .wd-actionsheet-content {
      padding: 0 0 0 40px;
      .wd-actionsheet-list {

        .wd-actionsheet-listitem {
          position: relative;
          padding-right: 40px;
          height: $content-line-height;                   /* px */
          line-height: $content-line-height;              /* px */
          font-size: $content-text-size;                  /* px */
          color: $content-text-color;
          border-top: 1px solid $border-color;            /* no */
         span {
             display: inline-block;
           &.wd-item-sub {
              position: absolute;
              right: 40px;
              font-size: $header-text-size;               /* px */
              color: $header-text-color;                  /* px */

           }
         }
        }
      }
    }
    .wd-actionsheet-footer {
      display: flex;
      border-top: 1px solid $border-color; /* no */
      span {
        display: flex;
        flex: 1;
        height: 104px;                     /* px */
        align-items: center;
        justify-content: center;
        flex-direction: row;
        font-size: $content-text-size;     /* px */
        color: $content-text-color;
        background-color: $button-background-color;
        &:first-child {
          border-right: 1px solid $border-color; /* no */
        }
      }
    }
    &.wd-actionsheet-theme-center {
      .wd-actionsheet-header,
      .wd-actionsheet-content {
        text-align: center;
        padding: 0;
      }
    }
  }
  .actionsheet-slide-bottom-enter-active,
  .actionsheet-slide-bottom-leave-active {
    transform: translate3d(0, 0, 0);
    opacity: 1;
    transition: all .3s;
  }
  .actionsheet-slide-bottom-enter,
  .actionsheet-slide-bottom-leave-active {
    transform: translate3d(0, 100%,0);
    opacity: 0;
  }
</style>
