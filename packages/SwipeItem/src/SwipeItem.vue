<template>
  <section class="wd-swipe-item">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'wd-swipe-item',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    mounted() {
      this.$parent && this.$parent.swipeItemCreated(this)
    },
    destroyed() {
      this.$parent && this.$parent.swipeItemDestroyed(this)
    }
  }
</script>
