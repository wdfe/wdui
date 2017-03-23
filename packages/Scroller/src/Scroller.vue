<template>
    <div class="wd-scroller"
      @touchstart="touchStart($event)"
      @touchmove="touchMove($event)"
      @touchend="touchEnd($event)"
      @mousedown="mouseDown($event)"
      @mousemove="mouseMove($event)"
      @mouseup="mouseUp($event)"
    >
      <div class="wd-scroller-inner-wrapper" ref="content">
        <div class="wd-scroller-refresh-wrap" v-if="onRefresh">
          <div class="wd-scroller-pull-to-refresh-wrap" :class="{holding: pullToRefreshState === 1}" v-show="pullToRefreshState !== 2">
            <img src="../../../src/assets/images/downLoad.png" class="wd-scroller-pull-to-refresh-loading-icon">
            <div v-if="showTopText" class="wd-scroller-refresh-text">{{refreshText}}</div>
          </div>
          <div class="wd-scroller-refresh-loading-wrap" v-show="pullToRefreshState === 2">
            <scroller-loader v-if="topLoading" :text="loadingText"></scroller-loader>
          </div>
          <div class="wd-scroller-no-refresh-wrap" v-show="noRefresh">
            <div v-if="noRefresh" class="wd-scroller-no-refresh-text">{{noDataText}}</div>
          </div>
        </div>
        <div class="wd-scroller-slot-wrapper" ref="slotWrapper">
          <slot></slot>
        </div>
        <div class="wd-scroller-infinite-load-wrap" v-if="onLoad">
          <div class="wd-scroller-infinite-load-tip-wrap" v-show="infiniteLoadingState !== 1">
            <div v-if="showBottomText" class="wd-scroller-bottom-text">{{bottomText}}</div>
          </div>
          <div class="wd-scroller-infinite-loading-wrap" v-show="infiniteLoadingState === 1">
            <scroller-loader v-if="bottomLoading" :text="loadingText"></scroller-loader>
          </div>
          <div class="wd-scroller-no-infinite-loading-wrap">
            <div v-if="noLoad" class="wd-scroller-no-infinite-loading-text">{{noDataText}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scroller from '../../../src/utils/Scroller.js'
import translateUtils from '../../../src/utils/translate.js'
import scrollerLoader from '../src/ScrollerLoader.vue'

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
    },
    animating: {
      type: Boolean,
      default: true
    },
    animationDuration: {
      type: Number,
      default: 250
    },
    zooming: {
      type: Boolean,
      default: false
    },
    bouncing: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showTopText: true,
      topLoading: true,
      showBottomText: true,
      bottomLoading: true,
      noRefresh: false,
      noLoad: false,
      documentHeight: 0,
      $scrollTarget: null,
      startY: 0,
      startTime: 0,
      ifMoveing: false,
      render: null,
      scroller: null,
      scrollTargetRect: {},
      slotObserver: null,
      mousedown: false,
      pullToRefreshState: 0,
      infiniteLoadingState: 0,
      tipHeight: 0
    }
  },
  components: {
    scrollerLoader
  },
  mounted() {
    this.init()
  },
  watch() {

  },
  methods: {
    init() {
      this.setInitData()
      this.bindEvents()
    },
    setInitData(){

      /*
       * 设置初始化数据
       */

      this.documentHeight = document.documentElement.clientHeight
      this.$scrollTarget = this.$refs.content
      this.$slotWrapper = this.$refs.slotWrapper
      this.startY = 0
      this.startTime = 0
      this.ifMoveing = false
      this.scrollTargetRect = this.$scrollTarget.getBoundingClientRect()
      this.render = translateUtils.getRender(this.$scrollTarget)
      if(this.onRefresh) {
        this.tipHeight = this.$el.querySelector('.wd-scroller-refresh-wrap').offsetHeight
      }else if(this.onLoad) {
        this.tipHeight = this.$el.querySelector('.wd-scroller-infinite-load-wrap').offsetHeight
      }

      /*
       * 使用 MutationObserver 监听 slot 内 DOM 变动，并及时更新 Scroller
       * ios 6+ , Android 4.4+
       */

      this.slotObserver = new MutationObserver(() => {
        this.resetDimensions()
      })
      this.slotObserver.observe(this.$slotWrapper, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
      })
    },
    bindEvents() {

      /*
       *  设置与启用 Scroller
       */

      this.scroller = new Scroller(this.render, {
        scrollingX: false,
        zooming: this.zooming,
        animating: this.animating,
        animationDuration: this.animationDuration,
        bouncing: this.bouncing
      })
      this.scroller.setPosition(this.scrollTargetRect.left + this.$scrollTarget.clientLeft, this.scrollTargetRect.top + this.$scrollTarget.clientTop)

      /*
       * 若 onRefresh 不为空，绑定下拉刷新相关事件
       */

      if (this.onRefresh) {
        this.scroller.activatePullToRefresh(60, () => {
          this.pullToRefreshState = 1
        }, () => {
          this.pullToRefreshState = 0
        }, () => {
          if(this.pullToRefreshState === 2) {
            return
          }
          this.pullToRefreshState = 2
          this.onRefresh()
        })
      }
    },
    scrollTo(x, y, animate) {
      this.scroller.scrollTo(x, y, animate)
    },
    touchStart(e) {
      // Don't react if initial down happens on a form element
      if (e.target.tagName.match(/input|textarea|select/i)) {
        return
      }
      this.scroller.doTouchStart(e.touches, e.timeStamp)
      /*
       * 如果 onload 不为空，执行无限加载相关逻辑
       */

      if(this.onLoad) {
        let top = this.scroller.getValues().top
        if (top + this.$el.clientHeight < this.$slotWrapper.offsetHeight + 60) {
          this.infiniteLoadingState = 0
        }
      }
    },
    touchMove(e) {
      e.preventDefault()
      this.scroller.doTouchMove(e.touches, e.timeStamp)

      /*
       * 如果 onload 不为空，执行无限加载相关逻辑
       */

      if(this.onLoad) {
        let top = this.scroller.getValues().top
        if (top + this.$el.clientHeight > this.$slotWrapper.offsetHeight + 60) {
          this.resetDimensionsManually(this.$el.clientWidth, this.$el.clientHeight, this.$slotWrapper.offsetWidth, this.$slotWrapper.offsetHeight + this.tipHeight)
        }else {
          this.resetDimensions()
        }
      }
    },
    touchEnd(e) {
      this.scroller.doTouchEnd(e.timeStamp)

      /*
       * 如果 onload 不为空，执行无限加载相关逻辑
       */

      if(this.onLoad) {
        let top = this.scroller.getValues().top
        if (top + this.$el.clientHeight > this.$slotWrapper.offsetHeight + 60) {
          if (this.infiniteLoadingState) {
            return
          }
          this.infiniteLoadingState = 1
          this.onLoad()
        }
      }
    },
    mouseDown(e) {
      // Don't react if initial down happens on a form element
      if (e.target.tagName.match(/input|textarea|select/i)) {
        return
      }
      this.scroller.doTouchStart([{
        pageX: e.pageX,
        pageY: e.pageY
      }], e.timeStamp)
      this.mousedown = true
    },
    mouseMove(e) {
      if (!this.mousedown) {
        return
      }
      this.scroller.doTouchMove([{
        pageX: e.pageX,
        pageY: e.pageY
      }], e.timeStamp)
      this.mousedown = true
    },
    mouseUp(e) {
      if (!this.mousedown) {
        return
      }
      this.scroller.doTouchEnd(e.timeStamp)
      this.mousedown = false
    },
    resetDimensions() {
      console.log('resetDimensions:', this.$el.clientWidth, this.$el.clientHeight, this.$slotWrapper.offsetWidth, this.$slotWrapper.offsetHeight)
      this.scroller.setDimensions(this.$el.clientWidth, this.$el.clientHeight, this.$slotWrapper.offsetWidth, this.$slotWrapper.offsetHeight)
    },
    resetDimensionsManually(ww, wh, ew, eh) {
      console.log('resetDimensionsManually:', ww, wh, ew, eh)
      this.scroller.setDimensions(ww, wh, ew, eh)
    }
  }
}
</script>
<style lang="sass">

.wd-scroller {
  width: 100%;
  height: 100%;
  user-select: none;
  overflow: hidden;

  .wd-scroller-inner-wrapper {

    .wd-scroller-refresh-wrap {
      margin-top: -120px;
      height: 120px;
      font-size: 20px;

      .wd-scroller-pull-to-refresh-wrap {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;

        .wd-scroller-pull-to-refresh-loading-icon {
          margin-right: 20px;
          width: 48px;
          height: 48px;
          transition: all .3s;
        }

        &.holding {
          .wd-scroller-pull-to-refresh-loading-icon {
            transform: rotate(180deg);
          }
        }
      }

      .wd-scroller-refresh-loading-wrap {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      }

    }

    .wd-scroller-infinite-load-wrap {
      height: 120px;
      font-size: 20px;

      .wd-scroller-infinite-load-tip-wrap {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      }

      .wd-scroller-infinite-loading-wrap {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
    }

  }

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
