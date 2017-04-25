<template lang="html">
  <div class="search-container">
    <wd-header title="Search">
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <div style="width:100%" class="search-wrap">
      <wd-search
        @callback="doSearch"
        :defaultValue="'搜索内容'"
       :placeholder="'请输入内容'"></wd-search>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    doSearch(inputText){
      alert(inputText)
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
