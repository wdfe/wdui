/* eslint-disable no-undef */
import Scroller from '../../packages/Scroller/index.js'
// import scrollerLoader from '../../packages/Scroller/src/ScrollerLoader.vue'
import {createVueInstance, destroyVM} from './utils.js'
import Vue from 'vue'
Vue.component(Scroller.name, Scroller)

describe('Scroller', () => {
  it('scroller initial 默认样式', done => {
    let vm
    vm = createVueInstance({
      template: `
        <wd-scroller
          :on-refresh="updateData"
          refreshText="下拉加载更多呦"
          loadingText="正在加载更多哦~"
          ref="wrap"
          >
          <ul class="page-infinite-list">
            <li v-for="item in list" class="page-infinite-listitem">{{item}}</li>
          </ul>
        </wd-scroller>
      `,
      data() {
        return {
          list: []
        }
      },
      created() {
        for (let i = 1; i <= 30; i++) {
          this.list.push(i)
        }
      }
    })
    Vue.nextTick(() => {
      console.log(vm)
      const $dom = vm.$refs.wrap.$el.querySelecter('.wd-scroller')
      console.log($dom)
      // expect($dom).to.exist
      // const $refreshText = $dom.querySelecter('.wd-scroller-refresh-text')
      // expect($refreshText.textContent).to.equal('下拉加载更多哦')
      // destroyVM()
      done()
    })
    
  })
})