<template>
  <div class="scroller-container loadmore-container page-infinite">
    <div class="page-infinite-wrapper">
      <wd-scroller
        :on-load="loadData"
        loadText="上拉加载更多"
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
    loadData() {
      setTimeout(() => {
        let last = +this.list.slice(-1) + 1
        let moreload = last + 20
        for(let i = last; i < moreload; i++){
          this.list.push(i)
        }
      }, 3000)
    }
  }
}
</script>
<style lang="sass">
.loadmore-container {
}
</style>
