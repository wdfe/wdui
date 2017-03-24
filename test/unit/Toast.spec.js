/* eslint-disable no-undef */
import Toast from '../../packages/Toast/index.js'
import Vue from 'vue'
// import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Toast.name, Toast)
describe('Toast', () => {
  let vm
  it('Toast initial 默认样式', done => {
    vm = Toast({
      content: 'Hello'
    })
    Vue.nextTick(() => {
      const $dom = document.querySelector('.wd-toast-box')
      expect($dom).to.exist
      vm.close()
    })
    Vue.nextTick(() => {
      setTimeout(() => {
        done()
      }, 1000)
    })
  })
  it('Toast 带有icon loader样式', done => {
    vm = Toast({
      content: 'Hello',
      iconClass: 'loader'
    })
    Vue.nextTick(() => {
      const $dom = document.querySelector('.wd-toast-box-haveicon')
      expect($dom).to.exist
      const $loader = document.querySelector('.wd-spin-wrap')
      expect($loader).to.exist
      vm.close()
    })
    Vue.nextTick(() => {
      setTimeout(() => {
        done()
      }, 1000)
    })
  })
  it('Toast 带有icon success', done => {
    vm = Toast({
      content: 'Hello',
      iconClass: 'success'
    })
    Vue.nextTick(() => {
      const $dom = document.querySelector('.wd-toast-box-haveicon')
      expect($dom).to.exist
      const $success = document.querySelector('.success')
      expect($success).to.exist
      vm.close()
    })
    Vue.nextTick(() => {
      setTimeout(() => {
        done()
      }, 1000)
    })
  })
  it('Toast 主题切换 Light', done => {
    vm = Toast({
      theme: 'Light',
      content: '弹层',
      iconClass: 'loader'
    })
    Vue.nextTick(() => {
      const $dom = document.querySelector('.wd-toast-theme-light')
      expect($dom).to.exist
      vm.close()
    })
    Vue.nextTick(() => {
      setTimeout(() => {
        done()
      }, 1000)
    })
  })
  it('Toast 自动关闭', done => {
    vm = Toast({
      content: 'Hello',
      duration: 300
    })
    Vue.nextTick(() => {
      setTimeout(() => {
        const $dom = document.querySelector('.wd-toast-box')
        expect($dom).to.not.exist
      }, 1000)
    })
    Vue.nextTick(() => {
      setTimeout(() => {
        done()
      }, 1000)
    })
  })
})
