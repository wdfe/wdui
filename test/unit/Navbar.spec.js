/* eslint-disable no-undef */
import Vue from 'vue'
import Navbar from '../../packages/Navbar/index.js'
import TabItem from '../../packages/TabItem/index.js'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

describe('Navbar', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('initial 默认样式', done => {
    vm = createVueInstance({
      template: `
        <wd-navbar v-model="selectedTabId" ref="navbar">
          <wd-tab-item tabId="tab1">tab1</wd-tab-item>
          <wd-tab-item tabId="tab2">tab2</wd-tab-item>
          <wd-tab-item tabId="tab3">tab3</wd-tab-item>
          <wd-tab-item tabId="tab4">tab4</wd-tab-item>
        </wd-navbar>
      `,
      data() {
        return {
          selectedTabId: 'tab1'
        }
      }
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.navbar.$el
      let $tab1 = $dom.children[0]
      expect(Array.prototype.slice.call($tab1.classList)).to.include('active')
      done()
    })
  })

  it('v-model 点击更换', done => {
    vm = createVueInstance({
      template: `
        <wd-navbar v-model="selectedTabId" ref="navbar">
          <wd-tab-item tabId="tab1">tab1</wd-tab-item>
          <wd-tab-item tabId="tab2">tab2</wd-tab-item>
          <wd-tab-item tabId="tab3">tab3</wd-tab-item>
          <wd-tab-item tabId="tab4">tab4</wd-tab-item>
        </wd-navbar>
      `,
      data() {
        return {
          selectedTabId: 'tab1'
        }
      }
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.navbar.$el
      let $tab2 = $dom.children[1]
      $tab2.click()
      Vue.nextTick(() => {
        expect(Array.prototype.slice.call($tab2.classList)).to.include('active')
        done()
      })
    })
  })
})
