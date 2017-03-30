/* eslint-disable no-undef */
import Scroller from '../../packages/Scroller/index.js'
import {createVueInstance, destroyVM} from './utils.js'
import Vue from 'vue'

Vue.component(Scroller.name, Scroller)

describe('Scroller', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('scroller initial 默认样式', done => {
    vm = createVueInstance({
      template: `
        <wd-scroller
          :on-refresh="updateData"
          :on-load="loadData"
          refreshText="下拉加载更多呦"
          loadingText="正在加载更多哦~"
          loadText="上拉加载更多"
          noDataText="更多数据敬请期待"
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
      mounted() {
        for (let i = 1; i <= 30; i++) {
          this.list.push(i)
        }
      },
      methods: {
        updateData() {
          setTimeout(() => {
            let last = +this.list[0] - 1
            if(last < 0) {
              this.$refs.wrap.noMoreRefresh()
              return
            }
            for (let i = last; i > last - 10; i--) {
              this.list.splice(0, 0, i)
            }
            this.$refs.wrap.finishPullToRefresh()
          }, 2000)
        },
        loadData() {
          setTimeout(() => {
            let last = +this.list.slice(-1) + 1
            let moreload = last + 10
            for(let i = last; i < moreload; i++){
              this.list.push(i)
            }
            this.$refs.wrap.finishInfiniteLoading()
          }, 3000)
        }
      }
    })
    setTimeout(() => {
      let $dom = document.querySelector('.page-infinite-list')
      expect($dom.querySelectorAll('li').length).to.equal(30)
      done()
    }, 1000)
  })
})
