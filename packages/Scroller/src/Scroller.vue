<template>
    <div class="wd-scroller" ref="wrap">
      <div v-if="showTopText" class="wd-scroller-top-text">{{refreshText}}</div>
      <scrollLoader v-if="topLoading" :text="loadingText"></scrollLoader>
      <div v-if="noRefresh" class="wd-scroller-no-text">{{noDataText}}</div>
      <slot></slot>
      <div v-if="showBottomText" class="wd-scroller-bottom-text">{{bottomText}}</div>
      <scrollLoader v-if="bottomLoading" :text="loadingText"></scrollLoader>
      <div v-if="noLoad" class="wd-scroller-no-text">{{noDataText}}</div>
    </div>
  </div>
</template>

<script>
import draggable from '../../../src/utils/draggable.js'
import {animate, transformName} from '../../../src/utils/animation.js'
import scrollLoader from '../../../example/components/Example/wd-scroll-loader.vue'
const CUBIC = 'cubic-bezier(0.33,0.66,0.66,1)'
export default {
  name: 'wd-scroller',
  props: {
    onRefresh: Function,
    onLoad: Function,
    refreshText: {
      type: String,
      default: '下拉更新数据'
    },
    bottomText: {
      type: String,
      default: '加载更多数据'
    },
    loadingText: {
      type: String,
      default: '正在加载'
    },
    noDataText: {
      type: String,
      default: '没有更多数据了'
    }
  },
  data() {
    return {
      showTopText: false,
      topLoading: false,
      showBottomText: false,
      bottomLoading: false,
      noRefresh: false,
      noLoad: false
    }
  },
  components: {
    scrollLoader
  },
  mounted() {
    //容器目前显示的高度
    this.$nextTick(()=>{
      this.init()
    })
  },
  methods: {
    init() {
      this.setInitData()
      this.scrollTo(0, 0)
      if(this.$el.clientHeight >= this.$refs.wrap){
        return
      }
      this.bindEvents()
    },
    setInitData(){
      this.scrollTarget = this.$el
      this.wrap = document.body
      this.startY = 0
      this.startTime = 0
      this.ifMoveing = false
    },
    scrollTo(x, y, time, timingFunction, func){
      animate(this.scrollTarget, {
        translateX: x + 'px',
        translateY: y + 'px',
        HWCompositing: true, //3D加速
        duration: time || 0,
        onComplete: func,
        ease: timingFunction || 'ease'
      })
    },
    bindEvents() {
      draggable(this.scrollTarget, {
        start: (event) => {
          this.startTime = Date.now()
          this.pointY = event.pageY
          this.scrollY = this.getComputedPosition(this.scrollTarget).y
          //正在滚动时 点击 立刻停止
          if(this.ifMoveing){
            this.scrollTo(0, Math.round(this.scrollY))
          }
        },
        drag: (event) => {
          let distY = event.pageY - this.pointY + this.scrollY
          let timestamp = Date.now()
          this.ifMoveing = true
          if (timestamp - this.startTime > 300 && (Math.abs(distY) < 10)) {
            return
          }
          if(distY > 0){
            //下拉更新
            if(this.onRefresh){
              this.showTopText = true
            }
            this.scrollTo(0, distY, 40, CUBIC)
          }else{
            // 上拉加载更多
            this.scrollTo(0, distY)
            if(-distY > (this.scrollTarget.clientHeight - this.wrap.clientHeight)){
              this.onLoad && (this.showBottomText = true)
            }
          }
        },
        end: (event) => {
          this.endTime = Date.now()
          this.ifMoveing = false
          let boxHeight = this.scrollTarget.clientHeight
          let bodyHeight = this.wrap.clientHeight
          let duration = this.endTime - this.startTime
          let momentumY = this.momentum(event.pageY, this.pointY, duration, boxHeight, boxHeight)
          this.scrollY = this.getComputedPosition(this.scrollTarget).y
          if(this.scrollY > 0){
            this.showTopText = false
            this.onRefresh && (this.topLoading = true)
            this.scrollTo(0, 0, 500, 'ease-out', this.update)
          }else {
            this.showBottomText = false
            let newY = this.scrollY + momentumY.destination
            this.scrollTo(0, newY, momentumY.duration, 'ease-out')
            if(Math.abs(newY) > (boxHeight - bodyHeight)){ //超出最大可上拉距离
              this.scrollTo(0, -(boxHeight - bodyHeight), 500, CUBIC, this.loadmore)
              this.onLoad && (this.bottomLoading = true)
            }
          }
        }
      })
    },
    getComputedPosition(el) {
      let matrix = window.getComputedStyle(el)
      matrix = matrix[transformName].split(')')[0].split(', ')
      return {
        x: Math.round(matrix[12] || matrix[4]),
        y: Math.round(matrix[13] || matrix[5])
      }
    },
    /**
     * @description [touchend之后的惯性滚动计算]
     * @param  {[Number]} touchend时的坐标点
     * @param  {[Number]} touchstart时的坐标点
     * @param  {[Number]} 时间参数，开始触屏到离开时候所用时间（touchstart到touchend)
     * @param  {[Number]} 控制边界位置的
     * @param  {[Number]} 容器的高度
     * @return {[Number, Number]} 惯性距离， 动画时间
     */
    momentum(current, start, time, lowerMargin, wrapperSize) {
      let distance = current - start
      let speed = Math.abs(distance) / time //得出此次拉动的速度
      let deceleration = 0.006
      let newDist = (speed * speed) / (2 * deceleration)
      distance < 0 && (newDist = -newDist)
      let duration = speed / deceleration
      //处理运动轨迹超出时候的距离与速度重新计算（反弹效果）
      // if(distance > 0 && newDist > maxDistUpper) {
      //   destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin
      //   distance = Math.abs(destination - current)
      //   duration = distance / speed
      // }else if (destination > 0) {
      //   destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0
      //   distance = Math.abs(current) + destination
      //   duration = distance / speed
      // }
      return {
        destination: newDist,
        duration: duration
      }
    },
    update() {
      setTimeout(()=>{
        this.topLoading = false
        !this.noRefresh && this.onRefresh && this.onRefresh()
      }, 1000)
    },
    loadmore() {
      setTimeout(()=>{
        this.bottomLoading = false
        !this.noRefresh && this.onLoad && this.onLoad()
      }, 1000)
    },
    finishRefresh() {
      this.noRefresh = true
      setTimeout(()=>{
        this.noRefresh = false
      }, 1000)
    },
    finishLoad() {
      this.noLoad = true
      setTimeout(()=>{
        this.noLoad = false
      }, 1000)
    }
  }
}
</script>
<style lang="sass">

.wd-scroller {
  .bottom-text {
    width: 100%;
    text-align: center;
    margin: 20px 0;
    font-size: 20px;/*px*/
    color: #999999;
  }
  .no-text {
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
    background: url(../../../src/assets/images/downLoad.png) no-repeat center;
    background-size: 100% 100%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
  }
}
</style>
