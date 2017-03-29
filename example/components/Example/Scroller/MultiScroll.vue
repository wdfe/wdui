<template>
  <div class="scroller-container multiscroll-container page-infinite">
    <div class="page-infinite-wrapper">
      <wd-scroller
        :on-refresh="updateData"
        :on-load="loadData"
        refreshText="下拉加载更多"
        loadText="上拉加载更多"
        loadingText="正在加载更多哦~"
        noDataText="更多数据敬请期待"
        ref="wrap"
        >
        <ul class="page-infinite-list">
          <li v-for="item in list" class="page-infinite-listitem">{{item}}</li>
        </ul>
      </wd-scroller>
    </div>
    <div class="page-infinite-wrapper">
      <wd-scroller
        :on-refresh="updateData2"
        :on-load="loadData2"
        refreshText="下拉加载更多"
        loadText="上拉加载更多"
        loadingText="正在加载更多哦~"
        noDataText="更多数据敬请期待"
        ref="wrap2"
        >
        <ul class="page-infinite-list">
          <li v-for="item in list2" class="page-infinite-listitem">{{item}}</li>
        </ul>
      </wd-scroller>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      list2: []
    }
  },
  components: {
  },
  mounted() {
    for (let i = 1; i <= 30; i++) {
      this.list.push(i)
      this.list2.push(i)
    }
  },
  methods: {
    updateData() {
      setTimeout(() => {
        let last = +this.list[0] - 1
        if(last < 0) {
          this.$refs.wrap.noMoreRefresh()
          return
        }
        for (let i = last; i > last - 10; i--) {
          this.list.splice(0, 0, i)
        }
        this.$refs.wrap.finishPullToRefresh()
      }, 2000)
    },
    loadData() {
      setTimeout(() => {
        let last = +this.list.slice(-1) + 1
        if(last > 40) {
          this.$refs.wrap.noMoreInfiniteLoading()
          return
        }
        let moreload = last + 10
        for(let i = last; i < moreload; i++){
          this.list.push(i)
        }
        this.$refs.wrap.finishInfiniteLoading()
      }, 3000)
    },
    updateData2() {
      setTimeout(() => {
        let last = +this.list2[0] - 1
        if(last < 0) {
          this.$refs.wrap2.noMoreRefresh()
          return
        }
        for (let i = last; i > last - 10; i--) {
          this.list2.splice(0, 0, i)
        }
        this.$refs.wrap2.finishPullToRefresh()
      }, 2000)
    },
    loadData2() {
      setTimeout(() => {
        let last = +this.list2.slice(-1) + 1
        if(last > 40) {
          this.$refs.wrap2.noMoreInfiniteLoading()
          return
        }
        let moreload = last + 10
        for(let i = last; i < moreload; i++){
          this.list2.push(i)
        }
        this.$refs.wrap2.finishInfiniteLoading()
      }, 3000)
    }
  }
}
</script>
<style lang="sass">
.multiscroll-container {
  .page-infinite-wrapper {
      height: 100vh;
      width: 50%;
      float: left;
  }
}
</style>
