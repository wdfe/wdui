<template lang="html">
  <div class="wd-search">
    <div class="wd-search-arrow">
      <i class="wd-search-arrow-left"></i>
    </div>
    <div class="wd-search-input">
      <div class="wd-search-icon">
        <i class="wd-search-icon-search"></i>
      </div>
      <input type="text" name="" value="" v-model="inputText" @focus="closeIcon = true" placeholder="请输入搜索内容">
      <i class="wd-search-input-close" @click="cleanInput" v-show="closeIcon">×</i>
    </div>
    <div class="wd-search-button">搜索</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closeIcon: false,
      inputText: ''
    }
  },
  methods: {
    cleanInput() {
      this.inputText = ''
      this.closeIcon = false
    }
  }
}
</script>

<style lang="sass" src="./Search.scss" scoped>
</style>
