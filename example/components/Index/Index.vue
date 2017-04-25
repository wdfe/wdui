<template>
  <div class="index-container">
    <wd-header title="Components"></wd-header>
    <wd-cell :title="item" :to="`#/${item.toLowerCase()}`" v-for="item in components"></wd-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: [
        'Toast',
        'MessageBox',
        'Dialog',
        'Lazyload',
        'Button',
        'Search',
        'Picker',
        'Swipe',
        'Switch',
        'Popup',
        'Tooltip',
        'Radio',
        'Checkbox',
        'ImagePreview',
        'ActionSheet',
        'Scroller',
        'Header',
        'Tabbar',
        'Cell',
        'Badge',
        'Navbar'
      ]
    }
  }
}
</script>

<style lang="sass">
.icon-zuosanjiao {
  color: #fff;
}
</style>
