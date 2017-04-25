/* eslint-disable no-undef */
import Vue from 'vue'
import TabContainer from '../../packages/TabContainer/index.js'
import TabContainerItem from '../../packages/TabContainerItem/index.js'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)

describe('TabContainer', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('initial 默认样式', done => {
    vm = createVueInstance({
      template: `
        <wd-tab-container v-model="selectedTabId" class="tab-container" ref="tabContainer">
          <wd-tab-container-item tabId="tab1">tab1 内容</wd-tab-container-item>
          <wd-tab-container-item tabId="tab2">tab2 内容</wd-tab-container-item>
          <wd-tab-container-item tabId="tab3">tab3 内容</wd-tab-container-item>
          <wd-tab-container-item tabId="tab4">tab4 内容</wd-tab-container-item>
        </wd-tab-container>
      `,
      data() {
        return {
          selectedTabId: 'tab1'
        }
      }
    })
    Vue.nextTick(() => {
      let $dom = vm.$refs.tabContainer.$el
      let $tab1 = $dom.children[0]
      let $tab2 = $dom.children[1]
      let $tab3 = $dom.children[2]
      let $tab4 = $dom.children[3]
      expect($tab1.style.display).to.not.equal('none')
      expect($tab2.style.display).to.equal('none')
      expect($tab3.style.display).to.equal('none')
      expect($tab4.style.display).to.equal('none')
      done()
    })
  })
})
