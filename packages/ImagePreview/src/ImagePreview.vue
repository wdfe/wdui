<template>
  <transition :name="`wd-imagepreview-${transition}`" @after-enter="onShow()" @after-leave="onHide()">
    <div class="wd-imagepreview" ref="popup" v-if="visible" :style="{'z-index': zIndex}">
      <ul class="wd-imagepreview-container" ref="container" :class="{dragging: dragState.dragging}">
        <li v-for="img in imgList" class="wd-imagepreview-item">
          <img :src="img.url">
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
      sum: 0
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
