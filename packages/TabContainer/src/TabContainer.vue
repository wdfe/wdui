<template>
  <div class="wd-tab-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wd-tab-container',
  props: {
    value: {
      type: String
    }
  }
}
</script>

<style lang="sass">

.wd-tab-container {
  width: 100%;
}
</style>
