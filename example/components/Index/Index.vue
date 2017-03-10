<template>
  <div class="wrap">
    <ul>
      <li>
        <template v-for="item in components">
          <router-link :to="`/${item.toLowerCase()}`">
            <i class="fa fa-check-square"></i>
            <span class="word">{{item}}</span>
            <i class="fa fa-angle-right right"></i>
          </router-link>
        </template>
      </li>
    </ul>
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
        'InfinitesScroll',
        'Search',
        'Picker',
        'Swipe',
        'Switch',
        'Popup',
        'Tooltip',
        'Radio',
        'Checkbox',
        'ImagePreview',
      ]
    }
  },
  computed: {
  },
  components: {},
  mounted() {
    this.$nextTick(() => {
    })
  },
  created: function(){},
  methods: {}
}
</script>
<style src="./Index.scss"></style>
