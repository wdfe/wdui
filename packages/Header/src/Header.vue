<template>
  <div class="wd-header" :style="headerStyle">
    <div class="wd-header-left-wrapper">
      <slot name="left"></slot>
    </div>
    <content>
      <slot name="title">{{ title }}</slot>
    </content>
    <div class="wd-header-right-wrapper">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wd-header',
  props: {
    title: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    headerStyle() {
      if(this.fixed) {
        return {
          position: 'fixed',
          zIndex: 9999,
          top: 0,
          left: 0
        }
      }else {
        return {
          position: 'relative'
        }
      }
    }
  }
}
</script>

<style lang="sass">

.wd-header {
  width: 100%;
  height: 88px;
  line-height: 88px;
  background-color: #C60A1E;

  content {
    display: flex;
    justify-content: center;
    font-size: 36px;
    font-weight: bold;
    color: #fff;
  }

  .wd-header-left-wrapper {
    position: absolute;
    left: 24px;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #fff;
  }

  .wd-header-right-wrapper {
    position: absolute;
    right: 24px;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #fff;
  }
}
</style>
