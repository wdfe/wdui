/* eslint-disable no-undef */
import Vue from 'vue'
import Cell from '../../packages/Cell/index.js'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Cell.name, Cell)

describe('Cell', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('initial 默认样式', done => {
    vm = createVueInstance({
      template: `
        <wd-cell title="标准标题" ref="cell" value="辅助说明"></wd-cell>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.cell.$el
      let $left = $dom.querySelector('.wd-cell-left-wrapper')
      let $right = $dom.querySelector('.wd-cell-right-wrapper')
      expect($left.textContent.trim()).to.equal('标准标题')
      expect($right.textContent.trim()).to.equal('辅助说明')
      done()
    })
  })

  it('to 带链接', done => {
    vm = createVueInstance({
      template: `
        <wd-cell title="标准标题" ref="cell" to="#token"></wd-cell>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.cell.$el
      let $left = $dom.querySelector('.wd-cell-left-wrapper')
      expect($left.textContent.trim()).to.equal('标准标题')
      $dom.click()
      expect(/#token/.test(location.href)).to.be.true
      done()
    })
  })

  it('left-slot 左侧容器', done => {
    vm = createVueInstance({
      template: `
        <wd-cell ref="cell">
          <p slot="left">自定义左侧</p>
        </wd-cell>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.cell.$el
      let $left = $dom.querySelector('.wd-cell-left-wrapper p')
      expect($left.textContent).to.equal('自定义左侧')
      done()
    })
  })

  it('right-slot 右侧容器', done => {
    vm = createVueInstance({
      template: `
        <wd-cell ref="cell">
          <p slot="right">自定义右侧</p>
        </wd-cell>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.cell.$el
      let $right = $dom.querySelector('.wd-cell-right-wrapper p')
      $dom.click()
      expect($right.textContent).to.equal('自定义右侧')
      done()
    })
  })

})
