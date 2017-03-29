<template>
  <div class="scroller-container refresh-container page-infinite">
    <div class="page-infinite-wrapper">
      <wd-scroller
        :on-refresh="updateData"
        refreshText="下拉加载更多呦"
        loadingText="正在加载更多哦~"
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
    this.$nextTick(()=>{
      for (let i = 1; i <= 30; i++) {
        this.list.push(i)
      }
    })
  },
  methods: {
    updateData() {
      setTimeout(() => {
        let last = +this.list[0] - 1
        for (let i = last; i > last - 10; i--) {
          this.list.splice(0, 0, i)
        }
        this.$refs.wrap.finishPullToRefresh()
      }, 2000)
    },
  }
}
</script>
<style lang="sass">
.refresh-container {
}
</style>
