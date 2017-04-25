/* eslint-disable no-undef */
import Vue from 'vue'
import Header from '../../packages/Header/index.js'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Header.name, Header)

describe('Header', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('initial 默认样式', done => {
    vm = createVueInstance({
      template: `
        <wd-header title="标准标题" ref="header"></wd-header>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.header.$el
      let $content = $dom.querySelector('content')
      expect($dom.style.position).to.equal('relative')
      expect($content.textContent).to.equal('标准标题')
      done()
    })
  })

  it('left slot 左侧容器', done => {
    vm = createVueInstance({
      template: `
        <wd-header title="左侧容器" ref="header">
          <router-link to="/" slot="left">
            <span class="left-content">返回</span>
          </router-link>
        </wd-header>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.header.$el
      let $content = $dom.querySelector('content')
      let $leftContent = $dom.querySelector('.left-content')
      expect($dom.style.position).to.equal('relative')
      expect($content.textContent).to.equal('左侧容器')
      expect($leftContent.textContent).to.equal('返回')
      done()
    })
  })

  it('right slot 右侧容器', done => {
    vm = createVueInstance({
      template: `
        <wd-header title="右侧容器" ref="header">
          <router-link to="/" slot="right">
            <span class="right-content">返回</span>
          </router-link>
        </wd-header>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.header.$el
      let $content = $dom.querySelector('content')
      let $rightContent = $dom.querySelector('.right-content')
      expect($dom.style.position).to.equal('relative')
      expect($content.textContent).to.equal('右侧容器')
      expect($rightContent.textContent).to.equal('返回')
      done()
    })
  })

  it('title slot 复杂样式标题', done => {
    vm = createVueInstance({
      template: `
        <wd-header ref="header">
          <p slot="title" class="title">复杂样式标题</p>
        </wd-header>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.header.$el
      let $title = $dom.querySelector('.title')
      expect($dom.style.position).to.equal('relative')
      expect($title.textContent).to.equal('复杂样式标题')
      done()
    })
  })

  it('fixed 悬挂标题', done => {
    vm = createVueInstance({
      template: `
        <wd-header fixed title="悬挂标题" ref="header"></wd-header>
      `
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.header.$el
      let $content = $dom.querySelector('content')
      expect($dom.style.position).to.equal('fixed')
      expect($content.textContent).to.equal('悬挂标题')
      done()
    })
  })

})
