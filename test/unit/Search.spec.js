/* eslint-disable no-undef */
import Search from '../../packages/Search/index.js'
import Vue from 'vue'
import {createCompInstance, destroyVM , createVueInstance} from './utils.js'

Vue.component(Search.name, Search)
describe('Search', () => {
  let vm
  it('Search 初始化', () => {
    vm = createCompInstance(Search)
    expect(Array.prototype.slice.call(vm.$el.classList)).to.include('wd-search')
    destroyVM(vm)
  })
  it('Search 设置props', () => {
    vm = createCompInstance(Search, {
      defaultValue: '搜索内容',
      placeholder: '默认展示内容'
    })
    const $input = vm.$el.getElementsByTagName('input')[0]
    expect($input.getAttribute('placeholder')).to.equal('默认展示内容')
    expect(vm._data.inputText.trim()).to.equal('搜索内容')
    destroyVM(vm)
  })
  it('Search 回调方法', () => {
    let doCallback = false
    vm = createVueInstance({
      template: `
        <wd-search 
          @callback="doSearch"
          :defaultValue="'搜索内容'"
         :placeholder="'请输入内容'">
        </wd-search>
      `,
      methods: {
        doSearch(){
          doCallback = true
        }
      }
    })
    const $button = vm.$el.querySelector('.wd-search-button')
    $button.click()
    expect(doCallback).to.be.true
    destroyVM(vm)
  })
  it('Search 清除输入', () => {
    vm = createCompInstance(Search, {
      defaultValue: '搜索内容',
      placeholder: '默认展示内容'
    })
    const $close = vm.$el.querySelector('.wd-search-input-close')
    $close.click()
    expect(vm._data.inputText.trim()).to.empty
    expect(vm._data.closeIcon).to.not.be.true
    destroyVM(vm)
  })
})