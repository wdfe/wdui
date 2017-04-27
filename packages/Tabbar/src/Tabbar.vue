<template>
  <div class="wd-tabbar" :style="tabbarStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wd-tabbar',
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  },
  computed: {
    tabbarStyle() {
      if(this.fixed) {
        return {
          position: 'fixed',
          zIndex: 9999,
          bottom: 0,
          left: 0
        }
      }else {
        return {
          position: 'static'
        }
      }
    }
  }
}
</script>

<style lang="sass">

$tabbar-height: 112px;
$tabbar-background-color: #F7F7F7;
$tabbar-font-size: 20px;
$tabbar-color: #737373;
$tabbar-border-color: #dddddd;

.wd-tabbar {
  display: flex;
  width: 100%;
  height: $tabbar-height;
  line-height: $tabbar-height;
  background-color: $tabbar-background-color;
  font-size: $tabbar-font-size;
  color: $tabbar-color;
  box-sizing: border-box;
  border-top: 1px solid $tabbar-border-color; /* no */
}
</style>
