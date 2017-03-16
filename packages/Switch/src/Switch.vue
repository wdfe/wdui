<template>
  <label class="wd-switch">
    <input class="wd-switch-input" @change="$emit('change', checked)" v-model="checked" type="checkbox">
    <span class="wd-switch-button"></span>
    <div class="wd-switch-label"><slot></slot></div>
  </label>
</template>

<script>
  export default {
    name: 'wd-switch',
    props: {
      value: Boolean
    },
    computed: {
      checked: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('changeValue', val)
        }
      }
    },
    methods: {
      setValue(value) {
        if (typeof value === 'boolean') {
          this.checked = value
        }
      }
    }
  }
</script>

<style src="./Switch.scss">
</style>
