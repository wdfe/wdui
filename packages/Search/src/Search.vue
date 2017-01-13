<template lang="html">
  <div class="wd-search">
    <div class="wd-search-arrow">
      <i class="wd-search-arrow-left"></i>
    </div>
    <div class="wd-search-input">
      <div class="wd-search-icon">
        <i class="wd-search-icon-search"></i>
      </div>
      <input type="text" name="" value="" v-model="inputText" @focus="closeIcon = true" :placeholder="placeholder">
      <i class="wd-search-input-close" @click="cleanInput" v-show="closeIcon">×</i>
    </div>
    <div class="wd-search-button" @click="search">搜索</div>
  </div>
</template>

<script>
export default {
  name: 'wd-search',
  props: {
    placeholder: {
      type: String,
      default: '请输入搜索内容'
    },
    defaultValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      closeIcon: false,
      inputText: this.defaultValue
    }
  },
  methods: {
    cleanInput() {
      this.inputText = ''
      this.closeIcon = false
    },
    search() {
      this.$emit('callback', this.inputText)
    }
  }
}
</script>

<style lang="sass" src="./Search.scss" scoped>
</style>
