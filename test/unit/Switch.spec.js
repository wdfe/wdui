/* eslint-disable no-undef */
import Vue from 'vue'
import Switch from '../../packages/Switch/index.js'
import {createCompInstance} from './utils.js'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Switch.name, Switch)

describe('Switch', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('Switch 默认样式', () => {
    vm = createCompInstance(Switch)
    expect(Array.prototype.slice.call(vm.$el.classList)).to.include('wd-switch')
  })

  it('Switch 默认值', () => {
    vm = createCompInstance(Switch)
    expect(vm.value).to.equal(false)
  })

  it('Switch 更新值', done => {
    vm = createVueInstance({
      template: `
        <div>
          <div>
            <wd-switch ref="switch" v-model="value">标签</wd-switch>
          </div>
        </div>
      `,
      data() {
        return {
          value: false
        }
      }
    })

    Vue.nextTick(() => {
      expect(vm.value).to.equal(false)
      vm.$refs.switch.$el.click()
      Vue.nextTick(() => {
        expect(vm.value).to.equal(true)
        vm.$refs.switch.$el.click()
        Vue.nextTick(() => {
          expect(vm.value).to.equal(false)
          done()
        })
      })
    })
  })

})
