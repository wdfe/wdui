<template>
  <div class="scroller-container nodata-container page-infinite">
    <app-header title="Scroller" returnUrl="#/scroller"></app-header>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  components: {
  },
  mounted() {
    for (let i = 1; i <= 30; i++) {
      this.list.push(i)
    }
  },
  methods: {
    updateData() {
      setTimeout(() => {
        let last = +this.list[0] - 1
        if(last < 10) {
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
        if(last > 30) {
          this.$refs.wrap.noMoreInfiniteLoading()
          return
        }
        let moreload = last + 10
        for(let i = last; i < moreload; i++){
          this.list.push(i)
        }
        this.$refs.wrap.finishInfiniteLoading()
      }, 3000)
    }
  }
}
</script>
<style lang="sass">
.nodata-container {
}
</style>
