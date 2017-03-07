<template lang="html">
  <transition :name="`wd-tooltip-${transition}`">
    <div class="wd-tooltip" ref="popup" v-if="value" :style="toolTipStyle">
      <span class="wd-tooltip-arrow" :style="arrowStyle"></span>
      <content>
        <slot></slot>
      </content>
    </div>
  </transition>
</template>

<script>
import Popup from '../../../src/popup/index.js'

export default {
  name: 'wd-tooltip',
  mixins: [Popup],
  props: {
    transition: {
      type: String,
      default: 'fade'
    },
    value: {
      type: Boolean,
      default: false
    },
    locator: {
      required: true
    },
    position: {
      type: String,
      validator(value) {
        return [
          'bottom',
          'top'
        ].indexOf(value) > -1
      }
    },
    onShow: {
      type: Function,
      default: () => {}
    },
    onHide: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    arrowStyle() {
      return {
        top: this.computedArrowTop ? `${this.computedArrowTop}px` : 'auto',
        left: `${this.computedArrowLeft}px`,
        bottom: this.computedArrowBottom ? `${this.computedArrowBottom}px` : 'auto'
      }
    },
    toolTipStyle() {
      return {
        zIndex: this.zIndex,
        top: `${this.computedTooltipTop}px`,
        left: `${this.computedTooltipLeft}px`
      }
    }
  },
  data() {
    return {
      locatorClientRect: {},
      tooltipClientRect: {},
      arrowHeight: 0,
      arrowSideLength: 0,
      documentHeight: 0,
      documentWidth: 0,
      computedPosition: '',
      computedArrowTop: 0,
      computedArrowLeft: 0,
      computedArrowBottom: 0,
      computedTooltipTop: 20,
      computedTooltipLeft: 0
    }
  },
  mounted() {
    if (this.value) {
      this.open = true
    }
  },
  watch: {
    value(val) {
      if(val) {
        this.$nextTick(() => {
          this.initData()
          this.resetPosition()
        })
      }
    }
  },
  methods: {
    handleClick() {
      if(this.closeWhenClicked) {
        this.$emit('input', false)
      }
    },
    initData() {
      if(!this.locator.getBoundingClientRect) {
        throw('Tooltip Error: Locator must be a DOM element.')
      }else {
        this.locatorClientRect = this.locator.getBoundingClientRect()
      }
      this.tooltipClientRect = this.$el.getBoundingClientRect()
      this.arrowHeight = this.$el.querySelector('.wd-tooltip-arrow').getBoundingClientRect().width
      this.arrowAdjustmentHeight = this.arrowHeight * 0.35
      this.arrowSideLength = this.arrowHeight / Math.SQRT2
      this.documentHeight = document.documentElement.clientHeight
      this.documentWidth = document.documentElement.clientWidth
    },
    resetPosition() {
      const OFFSET = 5
      const tooltipHeightWithArrow = this.tooltipClientRect.height + (this.arrowHeight / 2)
      const locatorBottomDistance = this.documentHeight - this.locatorClientRect.bottom
      const topSurplus = this.locatorClientRect.top - tooltipHeightWithArrow
      const bottomSurplus = locatorBottomDistance - tooltipHeightWithArrow
      const locationPoint = [0, 0]

      //根据空间，判断 tooltip 弹出方向
      let position = this.position
      if(!position) {
        position = (topSurplus > bottomSurplus) ? 'top' : 'bottom'
      }
      switch(position) {
      case 'top':
        locationPoint[0] = (this.locatorClientRect.left + this.locatorClientRect.right) / 2
        locationPoint[1] = (this.locatorClientRect.top)
        break
      case 'bottom':
        locationPoint[0] = (this.locatorClientRect.left + this.locatorClientRect.right) / 2
        locationPoint[1] = (this.locatorClientRect.bottom)
        break
      }

      //根据 tooltip 尺寸计算 tooltip 最佳位置
      const diff = this.tooltipClientRect.width - this.locatorClientRect.width

      //当 tooltip 组件尺寸小于 locator 时，居中即可
      if(diff <= 0) {
        if(position === 'bottom') {
          this.computedTooltipTop = locationPoint[1] + this.arrowAdjustmentHeight + OFFSET
          this.computedArrowTop = -this.arrowAdjustmentHeight
        }else {
          this.computedTooltipTop = locationPoint[1] - this.arrowAdjustmentHeight - this.tooltipClientRect.height - OFFSET
          this.computedArrowBottom = -this.arrowAdjustmentHeight
        }
        this.computedTooltipLeft = locationPoint[0] - (this.tooltipClientRect.width / 2)
        this.computedArrowLeft = (this.tooltipClientRect.width / 2) - (this.arrowHeight / 2)

      //当 tooltip 组件尺寸大于 locator 时，根据 locator 左右留白比例调整 tooltip 位置
      }else {
        const HORIZONTALOFFSET = diff * (this.locatorClientRect.left / (this.documentWidth - this.locatorClientRect.width))
        if(position === 'bottom') {
          this.computedTooltipTop = locationPoint[1] + this.arrowAdjustmentHeight + OFFSET
          this.computedArrowTop = -this.arrowAdjustmentHeight
        }else {
          this.computedTooltipTop = locationPoint[1] - this.arrowAdjustmentHeight - this.tooltipClientRect.height - OFFSET
          this.computedArrowBottom = -this.arrowAdjustmentHeight
        }
        this.computedTooltipLeft = this.locatorClientRect.left - HORIZONTALOFFSET
        this.computedArrowLeft = (this.locatorClientRect.left + this.locatorClientRect.right) / 2 - this.computedTooltipLeft - (this.arrowHeight / 2)
      }
    }
  }
}
</script>

<style lang="sass">

.wd-tooltip {
  position: fixed;
  background-color: #FFF;
  border-radius: 12px;

  &>.wd-tooltip-arrow {
    display: inline-block;
    position: absolute;
    width: 28px;
    height: 28px;
    background-color: #FFF;
    transform: rotate(45deg);
    z-index: -1;
  }
}

.wd-tooltip-fade-enter-active,
.wd-tooltip-fade-leave-active {
  transition: opacity .3s;
}
.wd-tooltip-fade-enter,
.wd-tooltip-fade-leave-active {
  opacity: 0;
}
</style>
