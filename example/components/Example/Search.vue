<template lang="html">
  <div style="width:100%">
    <wd-search 
      @callback="doSearch"
      :defaultValue="'搜索内容'"
     :placeholder="'请输入内容'"></wd-search>
  </div>
</template>

<script>
export default {
  methods: {
    doSearch(inputText){
      console.log(inputText)
    }
  }
}
</script>

<style lang="css">
</style>
