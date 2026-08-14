<template>
  <transition :name="`wd-imagepreview-${transition}`" @after-enter="onShow()" @after-leave="onHide()">
    <div class="wd-imagepreview" ref="popup" v-if="visible" :style="{'z-index': zIndex}">
      <ul class="wd-imagepreview-container" ref="container" :class="{dragging: dragState.dragging}">
        <li v-for="(img, index) in imgList" :key="index" class="wd-imagepreview-item">
          <img
            :src="img.url"
            :ref="`image-${index}`"
            :style="getImageStyle(index)"
            @touchstart="handleTouchStart($event, index)"
            @touchmove="handleTouchMove($event, index)"
            @touchend="handleTouchEnd($event, index)">
        </li>
      </ul>
      <span class="wd-imagepreview-close" v-if="!autoClose" @click="onClose">关闭</span>
      <span class="wd-imagepreview-indicator" v-if="showIndicator">{{currentIndex + 1}}/{{sum}}</span>
    </div>
  </transition>
</template>

<script>
import Popup from '../../../src/popup/index.js'
import translateUtils from '../../../src/utils/translate.js'
import draggable from '../../../src/utils/draggable.js'

export default {
  name: 'wd-imagepreview',
  mixins: [Popup],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'fade'
    },
    imgList: {
      type: Array,
      default: [],
      required: true
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    minScale: {
      type: Number,
      default: 1
    },
    maxScale: {
      type: Number,
      default: 2
    },
    onShow: {
      type: Function,
      default: () => {}
    },
    onHide: {
      type: Function,
      default: () => {}
    },
    onMaskClick: {
      type: Function,
      default: () => {}
    },
    onClose: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      visible: false,
      dragState: {
        startLeft: 0,
        startTop: 0,
        offsetLeft: 0,
        initialTranslateX: 0,
        endLeft: 0,
        prevLeft: 0,
        prevAcce: 0,
        prevTimestamp: 0,
        dragging: false
      },
      defaultDragState: {
        startLeft: 0,
        startTop: 0,
        offsetLeft: 0,
        initialTranslateX: 0,
        endLeft: 0,
        prevLeft: 0,
        prevAcce: 0,
        prevTimestamp: 0,
        dragging: false
      },
      itemWidth: 0,
      currentIndex: 0,
      sum: 0,
      zoomStates: [],
      touchState: {
        touching: false,
        startDistance: 0,
        startScale: 1,
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0,
        isPinching: false
      }
    }
  },
  watch: {
    value(val) {
      this.visible = val
      this.open = val
      if(!this.$refs.container) {
        this.$nextTick(() => {
          this.init()
        })
      }
    },
    visible(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    if (this.value) {
      this.visible = true
      this.open = true
      this.init()
    }
  },
  methods: {
    maskClick() {
      this.onMaskClick()
    },
    init() {
      this.initData()
      this.initZoomStates()
      this.bindEvent()
      this.locateItem(this.defaultIndex)
    },
    initData() {
      this.itemWidth = document.documentElement.clientWidth
      this.sum = this.imgList.length
    },
    bindEvent() {
      /* istanbul ignore next */
      draggable(this.$refs.container, {
        start: (event) => {
          /*
           * 滑动开始时，记录 pageX 和初始 translateX
           */
          this.dragState.prevLeft = this.dragState.startLeft = event.pageX
          this.dragState.startTop = event.pageY
          this.dragState.prevTimestamp = Date.now()
          this.dragState.initialTranslateX = translateUtils.getElementTranslate(this.$refs.container).left
          this.dragState.dragging = true
        },
        drag: (event) => {
          /*
           * 滑动中，计算偏移量并设置 el 的 translateY
           */
          this.dragState.dragging = true
          this.dragState.offsetLeft = event.pageX - this.dragState.startLeft
          this.dragState.endLeft = this.dragState.offsetLeft + this.dragState.initialTranslateX
          translateUtils.translateElement(this.$refs.container, this.dragState.endLeft, null)
          this.dragState.prevAcce = ((event.pageX - this.dragState.prevLeft) / (Date.now() - this.dragState.prevTimestamp))
          this.dragState.prevLeft = event.pageX
          this.dragState.prevTimestamp = Date.now()
        },
        end: (event) => {
          /*
           * 滑动结束时，检查当前偏移位置，找到最接近的 item 并设定其到居中，更新 currentIndex
           */
          this.dragState.dragging = false
          let index = Math.round(- translateUtils.getElementTranslate(this.$refs.container).left / this.itemWidth)
          const ACCETHRESOLD = 0.5
          /*
           * 当加速度较大时，会前进/后退一个 item
           */
          if(index === this.currentIndex) {
            if(this.dragState.prevAcce < -ACCETHRESOLD) {
              index += 1
            }else if(this.dragState.prevAcce > ACCETHRESOLD) {
              index -= 1
            }
          }
          if(index < 0) {
            this.locateItem(0)
          }else if (index > (this.imgList.length - 1)) {
            this.locateItem(this.imgList.length - 1)
          }else {
            this.locateItem(index)
          }
          if(this.dragState.startLeft === event.pageX && this.dragState.startTop === event.pageY) {
            if(this.autoClose) {
              this.onClose()
            }
          }
          this.dragState = JSON.parse(JSON.stringify(this.defaultDragState))
        }
      })
    },
    locateItem(index) {
      translateUtils.translateElement(this.$refs.container, - index * this.itemWidth, null)
      this.currentIndex = index
    },
    initZoomStates() {
      this.zoomStates = this.imgList.map(() => ({
        scale: 1,
        translateX: 0,
        translateY: 0
      }))
    },
    getImageStyle(index) {
      if (!this.zoomStates[index]) {
        return {}
      }
      const { scale, translateX, translateY } = this.zoomStates[index]
      return {
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        transition: this.touchState.touching ? 'none' : 'transform 0.3s ease-out'
      }
    },
    getTouchDistance(touches) {
      const touch1 = touches[0]
      const touch2 = touches[1]
      const dx = touch1.pageX - touch2.pageX
      const dy = touch1.pageY - touch2.pageY
      return Math.sqrt(dx * dx + dy * dy)
    },
    getTouchCenter(touches) {
      const touch1 = touches[0]
      const touch2 = touches[1]
      return {
        x: (touch1.pageX + touch2.pageX) / 2,
        y: (touch1.pageY + touch2.pageY) / 2
      }
    },
    handleTouchStart(event, index) {
      if (event.touches.length === 2) {
        // 双指捏合开始
        event.preventDefault()
        this.touchState.isPinching = true
        this.touchState.touching = true
        this.touchState.startDistance = this.getTouchDistance(event.touches)
        this.touchState.startScale = this.zoomStates[index].scale
        const center = this.getTouchCenter(event.touches)
        this.touchState.startX = center.x
        this.touchState.startY = center.y
        this.touchState.lastX = this.zoomStates[index].translateX
        this.touchState.lastY = this.zoomStates[index].translateY
      } else if (event.touches.length === 1 && this.zoomStates[index].scale > 1) {
        // 单指拖动（仅当图片已放大时）
        event.preventDefault()
        this.touchState.touching = true
        this.touchState.isPinching = false
        this.touchState.startX = event.touches[0].pageX
        this.touchState.startY = event.touches[0].pageY
        this.touchState.lastX = this.zoomStates[index].translateX
        this.touchState.lastY = this.zoomStates[index].translateY
      }
    },
    handleTouchMove(event, index) {
      if (!this.touchState.touching) {
        return
      }

      if (event.touches.length === 2 && this.touchState.isPinching) {
        // 双指捏合缩放
        event.preventDefault()
        const currentDistance = this.getTouchDistance(event.touches)
        let scale = this.touchState.startScale * (currentDistance / this.touchState.startDistance)

        // 限制缩放范围
        scale = Math.max(this.minScale, Math.min(this.maxScale, scale))

        this.zoomStates[index].scale = scale

        // 计算缩放中心偏移
        const center = this.getTouchCenter(event.touches)
        const deltaX = center.x - this.touchState.startX
        const deltaY = center.y - this.touchState.startY

        this.zoomStates[index].translateX = this.touchState.lastX + deltaX
        this.zoomStates[index].translateY = this.touchState.lastY + deltaY
      } else if (event.touches.length === 1 && !this.touchState.isPinching && this.zoomStates[index].scale > 1) {
        // 单指拖动放大的图片
        event.preventDefault()
        const deltaX = event.touches[0].pageX - this.touchState.startX
        const deltaY = event.touches[0].pageY - this.touchState.startY

        this.zoomStates[index].translateX = this.touchState.lastX + deltaX
        this.zoomStates[index].translateY = this.touchState.lastY + deltaY
      }
    },
    handleTouchEnd(event, index) {
      if (!this.touchState.touching) {
        return
      }

      this.touchState.touching = false

      // 如果缩放到最小值，重置位置
      if (this.zoomStates[index].scale <= this.minScale) {
        this.zoomStates[index].scale = this.minScale
        this.zoomStates[index].translateX = 0
        this.zoomStates[index].translateY = 0
      }

      // 双击放大/缩小
      if (event.touches.length === 0 && !this.touchState.isPinching) {
        const now = Date.now()
        const DOUBLE_TAP_DELAY = 300

        if (this.lastTapTime && now - this.lastTapTime < DOUBLE_TAP_DELAY) {
          // 双击事件
          if (this.zoomStates[index].scale > this.minScale) {
            // 已放大，缩小到最小
            this.zoomStates[index].scale = this.minScale
            this.zoomStates[index].translateX = 0
            this.zoomStates[index].translateY = 0
          } else {
            // 未放大，放大到中间值
            this.zoomStates[index].scale = Math.min(2, this.maxScale)
            this.zoomStates[index].translateX = 0
            this.zoomStates[index].translateY = 0
          }
          this.lastTapTime = 0
        } else {
          this.lastTapTime = now
        }
      }

      this.touchState.isPinching = false
    }
  }
}

</script>

<style lang="sass">

$preview-background-color: #000000;
$button-background-color: rgba(69, 69, 69, 0.5);
$button-border-color: rgba(151, 151, 151, 0.6);

.wd-imagepreview {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $preview-background-color;

  .wd-imagepreview-container {
    display: flex;
    height: 100vh;
    flex-wrap: nowrap;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;

    &.dragging {
      transition-duration: 0;
    }

    .wd-imagepreview-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      flex: none;
    }
  }

  .wd-imagepreview-close {
    display: inline-block;
    position: absolute;
    right: 40px;
    bottom: 50px;
    width: 100px;
    height: 48px;
    background-color: $button-background-color;
    color: #fff;
    font-size: 24px;
    text-align: center;
    line-height: 48px;
    border: 1px solid $button-border-color; /* no */
    border-radius: 2px; /* no */
  }
  .wd-imagepreview-indicator {
    position: absolute;
    left: 50%;
    bottom: 62px;
    color: #7b7b7b;
    font-size: 24px;
    transform: translate3d(-50%, 0, 0)
  }
}
.wd-imagepreview-fade-enter-active,
.wd-imagepreview-fade-leave-active {
  transition: opacity .3s;
}
.wd-imagepreview-fade-enter,
.wd-imagepreview-fade-leave-active {
  opacity: 0;
}

[data-dpr="1"] .wd-imagepreview .wd-imagepreview-container .wd-imagepreview-item img {
  max-width: 100vw;
  max-height: 100vh;
}
[data-dpr="2"] .wd-imagepreview .wd-imagepreview-container .wd-imagepreview-item img {
  max-width: 50vw;
  max-height: 50vh;
  transform: scale(2,2)
}
[data-dpr="3"] .wd-imagepreview .wd-imagepreview-container .wd-imagepreview-item img {
  max-width: 33.33vw;
  max-height: 33.33vh;
  transform: scale(3,3)
}
[data-dpr="4"] .wd-imagepreview .wd-imagepreview-container .wd-imagepreview-item img {
  max-width: 25vw;
  max-height: 25vh;
  transform: scale(4,4)
}
</style>
