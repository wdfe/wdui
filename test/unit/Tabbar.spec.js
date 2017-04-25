/* eslint-disable no-undef */
import Vue from 'vue'
import Tabbar from '../../packages/Tabbar/index.js'
import TabItem from '../../packages/TabItem/index.js'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

describe('Tabbar', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('initial 默认样式', done => {
    vm = createVueInstance({
      template: `
        <wd-tabbar v-model="selectedTabId" ref="tabbar">
          <wd-tab-item tabId="tab1">
            <div slot="icon" class="icon"></div>
            tab1
          </wd-tab-item>
          <wd-tab-item tabId="tab2">
            <div slot="icon" class="icon"></div>
            tab2
          </wd-tab-item>
          <wd-tab-item tabId="tab3">
            <div slot="icon" class="icon"></div>
            tab3
          </wd-tab-item>
          <wd-tab-item tabId="tab4">
            <div slot="icon" class="icon"></div>
            tab4
          </wd-tab-item>
        </wd-tabbar>
      `,
      data() {
        return {
          selectedTabId: 'tab1'
        }
      }
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.tabbar.$el
      let $tab1 = $dom.children[0]
      expect(Array.prototype.slice.call($tab1.classList)).to.include('active')
      done()
    })
  })

  it('v-model 点击更换', done => {
    vm = createVueInstance({
      template: `
        <wd-tabbar v-model="selectedTabId" ref="tabbar">
          <wd-tab-item tabId="tab1">
            <div slot="icon" class="icon"></div>
            tab1
          </wd-tab-item>
          <wd-tab-item tabId="tab2">
            <div slot="icon" class="icon"></div>
            tab2
          </wd-tab-item>
          <wd-tab-item tabId="tab3">
            <div slot="icon" class="icon"></div>
            tab3
          </wd-tab-item>
          <wd-tab-item tabId="tab4">
            <div slot="icon" class="icon"></div>
            tab4
          </wd-tab-item>
        </wd-tabbar>
      `,
      data() {
        return {
          selectedTabId: 'tab1'
        }
      }
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.tabbar.$el
      let $tab2 = $dom.children[1]
      $tab2.click()
      Vue.nextTick(() => {
        expect(Array.prototype.slice.call($tab2.classList)).to.include('active')
        done()
      })
    })
  })

  it('fixed fixed布局', done => {
    vm = createVueInstance({
      template: `
        <wd-tabbar v-model="selectedTabId" fixed ref="tabbar">
          <wd-tab-item tabId="tab1">
            <div slot="icon" class="icon"></div>
            tab1
          </wd-tab-item>
          <wd-tab-item tabId="tab2">
            <div slot="icon" class="icon"></div>
            tab2
          </wd-tab-item>
          <wd-tab-item tabId="tab3">
            <div slot="icon" class="icon"></div>
            tab3
          </wd-tab-item>
          <wd-tab-item tabId="tab4">
            <div slot="icon" class="icon"></div>
            tab4
          </wd-tab-item>
        </wd-tabbar>
      `,
      data() {
        return {
          selectedTabId: 'tab1'
        }
      }
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.tabbar.$el
      expect($dom.style.position).to.include('fixed')
      done()
    })
  })
})
