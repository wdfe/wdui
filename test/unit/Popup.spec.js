/* eslint-disable no-undef */
import Popup from '../../packages/Popup/index.js'
import Vue from 'vue'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Popup.name, Popup)

describe('Popup', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('initial 默认bottom样式', done => {
    vm = createVueInstance({
      template: `
        <wd-popup v-model="flag" ref="popup">
          <p>bottom</p>
        </wd-popup>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    Vue.nextTick(() => {
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup-bottom-enter')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup-bottom-enter-active')
    })
    setTimeout(() => {
      expect(vm.$refs.popup.$el.querySelector('p').textContent).to.equal('bottom')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.not.include('wd-popup-bottom-enter')
      done()
    }, 600)
  })

  it('top top样式', done => {
    vm = createVueInstance({
      template: `
        <wd-popup v-model="flag" ref="popup" position="top">
          <p>top</p>
        </wd-popup>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    Vue.nextTick(() => {
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup-top-enter')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup-top-enter-active')
    })
    setTimeout(() => {
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.not.include('wd-popup-top-enter')
      done()
    }, 600)
  })

  it('left left样式', done => {
    vm = createVueInstance({
      template: `
        <wd-popup v-model="flag" ref="popup" position="left">
          <p>left</p>
        </wd-popup>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    Vue.nextTick(() => {
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup-left-enter')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup-left-enter-active')
    })
    setTimeout(() => {
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.not.include('wd-popup-left-enter')
      done()
    }, 600)
  })

  it('right right样式', done => {
    vm = createVueInstance({
      template: `
        <wd-popup v-model="flag" ref="popup" position="right">
          <p>right</p>
        </wd-popup>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    Vue.nextTick(() => {
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup-right-enter')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup-right-enter-active')
    })
    setTimeout(() => {
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-popup')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.not.include('wd-popup-right-enter')
      done()
    }, 600)
  })

  it('cover 70%样式', done => {
    vm = createVueInstance({
      template: `
        <wd-popup v-model="flag" ref="popup" position="left" cover="70%">
          <p>left</p>
        </wd-popup>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    setTimeout(() => {
      expect(vm.$refs.popup.$el.style.width).to.equal('70%')
      done()
    }, 600)
  })

  it('cover 300px样式', done => {
    vm = createVueInstance({
      template: `
        <wd-popup v-model="flag" ref="popup" position="left" cover="300px">
          <p>left</p>
        </wd-popup>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    setTimeout(() => {
      expect(vm.$refs.popup.$el.style.width).to.equal('300px')
      done()
    }, 600)
  })

  it('closeWhenClicked 点击model关闭', done => {
    vm = createVueInstance({
      template: `
        <wd-popup v-model="flag" ref="popup" closeWhenClicked>
          <p>closeWhenClicked</p>
        </wd-popup>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    setTimeout(() => {
      vm.$refs.popup.$el.click()
      setTimeout(() => {
        //todo investigate
        if(vm.$refs.popup) {
          expect({}.toString.call(vm.$refs.popup.$el)).to.equal('[object Comment]')
        }else {
          expect(vm.$refs.popup).to.be.undefined
        }
        done()
      }, 300)
    }, 300)
  })

  it('maskColor 蒙版颜色', done => {
    vm = createVueInstance({
      template: `
        <wd-popup v-model="flag" ref="popup" maskColor="red">
          <p>closeWhenClicked</p>
        </wd-popup>
      `,
      data() {
        return {
          flag: false
        }
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
        <wd-popup v-model="flag" ref="popup" maskOpacity="0.9">
          <p>closeWhenClicked</p>
        </wd-popup>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      expect($mask.style.opacity).to.equal('0.9')
      done()
    }, 200)
  })

  it('maskClick 蒙版点击回调', done => {
    vm = createVueInstance({
      template: `
        <wd-popup v-model="flag" ref="popup" @maskClick="token = true">
          <p>closeWhenClicked</p>
        </wd-popup>
      `,
      data() {
        return {
          flag: false,
          token: false
        }
      }
    })
    vm.flag = true
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      $mask.click()
      expect(vm.token).to.be.true
      done()
    }, 200)
  })

})
