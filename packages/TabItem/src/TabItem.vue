<template>
  <div class="wd-tab-item"
    :style="tabItemStyle"
    @click="tabItemClickHandler"
    :class="{active: active, 'navbar-active': navbarActive, 'tabbar-active': tabbarActive, 'navbar-tab-item': isAttachToNavbar, 'tabbar-tab-item': isAttachToTabbar}">
    <div class="wd-tab-item-icon-wrapper" v-if="isAttachToTabbar">
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
        flexDirection: this.isAttachToTabbar ? 'column' : 'row'
      }
    },
    active() {
      return this.$parent.value === this.tabId
    },
    isAttachToTabbar() {
      return this.$parent.$options._componentTag === 'wd-tabbar'
    },
    isAttachToNavbar() {
      return this.$parent.$options._componentTag === 'wd-navbar'
    },
    navbarActive() {
      return this.isAttachToNavbar && this.active
    },
    tabbarActive() {
      return this.isAttachToTabbar && this.active
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

$wd-tab-item-icon-size: 64px;
$wd-navbar-tab-item-active-color: #c6021e;
$wd-navbar-tab-item-horizontal-offset: 28px;

.wd-tab-item {
  display: flex;
  height: 100%;
  line-height: 100%;
  align-items: center;
  justify-content: center;

  .wd-tab-item-icon-wrapper {
    margin-bottom: 6px;
    width: $wd-tab-item-icon-size;
    height: $wd-tab-item-icon-size;

    img {
      width: 100%;
    }
  }

  &.navbar-active {
    color: $wd-navbar-tab-item-active-color;
    border-bottom: 4px solid $wd-navbar-tab-item-active-color;
  }
  &.navbar-tab-item {
    margin: 0 $wd-navbar-tab-item-horizontal-offset;
  }
}
</style>
