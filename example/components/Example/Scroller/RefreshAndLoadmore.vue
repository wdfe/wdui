<template>
  <div class="page-infinite">
    <div class="page-infinite-wrapper">
      <wd-scroller
        :on-refresh="updateData"
        :on-load="loadData"
        refreshText="下拉加载更多"
        loadText="上拉加载更多"
        :loadingText = "'正在加载更多哦~'"
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
    }
  }
}
</script>
<style scoped>
.page-infinite{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;
}
.page-title {
    font-size: 40px; /*px*/
    margin: 40px auto;
    text-align: center;
    display: block;
    line-height: 1;
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
    height: 100%;
    /*width: 50%;*/
    /*padding-bottom: 60px;*/
    /*float: left;*/
    box-sizing: border-box;
    border-left: 1px solid #dddddd;
}
.page-infinite-listitem:first-child {
    border-top: 1px solid #eee;
}
.page-infinite-listitem {
    height: 100px;
    line-height: 100px;
}
.input_area{
  position: absolute;
  bottom: 0;
  height: 60px;
      z-index: 10;
    width: 100%;
    background: palegoldenrod;
}
.bottom-text{
  width: 100%;
  text-align: center;
  margin: 20px 0;
  font-size: 20px;/*px*/
  color: #999999;
}
.top-text {
  width: 100%;
  text-align: center;
  margin: 20px 0;
  font-size: 20px;/*px*/
  color: #999999;
}
.top-text:before {
  width: 48px;
  height: 48px;
  content: '';
  background: url(../../../../src/assets/images/downLoad.png) no-repeat center;
  background-size: 100% 100%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
}
</style>
