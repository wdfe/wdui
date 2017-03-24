/* eslint-disable no-undef */
import Swipe from '../../packages/Swipe/index.js'
import SwipeItem from '../../packages/SwipeItem/index.js'
import Vue from 'vue'
import {createVueInstance, destroyVM} from './utils.js'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


describe('Swipe', () => {

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('基础用法', done => {
    vm = createVueInstance({
      template: `
          <div>
            <wd-swipe ref="swipe">
              <wd-swipe-item ref="page1">page1</wd-swipe-item>
              <wd-swipe-item ref="page2">page2</wd-swipe-item>
              <wd-swipe-item ref="page3">page3</wd-swipe-item>
           </wd-swipe>
          </div>
        `,
    })

    Vue.nextTick(() => {
      expect(Array.prototype.slice.call(vm.$refs.swipe.$el.classList)).to.include('wd-swipe')
      expect(Array.prototype.slice.call(vm.$refs.page1.$el.classList)).to.include('wd-swipe-item')
      done()
    })
  })

  it('自动播放', done => {
    vm = createVueInstance({
      template: `
          <div>
            <wd-swipe :auto="100" ref="swipe" style="width: 300px; height: 200px">
              <wd-swipe-item ref="page1">page1</wd-swipe-item>
              <wd-swipe-item ref="page2">page2</wd-swipe-item>
              <wd-swipe-item ref="page3">page3</wd-swipe-item>
              <wd-swipe-item ref="page4">page4</wd-swipe-item>
           </wd-swipe>
          </div>
        `,
    })

    Vue.nextTick(() => {
      expect(Array.prototype.slice.call(vm.$refs.page1.$el.classList)).to.include('current')
      expect(Array.prototype.slice.call(vm.$refs.page2.$el.classList)).to.not.include('current')
      expect(Array.prototype.slice.call(vm.$el.querySelector('.wd-swipe-indicators').firstChild.classList)).to.include('current')
    })

    setTimeout(() => {
      expect(Array.prototype.slice.call(vm.$refs.page1.$el.classList)).to.not.include('current')
      expect(Array.prototype.slice.call(vm.$refs.page2.$el.classList)).to.include('current')
      expect(Array.prototype.slice.call(vm.$el.querySelector('.wd-swipe-indicators').childNodes[1].classList)).to.include('current')
      done()
    }, 500)
  })

  it('取消自动播放', done => {
    vm = createVueInstance({
      template: `
          <div>
            <wd-swipe :auto="0" ref="swipe">
              <wd-swipe-item ref="page1">page1</wd-swipe-item>
              <wd-swipe-item ref="page2">page2</wd-swipe-item>
              <wd-swipe-item ref="page3">page3</wd-swipe-item>
              <wd-swipe-item ref="page4">page4</wd-swipe-item>
           </wd-swipe>
          </div>
        `,
    })

    expect(vm.$refs.swipe.auto).to.equal(0)
    done()
  })

  it('隐藏 indicators', done => {
    vm = createVueInstance({
      template: `
          <div>
            <wd-swipe ref="swipe" :show-indicators="false">
              <wd-swipe-item ref="page1">page1</wd-swipe-item>
              <wd-swipe-item ref="page2">page2</wd-swipe-item>
              <wd-swipe-item ref="page3">page3</wd-swipe-item>
              <wd-swipe-item ref="page4">page4</wd-swipe-item>
           </wd-swipe>
          </div>
        `,
    })

    Vue.nextTick(() => {
      expect(vm.$refs.swipe.showIndicators).to.equal(false)
      expect(vm.$refs.swipe.$el.querySelector('wd-swipe-indicator-wrap')).to.not.exist
      done()
    })
  })

  it('显示标题', done => {
    vm = createVueInstance({
      template: `
          <div>
            <wd-swipe ref="swipe" :show-title="true" :indicators-position="'right'">
              <wd-swipe-item ref="page1" :title="'这是第1页的标题'">page1</wd-swipe-item>
              <wd-swipe-item ref="page2" :title="'这是第2页的标题'">page2</wd-swipe-item>
              <wd-swipe-item ref="page3" :title="'这是第3页的标题'">page3</wd-swipe-item>
              <wd-swipe-item ref="page4" :title="'这是第4页的标题'">page4</wd-swipe-item>
           </wd-swipe>
          </div>
        `,
    })

    Vue.nextTick(() => {
      expect(vm.$refs.swipe.$el.querySelector('.wd-swipe-indicator-wrap-background')).to.not.equal(null)
      expect(vm.$refs.swipe.$el.querySelector('.wd-swipe-item-title')).to.not.equal(null)
      done()
    })
  })

  it('使用页数', done => {
    vm = createVueInstance({
      template: `
          <div>
            <wd-swipe ref="swipe" :indicators-type="'number'">
              <wd-swipe-item ref="page1">page1</wd-swipe-item>
              <wd-swipe-item ref="page2">page2</wd-swipe-item>
              <wd-swipe-item ref="page3">page3</wd-swipe-item>
              <wd-swipe-item ref="page4">page4</wd-swipe-item>
           </wd-swipe>
          </div>
        `,
    })

    Vue.nextTick(() => {
      expect(vm.$refs.swipe.$el.querySelector('.wd-swipe-number-indicator')).to.exist
      done()
    })
  })

  it('自定义索引', done => {
    vm = createVueInstance({
      template: `
          <div>
            <wd-swipe ref="swipe" :loop="false" :defaultIndex="1">
              <wd-swipe-item ref="page1">page1</wd-swipe-item>
              <wd-swipe-item ref="page2">page2</wd-swipe-item>
              <wd-swipe-item ref="page3">page3</wd-swipe-item>
           </wd-swipe>
          </div>
        `
    })

    Vue.nextTick(() => {
      expect(vm.$refs.swipe.index).to.equal(1)
      done()
    })
  })

  it('翻页方法', done => {
    vm = createVueInstance({
      template: `
          <div>
            <wd-swipe ref="swipe" :loop="false">
              <wd-swipe-item ref="page1">page1</wd-swipe-item>
              <wd-swipe-item ref="page2">page2</wd-swipe-item>
           </wd-swipe>
          </div>
        `
    })

    Vue.nextTick(() => {
      expect(vm.$refs.swipe.index).to.equal(0)
      vm.$refs.swipe.next()

      setTimeout(() => {
        expect(vm.$refs.swipe.index).to.equal(1)

        setTimeout(() => {
          vm.$refs.swipe.prev()
          setTimeout(() => {
            expect(vm.$refs.swipe.index).to.equal(0)
            done()
          }, 500)
        }, 500)
      }, 500)
    })
  })

  it('禁止循环', done => {
    vm = createVueInstance({
      template: `
          <div>
            <wd-swipe ref="swipe" :loop="false">
              <wd-swipe-item ref="page1">page1</wd-swipe-item>
              <wd-swipe-item ref="page2">page2</wd-swipe-item>
           </wd-swipe>
          </div>
        `,
    })

    Vue.nextTick(() => {
      expect(vm.$refs.swipe.index).to.equal(0)
      vm.$refs.swipe.prev()

      setTimeout(() => {
        expect(vm.$refs.swipe.index).to.equal(0)
        vm.$refs.swipe.next()

        setTimeout(() => {
          expect(vm.$refs.swipe.index).to.equal(1)
          vm.$refs.swipe.next()
          setTimeout(() => {
            expect(vm.$refs.swipe.index).to.equal(1)
            done()
          }, 500)
        }, 500)
      }, 500)
    })
  })

  it('删除 page', done => {
    vm = createVueInstance({
      template: `
          <div>
            <wd-swipe ref="swipe" :loop="false">
              <wd-swipe-item ref="page1">page1</wd-swipe-item>
              <wd-swipe-item v-if="showPage2" ref="page2">page2</wd-swipe-item>
           </wd-swipe>
          </div>
        `,
      data() {
        return {
          showPage2: true
        }
      }
    })

    Vue.nextTick(() => {
      let swipe = vm.$refs.swipe
      expect(swipe.pages.length).to.equal(2)
      vm.showPage2 = false
      setTimeout(() => {
        expect(swipe.pages.length).to.equal(1)
        done()
      }, 500)
    })
  })

})
