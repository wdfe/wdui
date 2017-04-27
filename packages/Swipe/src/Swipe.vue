<template>
  <div class="wd-swipe">
    <div class="wd-swipe-items-wrap" ref="wrap">
      <slot></slot>
    </div>
    <div class="wd-swipe-indicator-wrap" :class="showTitle ? 'wd-swipe-indicator-wrap-background' : ''" v-if="showIndicators">
      <div v-if="showTitle" class="wd-swipe-item-title">{{title}}</div>
      <ul :class="[
         indicatorsPosition === 'right' ? 'wd-swipe-indicators-right' : '',
         true ? 'wd-swipe-indicators' : ''
        ]" v-if="indicatorsType === 'dot'">
        <li v-for="(page, $index) in pages"
            :class="[
           $index === index ? 'current' : '',
           true ? 'wd-swipe-indicator' : '']"></li>
      </ul>
      <div v-if="indicatorsType === 'number'" class="wd-swipe-number-indicator">{{index+1}} / {{pages.length}}</div>
    </div>
  </div>
</template>

<script>
  import {once, addClass, removeClass} from '../../../src/utils/dom.js'

  export default {
    name: 'wd-swipe',
    created() {
      this.dragState = {}
    },
    mounted() {
      this.ready = true

      if (this.auto > 0) {
        this.timer = setInterval(() => {
          if (!this.loop && (this.index >= this.pages.length - 1)) {
            return this.clearTimer()
          }
          if (!this.dragging && !this.animating) {
            this.next()
          }
        }, this.auto)
      }

      this.reInitPages()

      let element = this.$el

      element.addEventListener('touchstart', (event) => {
        if (this.prevent) {
          event.preventDefault()
        }
        if (this.animating) {
          return
        }
        this.dragging = true
        this.userScrolling = false
        this.doOnTouchStart(event)
      })

      element.addEventListener('touchmove', (event) => {
        if (!this.dragging) {
          return
        }
        this.doOnTouchMove(event)
      })

      element.addEventListener('touchend', (event) => {
        if (this.userScrolling) {
          this.dragging = false
          this.dragState = {}
          return
        }
        if (!this.dragging) {
          return
        }
        this.doOnTouchEnd(event)
        this.dragging = false
      })

      let self = this

      if (this.mousewheel) {
        let events = 'mousewheel DOMMouseScroll MozMousePixelScroll'.split(' ')

        events.forEach(event => {
          this.$el.addEventListener(event, function(e) {
            if (e.deltaY > 0) {
              self.throttle(self.next, self, 1000)
            } else if (e.deltaY < 0) {
              self.throttle(self.prev, self, 1000)
            }
          })
        })
      }

      if (this.keyboard) {
        window.addEventListener('keydown', function(e) {
          switch (e.keyCode) {
            case 37: // ArrowLeft
            case 38: // ArrowUp
              self.prev()
              break
            case 39: // ArrowRight
            case 40: // ArrowDown
              self.next()
              break
          }

          if (e.keyCode in [37, 38, 39, 40] && this.prevent) {
            e.preventDefault()
          }
        })
      }
    },
    destroyed() {
      if (this.timer) {
        this.clearTimer()
      }
      if (this.reInitTimer) {
        clearTimeout(this.reInitTimer)
        this.reInitTimer = null
      }
    },
    data() {
      return {
        ready: false,
        dragging: false,
        userScrolling: false,
        animating: false,
        index: 0,
        pages: [],
        titles: [],
        timer: null,
        reInitTimer: null,
        noDrag: false,
        isDone: false
      }
    },
    computed: {
      title() {
        return this.titles[this.index]
      }
    },
    props: {
      speed: {
        type: Number,
        default: 300
      },
      animationTime: {
        type: Number,
        default: 1000
      },
      timingFunction: {
        type: String,
        default: 'ease-in-out'
      },
      defaultIndex: {
        type: Number,
        default: 0
      },
      auto: {
        type: Number,
        default: 3000
      },
      loop: {
        type: Boolean,
        default: true
      },
      showIndicators: {
        type: Boolean,
        default: true
      },
      showTitle: {
        type: Boolean,
        default: false
      },
      indicatorsType: {
        type: String,
        default: 'dot'
      },
      indicatorsPosition: {
        type: String,
        default: 'center'
      },
      noDragWhenSingle: {
        type: Boolean,
        default: true
      },
      prevent: {
        type: Boolean,
        default: false
      },
      mousewheel: {
        type: Boolean,
        default: false
      },
      keyboard: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      index(newIndex) {
        this.$emit('change', newIndex)
      }
    },
    methods: {
      swipeItemCreated() {
        if (!this.ready) {
          return
        }

        clearTimeout(this.reInitTimer)
        this.reInitTimer = setTimeout(() => {
          this.reInitPages()
        }, 100)
      },
      swipeItemDestroyed() {
        if (!this.ready) {
          return
        }

        clearTimeout(this.reInitTimer)
        this.reInitTimer = setTimeout(() => {
          this.reInitPages()
        }, 100)
      },
      translate(element, offset, speed, callback) {
        if (speed) {
          this.animating = true
          element.style.webkitTransition = `-webkit-transform ${speed}ms ${this.timingFunction}`
          setTimeout(() => {
            element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
          }, 50)

          let called = false

          let transitionEndCallback = () => {
            if (called) {
              return
            }
            called = true
            this.animating = false
            element.style.webkitTransition = ''
            element.style.webkitTransform = ''
            callback && callback.apply(this, arguments)
          }

          once(element, 'webkitTransitionEnd', transitionEndCallback)
          setTimeout(transitionEndCallback, speed + 100)
        } else {
          element.style.webkitTransition = ''
          element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
        }
      },
      reInitPages() {
        let children = this.$children
        this.noDrag = children.length === 1 && this.noDragWhenSingle

        let pages = []
        let titles = []
        let intDefaultIndex = Math.floor(this.defaultIndex)
        let defaultIndex = (intDefaultIndex >= 0 && intDefaultIndex < children.length) ? intDefaultIndex : 0
        this.index = defaultIndex

        children.forEach((child, index) => {
          pages.push(child.$el)
          titles.push(child.title)

          removeClass(child.$el, 'current')

          if (index === defaultIndex) {
            addClass(child.$el, 'current')
          }
        })

        this.pages = pages
        this.titles = titles
      },
      doAnimate(towards, options) {
        if (this.$children.length === 0) {
          return
        }
        if (!options && this.$children.length < 2) {
          return
        }

        let prevPage, currentPage, nextPage, offset, offsetLeft
        let speed = this.speed || 300
        let index = this.index
        let pages = this.pages
        let pageCount = pages.length

        if (!options) {
          offset = this.$el.clientWidth
          currentPage = pages[index]
          prevPage = pages[index - 1]
          nextPage = pages[index + 1]

          if (this.loop && pageCount > 1) {
            if (!prevPage) {
              prevPage = pages[pageCount - 1]
            }
            if (!nextPage) {
              nextPage = pages[0]
            }
          }

          if (prevPage) {
            prevPage.style.display = 'block'
            this.translate(prevPage, -offset)
          }

          if (nextPage) {
            nextPage.style.display = 'block'
            this.translate(nextPage, offset)
          }
        } else {
          prevPage = options.prevPage
          currentPage = options.currentPage
          nextPage = options.nextPage
          offset = options.pageWidth
          offsetLeft = options.offsetLeft
        }

        let newIndex

        let oldPage = this.$children[index].$el

        if (towards === 'prev') {
          if (index > 0) {
            newIndex = index - 1
          }
          if (this.loop && index === 0) {
            newIndex = pageCount - 1
          }
        } else if (towards === 'next') {
          if (index < pageCount - 1) {
            newIndex = index + 1
          }
          if (this.loop && index === pageCount - 1) {
            newIndex = 0
          }
        }

        let callback = () => {
          if (newIndex !== undefined) {
            let newPage = this.$children[newIndex].$el
            removeClass(oldPage, 'current')
            addClass(newPage, 'current')

            this.index = newIndex
          }
          if (this.isDone) {
            this.end()
          }

          if (prevPage) {
            prevPage.style.display = ''
          }

          if (nextPage) {
            nextPage.style.display = ''
          }
        }

        setTimeout(() => {
          if (towards === 'next') {
            this.isDone = true
            this.before(currentPage)
            this.translate(currentPage, -offset, speed, callback)
            if (nextPage) {
              this.translate(nextPage, 0, speed)
            }
          } else if (towards === 'prev') {
            this.isDone = true
            this.before(currentPage)
            this.translate(currentPage, offset, speed, callback)
            if (prevPage) {
              this.translate(prevPage, 0, speed)
            }
          } else {
            this.isDone = false
            this.translate(currentPage, 0, speed, callback)
            if (typeof offsetLeft !== 'undefined') {
              if (prevPage && offsetLeft > 0) {
                this.translate(prevPage, -offset, speed)
              }
              if (nextPage && offsetLeft < 0) {
                this.translate(nextPage, offset, speed)
              }
            } else {
              if (prevPage) {
                this.translate(prevPage, -offset, speed)
              }
              if (nextPage) {
                this.translate(nextPage, offset, speed)
              }
            }
          }
        }, 10)
      },
      next() {
        this.doAnimate('next')
//        if (this.index < this.pageLength - 1) {
//          this.index++
//        } else if (!this.loop) {
//          return
//        } else {
//          this.index = 0
//        }
//        this.moveTo(this.index)
      },
      prev() {
        this.doAnimate('prev')
//        if (this.index > 0) {
//          this.index--
//        } else if (!this.loop) {
//          return
//        } else {
//          this.index = this.pageLength - 1
//        }
//        this.moveTo(this.index)
      },
      before() {
        this.$emit('before', this.index)
      },
      end() {
        this.$emit('end', this.index)
      },
      doOnTouchStart(event) {
        if (this.noDrag) {
          return
        }

        let element = this.$el
        let dragState = this.dragState
        let touch = event.touches[0]

        dragState.startTime = new Date()
        dragState.startLeft = touch.pageX
        dragState.startTop = touch.pageY
        dragState.startTopAbsolute = touch.clientY

        dragState.pageWidth = element.offsetWidth
        dragState.pageHeight = element.offsetHeight

        let prevPage = this.$children[this.index - 1]
        let dragPage = this.$children[this.index]
        let nextPage = this.$children[this.index + 1]

        if (this.loop && this.pages.length > 1) {
          if (!prevPage) {
            prevPage = this.$children[this.$children.length - 1]
          }
          if (!nextPage) {
            nextPage = this.$children[0]
          }
        }

        dragState.prevPage = prevPage ? prevPage.$el : null
        dragState.dragPage = dragPage ? dragPage.$el : null
        dragState.nextPage = nextPage ? nextPage.$el : null

        if (dragState.prevPage) {
          dragState.prevPage.style.display = 'block'
        }

        if (dragState.nextPage) {
          dragState.nextPage.style.display = 'block'
        }
      },
      doOnTouchMove(event) {
        if (this.noDrag) {
          return
        }

        let dragState = this.dragState
        let touch = event.touches[0]

        dragState.currentLeft = touch.pageX
        dragState.currentTop = touch.pageY
        dragState.currentTopAbsolute = touch.clientY

        let offsetLeft = dragState.currentLeft - dragState.startLeft
        let offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute

        let distanceX = Math.abs(offsetLeft)
        let distanceY = Math.abs(offsetTop)
        if (distanceX < 5 || (distanceX >= 5 && distanceY >= 1.73 * distanceX)) {
          this.userScrolling = true
          return
        } else {
          this.userScrolling = false
          event.preventDefault()
        }
        offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1)

        let towards = offsetLeft < 0 ? 'next' : 'prev'

        if (dragState.prevPage && towards === 'prev') {
          this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth)
        }
        this.translate(dragState.dragPage, offsetLeft)
        if (dragState.nextPage && towards === 'next') {
          this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth)
        }
      },
      doOnTouchEnd() {
        if (this.noDrag) {
          return
        }

        let dragState = this.dragState

        let dragDuration = new Date() - dragState.startTime
        let towards = null

        let offsetLeft = dragState.currentLeft - dragState.startLeft
        let offsetTop = dragState.currentTop - dragState.startTop
        let pageWidth = dragState.pageWidth
        let index = this.index
        let pageCount = this.pages.length

        if (dragDuration < 300) {
          let fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5
          if (isNaN(offsetLeft) || isNaN(offsetTop)) {
            fireTap = true
          }
          if (fireTap) {
            this.$children[this.index].$emit('tap')
          }
        }

        if (dragDuration < 300 && dragState.currentLeft === undefined) {
          return
        }

        if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
          towards = offsetLeft < 0 ? 'next' : 'prev'
        }

        if (!this.loop) {
          if ((index === 0 && towards === 'prev') || (index === pageCount - 1 && towards === 'next')) {
            towards = null
          }
        }

        if (this.$children.length < 2) {
          towards = null
        }

        this.doAnimate(towards, {
          offsetLeft: offsetLeft,
          pageWidth: dragState.pageWidth,
          prevPage: dragState.prevPage,
          currentPage: dragState.dragPage,
          nextPage: dragState.nextPage
        })

        this.dragState = {}
      },
      clearTimer() {
        clearInterval(this.timer)
        this.timer = null
      },
      throttle(method, scope, time) {
        time = time || 100
        clearTimeout(method.tId)
        method.tId = setTimeout(function() {
          method.call(scope)
        }, time)
      }
    }
  }
</script>

<style>
.wd-swipe {
  overflow: hidden;
  position: relative;
  height: 300px;
}

.wd-swipe-items-wrap {
  position: relative;
  overflow: hidden;
  height: 100%;
}
.wd-swipe-items-wrap > .wd-swipe-item {
  position: absolute;
  transform: translateX(-100%);
  width: 100%;
  height: 100%;
  display: none;
}
.wd-swipe-items-wrap > .wd-swipe-item.current {
  display: block;
  transform: none;
}

.wd-swipe-indicator-wrap {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
}
.wd-swipe-indicator-wrap-background {
  background: rgba(0,0,0,.2)
}

.wd-swipe-item-title {
  line-height: 70px;
  font-size: 30px;
  text-indent: 1em;
}

.wd-swipe-indicators {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
}

.wd-swipe-indicator {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #FFFFFF;
  opacity: 0.5;
  margin: 0 10px;
}
.wd-swipe-indicator:first-child {
  margin-left: 0;
}
.wd-swipe-indicator:last-child {
  margin-right: 0;
}
.wd-swipe-indicator.current {
  opacity: 1;
}

.wd-swipe-indicators-right {
  position: absolute;
  left: auto;
  right: 20px;
  transform: translateX(0);
}

.wd-swipe-number-indicator {
  position: absolute;
  width: 100px;
  height: 70px;
  right: 0;
  font-size: 18px;
  text-align: center;
  line-height: 70px;
  color: #FFFFFF;
}

.wd-swipe-vertical-indicators {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
}
.wd-swipe-vertical-indicator {
  display: block;
  width: 5px;
  height: 5px;
  border: 4px solid rgba(152,153,151,.6);
  background-color: transparent;
  border-radius: 100%;
  margin: 0 0 40px 0;
  cursor: pointer;
  -webkit-transition: all .36s linear;
  transition: all .36s linear;
  position: relative;
  -webkit-box-sizing: content-box;
  box-sizing: content-box
}
.wd-swipe-vertical-indicator:after,
.wd-swipe-vertical-indicator:before {
  content: '';
  display: inline-block;
  width: 31px;
  height: 31px;
  border: 2px solid transparent;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  border-radius: 100%;
  position: absolute;
  top: -15px;
  left: -15px
}
.wd-swipe-vertical-indicator:before {
  width: 21px;
  height: 21px;
  top: -10px;
  left: -10px;
  opacity: .3
}
.wd-swipe-vertical-indicator:hover,
.wd-swipe-vertical-indicator.current {
  border-color: #fff;
  background-color: #258fb8;
}
.wd-swipe-vertical-indicator.current:before,
.wd-swipe-vertical-indicator.current:after {
  border-color: #258fb8;
  -webkit-animation: blink 3s linear infinite;
  animation: blink 3s linear infinite
}
@-webkit-keyframes blink {
  0% {
    -webkit-transform: scale(0) translateZ(0);
    transform: scale(0) translateZ(0);
    opacity: 0
  }

  85% {
    opacity: 1
  }

  100% {
    opacity: 0;
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0)
  }
}
@keyframes blink {
  0% {
    transform: scale(0) translateZ(0);
    opacity: 0
  }

  85% {
    opacity: 1
  }

  100% {
    opacity: 0;
    transform: scale(1) translateZ(0)
  }
}
</style>
