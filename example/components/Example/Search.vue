<template lang="html">
  <div class="search-container">
    <app-header title="Search" returnUrl="#/"></app-header>
    <div style="width:100%" class="search-wrap">
      <wd-search
        @callback="doSearch"
        :defaultValue="'搜索内容'"
       :placeholder="'请输入内容'"></wd-search>
    </div>
  </div>
</template>

<script>
import AppHeader from '../Index/AppHeader.vue'

export default {
  components: {
    'app-header': AppHeader
  },
  methods: {
    doSearch(inputText){
      console.log(inputText)
    }
  }
}
</script>

<style lang="sass">
.search-container {

  .search-wrap {
    position: relative;
  }
}
</style>
