<template>
  <div class="page-infinite">
    <h1 class="page-title">Infinite Scroll</h1>
    <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>
    <div class="page-infinite-wrapper" ref="wrapper">
      <ul class="page-infinite-list" v-wd-infiniteScroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">
        <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
      </ul>
      <loader v-show="loading"></loader>
    </div>
  </div>
</template>

<script type="text/babel">
import loader from './wd-scroll-loader.vue'

export default {
  data() {
    return {
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 0
    }
  },
  components: {
    loader
  },
  methods: {
    loadMore() {
      this.loading = true
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        this.loading = false
      }, 2500)
    }
  },

  mounted() {
    //容器目前显示的高度
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    for (let i = 1; i <= 20; i++) {
      this.list.push(i)
    }
  }
}
</script>
<style>
.page-title {
    font-size: 40px; /*px*/
    margin: 40px auto;
    text-align: center;
    display: block;
    line-height: 1;
}
.page-infinite-wrapper{
  height: 100%;
}
.page-infinite{
  width: 100%;
  height: 100%;
}
.page-infinite-desc, .page-infinite-listitem {
    text-align: center;
    border-bottom: 1px solid #eee;
}
.page-infinite-desc {
    color: #666;
    padding-bottom: 10px;
}
.page-infinite-wrapper {
    margin-top: -1px;
    overflow: scroll;
}
.page-infinite-listitem:first-child {
    border-top: 1px solid #eee;
}
.page-infinite-listitem {
    height: 100px;
    line-height: 100px;
}
</style>
