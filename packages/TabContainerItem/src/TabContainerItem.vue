<template>
  <div class="wd-tab-container-item" v-show="$parent.value === tabId">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wd-tab-container-item',
  props: {
    tabId: {
      type: String
    }
  }
}
</script>

<style lang="sass">

.wd-tabbar {
  width: 100%;
}
</style>
