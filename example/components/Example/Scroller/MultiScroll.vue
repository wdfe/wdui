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
        ref="wrap"
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
    //容器目前显示的高度
    this.$nextTick(()=>{
      for (let i = 1; i <= 30; i++) {
        this.list.push(i)
        this.list2.push(`${i}line2`)
      }
    })

  },
  methods: {
    updateData() {
      let last = +this.list[0] - 1
      for (let i = last; i > last - 10; i--) {
        this.list.splice(0, 0, i)
      }
    },
    loadData() {
      let last = +this.list.slice(-1) + 1
      let moreload = last + 20
      for(let i = last; i < moreload; i++){
        this.list.push(i)
      }
    },
    updateData2() {
      let last = +this.list[0] - 1
      for (let i = last; i > last - 10; i--) {
        this.list.splice(0, 0, `${i}line2`)
      }
    },
    loadData2() {
      let last = +this.list2.slice(-1) + 1
      let moreload = last + 20
      for(let i = last; i < moreload; i++){
        this.list2.push(i)
      }
    }
  }
}
</script>
<style lang="sass">
.multiscroll-container {
  .page-infinite-wrapper {
      margin-top: -1px;
      overflow: scroll;
      height: 100%;
      width: 50%;
      /*padding-bottom: 60px;*/
      float: left;
      box-sizing: border-box;
      border-left: 1px solid #dddddd;
  }
}
</style>
