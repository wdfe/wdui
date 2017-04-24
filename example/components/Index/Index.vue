<template>
  <div class="index-container">
    <app-header title="Components" disableReturn></app-header>
    <router-link :to="`/${item.toLowerCase()}`" v-for="item in components">
      <cell :content="item"></cell>
    </router-link>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import Cell from './Cell.vue'

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
        'Header'
      ]
    }
  },
  components: {
    'app-header': AppHeader,
    'cell': Cell
  },
  mounted() {
  },
  created: function(){},
  methods: {}
}
</script>
<style lang="sass">

</style>
