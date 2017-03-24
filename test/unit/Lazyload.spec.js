/* eslint-disable no-undef */
import Vue from 'vue'
import Lazyload from '../../packages/Lazyload'
import {createVueInstance, destroyVM} from './utils.js'

Vue.use(Lazyload, {try: 3})

describe('Lazyload', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('img 元素方式', done => {
    vm = createVueInstance({
      template: `
        <div>
          <img v-show="show" v-lazy="imgUrl">
        </div>
      `,
      data() {
        return {
          imgUrl: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480',
          show: false
        }
      },
      mounted() {
      }
    })

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('img').src).to.equal('')
      vm.show = true
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('img').src).to.not.equal('')
      done()
    }, 800)
  })

  it('background-image 方式', done => {
    vm = createVueInstance({
      template: `
        <div>
          <div class="img" v-show="show" v-lazy:background-image="imgUrl"></div>
        </div>
      `,
      data() {
        return {
          imgUrl: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480',
          show: false
        }
      },
      mounted() {
      }
    })

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.img').style.background).to.equal('')
      vm.$el.style.paddingTop = 0
      vm.show = true
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('.img').style.background).to.not.equal('')
      done()
    }, 800)
  })

})
