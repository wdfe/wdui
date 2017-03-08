/* eslint-disable no-undef */
import Tooltip from '../../packages/Tooltip/index.js'
import Vue from 'vue'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Tooltip.name, Tooltip)

describe('Tooltip', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('initial 默认Tooltip样式', done => {
    vm = createVueInstance({
      template: `
        <div>
          <p id="locator" style="position: fixed; top: 0; left: 0; margin: 0; padding: 0;">locator</p>
          <wd-tooltip v-model="flag" :locator="locator" ref="tooltip">
            <p id="content" @click="flag = false" style="width: 150px;height: 100px;">click to close tooltip</p>
          </wd-tooltip>
        </div>
      `,
      data() {
        return {
          flag: false,
          locator: null
        }
      },
      mounted() {
        this.locator = document.querySelector('#locator')
      }
    })
    vm.flag = true
    Vue.nextTick(() => {
      expect(Array.prototype.slice.call(vm.$refs.tooltip.$el.classList)).to.include('wd-tooltip-fade-enter')
      expect(Array.prototype.slice.call(vm.$refs.tooltip.$el.classList)).to.include('wd-tooltip-fade-enter-active')
    })
    setTimeout(() => {
      expect(Array.prototype.slice.call(vm.$refs.tooltip.$el.classList)).to.include('wd-tooltip')
      expect(Array.prototype.slice.call(vm.$refs.tooltip.$el.classList)).to.not.include('wd-tooltip-fade-enter-active')
      done()
    }, 600)
  })

  it('default position自动判断 bottom', done => {
    vm = createVueInstance({
      template: `
        <div>
          <p id="locator" style="position: fixed; top: 0; left: 0; margin: 0; padding: 0;">locator</p>
          <wd-tooltip v-model="flag" :locator="locator" ref="tooltip">
            <p id="content" @click="flag = false" style="width: 150px;height: 100px;">click to close tooltip</p>
          </wd-tooltip>
        </div>
      `,
      data() {
        return {
          flag: false,
          locator: null
        }
      },
      mounted() {
        this.locator = document.querySelector('#locator')
      }
    })
    vm.flag = true
    setTimeout(() => {
      const locatorTop = document.querySelector('#locator').getBoundingClientRect().top
      const tooltipTop = vm.$refs.tooltip.$el.getBoundingClientRect().top
      expect(tooltipTop > locatorTop).to.be.true
      done()
    }, 600)
  })

  it('default position自动判断 top', done => {
    vm = createVueInstance({
      template: `
        <div>
          <p id="locator" style="position: fixed; top: 500px; left: 0; margin: 0; padding: 0;">locator</p>
          <wd-tooltip v-model="flag" :locator="locator" ref="tooltip">
            <p id="content" @click="flag = false" style="width: 150px;height: 100px;">click to close tooltip</p>
          </wd-tooltip>
        </div>
      `,
      data() {
        return {
          flag: false,
          locator: null
        }
      },
      mounted() {
        this.locator = document.querySelector('#locator')
      }
    })
    vm.flag = true
    setTimeout(() => {
      const locatorTop = document.querySelector('#locator').getBoundingClientRect().top
      const tooltipTop = vm.$refs.tooltip.$el.getBoundingClientRect().top
      expect(tooltipTop < locatorTop).to.be.true
      done()
    }, 600)
  })

  it('default 尺寸自动计算 left', done => {
    vm = createVueInstance({
      template: `
        <div>
          <p id="locator" style="position: fixed; top: 0; left: 30px; margin: 0; padding: 0; display: inline-block; width: 80px;">locator</p>
          <wd-tooltip v-model="flag" :locator="locator" ref="tooltip">
            <p id="content" @click="flag = false" style="width: 200px;height: 100px;">click to close tooltip</p>
          </wd-tooltip>
        </div>
      `,
      data() {
        return {
          flag: false,
          locator: null
        }
      },
      mounted() {
        this.locator = document.querySelector('#locator')
      }
    })
    vm.flag = true
    setTimeout(() => {
      expect(vm.$refs.tooltip.$el.getBoundingClientRect().left > 0).to.be.true
      done()
    }, 600)
  })

  it('default 尺寸自动计算 right', done => {
    vm = createVueInstance({
      template: `
        <div>
          <p id="locator" style="position: fixed; top: 500px; right: 30px; margin: 0; padding: 0; display: inline-block; width: 80px;">locator</p>
          <wd-tooltip v-model="flag" :locator="locator" ref="tooltip">
            <p id="content" @click="flag = false" style="width: 200px;height: 100px;">click to close tooltip</p>
          </wd-tooltip>
        </div>
      `,
      data() {
        return {
          flag: false,
          locator: null
        }
      },
      mounted() {
        this.locator = document.querySelector('#locator')
      }
    })
    vm.flag = true
    setTimeout(() => {
      expect(document.documentElement.clientWidth - vm.$refs.tooltip.$el.getBoundingClientRect().right > 0).to.be.true
      done()
    }, 600)
  })

  it('position 指定位置 top', done => {
    vm = createVueInstance({
      template: `
        <div>
          <p id="locator" style="position: fixed; top: 100px; right: 30px; margin: 0; padding: 0; display: inline-block; width: 80px;">locator</p>
          <wd-tooltip v-model="flag" :locator="locator" ref="tooltip" position="top">
            <p id="content" @click="flag = false" style="width: 200px;height: 100px;">click to close tooltip</p>
          </wd-tooltip>
        </div>
      `,
      data() {
        return {
          flag: false,
          locator: null
        }
      },
      mounted() {
        this.locator = document.querySelector('#locator')
      }
    })
    vm.flag = true
    setTimeout(() => {
      const locatorTop = document.querySelector('#locator').getBoundingClientRect().top
      const tooltipTop = vm.$refs.tooltip.$el.getBoundingClientRect().top
      expect(locatorTop - tooltipTop > 0).to.be.true
      done()
    }, 600)
  })

  it('onMaskClick 蒙版点击回调', done => {
    vm = createVueInstance({
      template: `
        <div>
          <p id="locator" style="position: fixed; top: 100px; right: 30px; margin: 0; padding: 0; display: inline-block; width: 80px;">locator</p>
          <wd-tooltip v-model="flag" :locator="locator" ref="tooltip" position="top" @maskClick="token = true">
            <p id="content" @click="flag = false" style="width: 200px;height: 100px;">click to close tooltip</p>
          </wd-tooltip>
        </div>
      `,
      data() {
        return {
          flag: false,
          locator: null,
          token: false
        }
      },
      mounted() {
        this.locator = document.querySelector('#locator')
      }
    })
    vm.flag = true
    Vue.nextTick(() => {
      const $mask = document.querySelector('.wd-mask')
      $mask.click()
      setTimeout(() => {
        expect(vm.token).to.be.true
        done()
      }, 800)
    })
  })

  it('maskColor 蒙版颜色', done => {
    vm = createVueInstance({
      template: `
        <div>
          <p id="locator" style="position: fixed; top: 100px; right: 30px; margin: 0; padding: 0; display: inline-block; width: 80px;">locator</p>
          <wd-tooltip v-model="flag" :locator="locator" ref="tooltip" position="top" @maskClick="token = true" maskColor="red">
            <p id="content" @click="flag = false" style="width: 200px;height: 100px;">click to close tooltip</p>
          </wd-tooltip>
        </div>
      `,
      data() {
        return {
          flag: false,
          locator: null,
          token: false
        }
      },
      mounted() {
        this.locator = document.querySelector('#locator')
      }
    })
    vm.flag = true
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      expect($mask.style.backgroundColor).to.equal('red')
      done()
    }, 200)
  })

  it('maskOpacity 蒙版透明度', done => {
    vm = createVueInstance({
      template: `
        <div>
          <p id="locator" style="position: fixed; top: 100px; right: 30px; margin: 0; padding: 0; display: inline-block; width: 80px;">locator</p>
          <wd-tooltip v-model="flag" :locator="locator" ref="tooltip" position="top" @maskClick="token = true" maskOpacity="0.9">
            <p id="content" @click="flag = false" style="width: 200px;height: 100px;">click to close tooltip</p>
          </wd-tooltip>
        </div>
      `,
      data() {
        return {
          flag: false,
          locator: null,
          token: false
        }
      },
      mounted() {
        this.locator = document.querySelector('#locator')
      }
    })
    vm.flag = true
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      expect($mask.style.opacity).to.equal('0.9')
      done()
    }, 200)
  })

})
