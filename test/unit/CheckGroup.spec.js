/* eslint-disable no-undef */
import CheckboxGroup from '../../packages/CheckboxGroup/index.js'
import Checkbox from '../../packages/Checkbox/index.js'
import Vue from 'vue'
import {destroyVM, createVueInstance} from './utils.js'

Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Checkbox.name, Checkbox)
describe('CheckboxGroup', () => {
  let vm
  it('CheckboxGroup 初始化', done => {
    vm = createVueInstance({
      template: `
        <wd-checkboxgroup :listData="lists" :name="'group1'" v-model="value1"></wd-checkboxgroup>
      `,
      data() {
        return {
          lists: ['选项1', '选项2', '选项3', '选项4'],
          value1: ''
        }
      }
    })
    Vue.nextTick(() => {
      const $dom = document.body.querySelector('.wd-checkboxgroup')
      expect($dom).to.exist
      const inputNum = document.body.getElementsByTagName('li').length
      expect(inputNum).to.equal(vm.lists.length)
      destroyVM(vm)
      done()
    })
  })
  it('CheckboxGroup 初始化未传值', done => {
    vm = createVueInstance({
      template: `
        <wd-checkboxgroup :listData="lists" :name="'group1'" v-model="value1"></wd-checkboxgroup>
      `,
      data() {
        return {
          lists: [],
          value1: ''
        }
      }
    })
    Vue.nextTick(() => {
      const $dom = document.body.querySelector('.wd-checkboxgroup')
      expect($dom).to.exist
      const inputNum = $dom.getElementsByTagName('li').length
      expect(inputNum).to.equal(0)
      destroyVM(vm)
      done()
    })
  })
  it('CheckboxGroup 选中值', done => {
    vm = createVueInstance({
      template: `
        <wd-checkboxgroup :listData="lists" :name="'group1'" ref="checkgroup" v-model="value1"></wd-checkboxgroup>
      `,
      data() {
        return {
          lists: ['选项1', '选项2', '选项3', '选项4'],
          value1: ['选项2']
        }
      }
    })
    Vue.nextTick(() => {
      let dafaultValue = vm.$refs.checkgroup._data.currentCheck
      expect(dafaultValue).to.equal(vm._data.value1)
      destroyVM(vm)
      done()
    })
  })
  it('CheckboxGroup 被禁用', done => {
    vm = createVueInstance({
      template: `
        <wd-checkboxgroup :listData="lists" :name="'group1'" ref="checkgroup" v-model="value1"></wd-checkboxgroup>
      `,
      data() {
        return {
          lists: [{value: '选项1'}, {value: '选项2'}, {value: '被禁用', disChoose: true}, {value: '选中禁用', disChoose: true}],
          value1: []
        }
      }
    })
    Vue.nextTick(() => {
      const disChoose = document.body.getElementsByTagName('li')[2]
      expect(disChoose.getElementsByTagName('input')[0].getAttribute('dischoose')).to.be
      destroyVM(vm)
      done()
    })
  })
  it('CheckboxGroup 选中禁用不可点', done => {
    vm = createVueInstance({
      template: `
        <wd-checkboxgroup :listData="lists" :name="'group1'" ref="checkgroup" v-model="value1"></wd-checkboxgroup>
      `,
      data() {
        return {
          lists: [{value: '选项1'}, {value: '选项2'}, {value: '被禁用', disChoose: true}, {value: '选中禁用', disChoose: true}],
          value1: ['被禁用']
        }
      }
    })
    Vue.nextTick(() => {
      const disChoose = document.body.getElementsByTagName('li')[2]
      expect(disChoose.getElementsByTagName('input')[0].getAttribute('dischoose')).to.be
      destroyVM(vm)
      done()
    })
  })
  it('CheckboxGroup 切换选中', done => {
    vm = createVueInstance({
      template: `
        <wd-checkboxgroup :listData="lists" :name="'group1'" ref="checkgroup" v-model="value1"></wd-checkboxgroup>
      `,
      data() {
        return {
          lists: ['选项1', '选项2', '选项3', '选项4'],
          value1: ['选项1']
        }
      }
    })
    Vue.nextTick(() => {
      let liClick = vm.$refs.checkgroup.$el.getElementsByTagName('input')[1]
      liClick.click()
      let checkValue = ['选项1', '选项2']
      expect(vm.$refs.checkgroup._data.currentCheck).eql(checkValue)
      destroyVM(vm)
      done()
    })
  })
  it('CheckboxGroup 切换禁用选中', done => {
    vm = createVueInstance({
      template: `
        <wd-checkboxgroup :listData="lists" :name="'group1'" ref="checkgroup" v-model="value1"></wd-checkboxgroup>
      `,
      data() {
        return {
          lists: [{value: '选项1'}, {value: '选项2'}, {value: '被禁用', disChoose: true}, {value: '选中禁用', disChoose: true}],
          value1: ['被禁用']
        }
      }
    })
    Vue.nextTick(() => {
      let liClick = vm.$refs.checkgroup.$el.getElementsByTagName('input')[1]
      liClick.click()
      let checkValue = ['被禁用', '选项2']
      expect(vm.$refs.checkgroup._data.currentCheck).eql(checkValue)
      destroyVM(vm)
      done()
    })
  })
})
