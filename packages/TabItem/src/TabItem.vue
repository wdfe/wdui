<template>
  <div class="wd-tab-item"
    :style="tabItemStyle"
    @click="tabItemClickHandler"
    :class="{active: active}">
    <div class="wd-tab-item-icon-wrapper" v-if="isIconShow">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wd-tab-item',
  props: {
    flex: {
      type: Number,
      default: 1
    },
    tabId: {
      type: String
    }
  },
  computed: {
    tabItemStyle() {
      return {
        flex: this.flex,
        flexDirection: this.isIconShow ? 'column' : 'row'
      }
    },
    active() {
      return this.$parent.value === this.tabId
    },
    isIconShow() {
      return this.$parent.$options._componentTag === 'wd-tabbar'
    }
  },
  methods: {
    tabItemClickHandler() {
      this.$parent.$emit('input', this.tabId)
    }
  }
}
</script>

<style lang="sass">

.wd-tab-item {
  display: flex;
  height: 100%;
  line-height: 100%;
  align-items: center;
  justify-content: center;

  .wd-tab-item-icon-wrapper {
    margin-bottom: 6px;
    width: 64px;
    height: 64px;

    img {
      width: 100%;
    }
  }
}
</style>
