/* eslint-disable no-undef */
import Vue from 'vue'
import Badge from '../../packages/Badge/index.js'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Badge.name, Badge)

describe('Badge', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('initial 基础小红点', done => {
    vm = createVueInstance({
      template: `
        <wd-badge ref="badge"></wd-badge>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.badge.$el
      expect(Array.prototype.slice.call($dom.classList)).to.include('noValue')
      done()
    })
  })

  it('value 有数值', done => {
    vm = createVueInstance({
      template: `
        <wd-badge value="3" ref="badge"></wd-badge>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.badge.$el
      expect($dom.textContent).to.equal('3')
      done()
    })
  })

  it('limit 数值过大时限制', done => {
    vm = createVueInstance({
      template: `
        <wd-badge :value="128" :limit="99" ref="badge"></wd-badge>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.badge.$el
      expect($dom.textContent).to.equal('99+')
      done()
    })
  })

  it('border 带描边', done => {
    vm = createVueInstance({
      template: `
        <wd-badge :value="128" :limit="99" ref="badge" border></wd-badge>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.badge.$el
      expect(Array.prototype.slice.call($dom.classList)).to.include('border')
      done()
    })
  })

})
