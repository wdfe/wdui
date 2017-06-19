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
        <div class="wd-scroller-refresh-wrap" v-if="onRefresh" :class="{noRefresh: noRefreshStyle}">
          <template v-if="noRefresh">
            <div class="wd-scroller-no-refresh-wrap" v-show="noRefresh">
              <div class="wd-scroller-no-refresh-text">{{noDataText}}</div>
            </div>
          </template>
          <template v-else>
            <div class="wd-scroller-pull-to-refresh-wrap" :class="{holding: pullToRefreshState === 1}" v-show="pullToRefreshState !== 2">
              <img src="../../../src/assets/images/downLoad.png" class="wd-scroller-pull-to-refresh-loading-icon">
              <div class="wd-scroller-refresh-text">{{refreshText}}</div>
            </div>
            <div class="wd-scroller-refresh-loading-wrap" v-show="pullToRefreshState === 2">
              <scroller-loader :text="loadingText"></scroller-loader>
            </div>
          </template>
        </div>
        <div class="wd-scroller-slot-wrapper" ref="slotWrapper">
          <slot></slot>
        </div>
        <div class="wd-scroller-infinite-load-wrap" v-if="onLoad && contentOverflow">
          <template v-if="noLoad">
            <div class="wd-scroller-no-infinite-loading-wrap">
              <div class="wd-scroller-no-infinite-loading-text">{{noDataText}}</div>
            </div>
          </template>
          <template v-else-if="showLoadingState">
            <div class="wd-scroller-infinite-load-tip-wrap" v-show="infiniteLoadingState !== 1">
              <div class="wd-scroller-bottom-text">{{loadText}}</div>
            </div>
            <div class="wd-scroller-infinite-loading-wrap" v-show="infiniteLoadingState === 1">
              <scroller-loader :text="loadingText"></scroller-loader>
            </div>
          </template>
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
    loadText: {
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
      default: 400
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
      noRefresh: false,
      noRefreshStyle: false,
      noLoad: false,
      showLoadingState: true,
      $scrollTarget: null,
      $slotWrapper: null,
      render: null,
      scroller: null,
      scrollTargetRect: {},
      slotObserver: null,
      mousedown: false,
      pullToRefreshState: 0,
      pullToRefreshStateCache: 0,
      pullToRefreshStateAdjustFlag: false,
      infiniteLoadingState: 0,
      tipHeight: 0,
      contentHeight: 0,
      containerHeight: 0
    }
  },
  components: {
    scrollerLoader
  },
  mounted() {
    this.init()
  },
  computed: {
    contentOverflow() {
      return this.contentHeight >= this.containerHeight
    }
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

      this.$scrollTarget = this.$refs.content
      this.$slotWrapper = this.$refs.slotWrapper
      this.scrollTargetRect = this.$scrollTarget.getBoundingClientRect()
      this.containerHeight = this.$el.getBoundingClientRect().height
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
        this.updateDOMData()
        this.resetDimensions()
      })
      this.slotObserver.observe(this.$slotWrapper, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
      })
    },
    updateDOMData() {
      this.contentHeight = this.$el.querySelector('.wd-scroller-slot-wrapper').getBoundingClientRect().height
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
      this.resetDimensions()

      /*
       * 若 onRefresh 不为空，绑定下拉刷新相关事件
       */

      if (this.onRefresh) {
        this.scroller.activatePullToRefresh(this.tipHeight, () => {
          this.noRefresh = false
          this.pullToRefreshStateAdjustFlag = false
          this.pullToRefreshStateCache = this.pullToRefreshState = 1
        }, () => {
          if(this.pullToRefreshStateCache === 1) {
            this.pullToRefreshStateAdjustFlag = true
          }
          this.pullToRefreshStateCache = this.pullToRefreshState = 0
        }, () => {
          if(this.pullToRefreshState === 2) {
            return
          }
          this.noRefreshStyle = false
          this.pullToRefreshStateCache = this.pullToRefreshState = 2
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
    },
    touchMove(e) {
      e.preventDefault()
      this.scroller.doTouchMove(e.touches, e.timeStamp)

      /*
       * 如果 onload 不为空，执行无限加载相关逻辑
       */

      if(this.onLoad && this.contentOverflow) {
        let top = this.scroller.getValues().top
        let ww = this.$el.clientWidth
        let wh = this.$el.clientHeight
        let ew = this.$slotWrapper.offsetWidth
        let eh = this.$slotWrapper.offsetHeight + this.tipHeight
        if(this.noRefresh) {
          eh += this.tipHeight
        }
        if (top + this.$el.clientHeight > this.$slotWrapper.offsetHeight + this.tipHeight) {
          this.resetDimensionsManually(ww, wh, ew, eh)
        }else if(top + this.$el.clientHeight === this.$slotWrapper.offsetHeight + this.tipHeight) {
          this.resetDimensions()
        }
      }
    },
    touchEnd(e) {
      this.scroller.doTouchEnd(e.timeStamp)

      /*
       * 如果 onload 不为空，执行无限加载相关逻辑
       */

      if(this.onLoad && this.contentOverflow) {
        let top = this.scroller.getValues().top
        if (top + this.$el.clientHeight > this.$slotWrapper.offsetHeight + this.tipHeight) {
          if (this.infiniteLoadingState) {
            return
          }
          this.noLoad = false
          this.infiniteLoadingState = 1

          /**
           * 加一个小延时，缓和动画效果
           */

          setTimeout(() => {
            this.onLoad()
          }, 200)
        }
      }

      if(this.pullToRefreshStateAdjustFlag) {
        this.scroller.scrollTo(0, this.tipHeight, true)
        setTimeout(() => {
          this.pullToRefreshStateAdjustFlag = false
          this.noRefreshStyle = false
          this.scroller.scrollTo(0, 0, false)
          this.resetDimensions()
        }, this.animationDuration)
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
      let ww = this.$el.clientWidth
      let wh = this.$el.clientHeight
      let ew = this.$slotWrapper.offsetWidth
      let eh = this.$slotWrapper.offsetHeight
      if(this.noRefresh) {
        eh += this.tipHeight
      }
      if(this.noLoad) {
        eh += this.tipHeight
      }
      this.scroller.setDimensions(ww, wh, ew, eh)
    },
    resetDimensionsManually(ww, wh, ew, eh) {
      this.scroller.setDimensions(ww, wh, ew, eh)
    },
    finishPullToRefresh() {
      this.scroller.finishPullToRefresh()
    },
    finishInfiniteLoading() {
      this.infiniteLoadingState = 0
      /**
       * 如果未拉来数据，或者新 DOM 高度过低，调整 scroll 位置避免露出底部提示文字
       */
      let transformY = -(translateUtils.getElementTranslate(this.$refs.content).top)
      let contentHeight = this.$refs.slotWrapper.getBoundingClientRect().height
      if(this.containerHeight + transformY > contentHeight) {
        this.showLoadingState = false
        this.scroller.scrollTo(0, contentHeight - this.containerHeight, true)
        setTimeout(() => {
          this.showLoadingState = true
        }, this.animationDuration)
      }
    },
    noMoreRefresh() {
      this.noRefresh = true
      this.noRefreshStyle = true
      this.scroller.scrollTo(0, 0, false)
      this.scroller.finishPullToRefresh()
      this.resetDimensionsManually(this.$el.clientWidth, this.$el.clientHeight, this.$slotWrapper.offsetWidth, this.$slotWrapper.offsetHeight + this.tipHeight)
    },
    noMoreInfiniteLoading() {
      this.finishInfiniteLoading()
      this.noLoad = true
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

      &.noRefresh {
        margin-top: 0;
      }

      .wd-scroller-pull-to-refresh-wrap,
      .wd-scroller-refresh-loading-wrap,
      .wd-scroller-no-refresh-wrap {
        display: flex;
        height: 100%;
        font-size: 20px;
        align-items: center;
        justify-content: center;
      }

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
    }

    .wd-scroller-slot-wrapper {
      overflow: hidden;
    }

    .wd-scroller-infinite-load-wrap {
      height: 120px;
      font-size: 20px;

      .wd-scroller-infinite-load-tip-wrap,
      .wd-scroller-infinite-loading-wrap,
      .wd-scroller-no-infinite-loading-wrap {
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
