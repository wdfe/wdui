/* eslint-disable no-undef */
import Vue from 'vue'
import Dialog from '../../packages/Dialog/index.js'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Dialog.name, Dialog)

describe('Dialog', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('initial 默认样式', done => {
    vm = createVueInstance({
      template: `
        <wd-dialog v-model="flag" ref="popup">
          <p>dialog</p>
        </wd-dialog>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    Vue.nextTick(() => {
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('dialog-fade-enter')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('dialog-fade-enter-active')
    })
    setTimeout(() => {
      expect(vm.$refs.popup.$el.querySelector('p').textContent).to.equal('dialog')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('wd-dialog')
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.not.include('dialog-fade-enter')
      vm.flag = false
      setTimeout(() => {
        done()
      }, 500)
    }, 600)
  })

  it('slot footer', done => {
    vm = createVueInstance({
      template: `
        <wd-dialog v-model="flag" ref="popup">
          <p slot="footer" class="dialog-footer">footer</p>
        </wd-dialog>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    setTimeout(() => {
      expect(vm.$refs.popup.$el.querySelector('.dialog-footer').textContent).to.equal('footer')
      vm.flag = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('dialog 点击关闭', done => {
    vm = createVueInstance({
      template: `
        <wd-dialog v-model="flag" ref="popup">
          <p>dialogClass</p>
        </wd-dialog>
      `,
      data() {
        return {
          flag: true
        }
      }
    })
    vm.flag = false
    setTimeout(() => {
      expect({}.toString.call(vm.$refs.popup.$el)).to.equal('[object Comment]')
      done()
    }, 200)
  })

  it('dialog 自定义class', done => {
    vm = createVueInstance({
      template: `
        <wd-dialog v-model="flag" ref="popup" dialogClass="dialogClass">
          <p>dialogClass</p>
        </wd-dialog>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    setTimeout(() => {
      expect(Array.prototype.slice.call(vm.$refs.popup.$el.classList)).to.include('dialogClass')
      vm.flag = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('dialog showClose', done => {
    vm = createVueInstance({
      template: `
        <wd-dialog v-model="flag" ref="popup" :showClose="false">
          <p>showClose</p>
        </wd-dialog>
      `,
      data() {
        return {
          flag: false
        }
      }
    })
    vm.flag = true
    setTimeout(() => {
      expect(vm.$refs.popup.$el.querySelector('.wd-dialog-header-close')).to.equal(null)
      vm.flag = false
      setTimeout(() => {
        done()
      }, 500)
    }, 600)
  })

  it('maskColor 蒙版颜色', done => {
    vm = createVueInstance({
      template: `
        <wd-dialog v-model="flag" ref="popup" maskColor="red">
          <p>maskColor</p>
        </wd-dialog>
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
      vm.flag = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('maskOpacity 蒙版透明度', done => {
    vm = createVueInstance({
      template: `
        <wd-dialog v-model="flag" ref="popup" maskOpacity="0.9">
          <p>closeWhenClicked</p>
        </wd-dialog>
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
      vm.flag = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('maskClick 蒙版点击回调', done => {
    vm = createVueInstance({
      template: `
        <wd-dialog v-model="flag" ref="popup" @maskClick="token = true">
          <p>closeWhenClicked</p>
        </wd-dialog>
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
      vm.flag = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('dialog 打开回调', done => {
    vm = createVueInstance({
      template: `
        <wd-dialog v-model="flag" ref="popup" :onShow="showCb">
          <p>onShow</p>
        </wd-dialog>
      `,
      data() {
        return {
          flag: false,
          token: false
        }
      },
      methods: {
        showCb() {
          this.token = true
        }
      }
    })
    vm.flag = true
    setTimeout(() => {
      expect(vm.token).to.be.true
      vm.flag = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('dialog 关闭回调', done => {
    vm = createVueInstance({
      template: `
        <wd-dialog v-model="flag" ref="popup" :onHide="hideCb">
          <p>hideCb</p>
        </wd-dialog>
      `,
      data() {
        return {
          flag: true,
          token: true
        }
      },
      methods: {
        hideCb() {
          this.token = false
        }
      }
    })
    Vue.nextTick(() => {
      vm.flag = false
      setTimeout(() => {
        expect(vm.token).to.be.false
        done()
      }, 500)
    })
  })

})
