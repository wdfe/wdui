<template>
  <div class="scroller-container nodata-container page-infinite">
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
    //容器目前显示的高度
    this.$nextTick(()=>{
      for (let i = 1; i <= 30; i++) {
        this.list.push(i)
      }
    })

  },
  methods: {
    updateData() {
      if(this.list.length > 70) {
        this.$refs.wrap.finishRefresh()
      }else {
        let last = +this.list[0] - 1
        for (let i = last; i > last - 10; i--) {
          this.list.splice(0, 0, i)
        }
      }
    },
    loadData() {
      if(this.list.length > 70) {
        this.$refs.wrap.finishLoad()
      }else {
        let last = +this.list.slice(-1) + 1
        let moreload = last + 20
        for(let i = last; i < moreload; i++){
          this.list.push(i)
        }
      }
    }
  }
}
</script>
<style lang="sass">
.nodata-container {
}
</style>
