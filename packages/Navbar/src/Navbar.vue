<template>
  <div class="wd-navbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wd-navbar',
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  }
}
</script>

<style lang="sass">

$navbar-height: 80px;
$navbar-background-color: #F7F7F7;
$navbar-font-size: 28px;
$navbar-color: #404040;
$navbar-border-color: #dddddd;

.wd-navbar {
  display: flex;
  width: 100%;
  height: $navbar-height;
  line-height: $navbar-height;
  background-color: $navbar-background-color;
  font-size: $navbar-font-size;
  color: $navbar-color;
  box-sizing: border-box;
  border-bottom: 1px solid $navbar-border-color; /* no */
}
</style>
