/* eslint-disable no-undef */
import RadioGroup from '../../packages/RadioGroup/index.js'
import Radio from '../../packages/Radio/index.js'
import Vue from 'vue'
import {destroyVM, createVueInstance} from './utils.js'

Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Radio.name, Radio)
describe('RadioGroup', () => {
  let vm
  it('RadioGroup 初始化', done => {
    vm = createVueInstance({
      template: `
        <wd-radiogroup :listData="lists" :name="'group1'" v-model="value1"></wd-radiogroup>
      `,
      data() {
        return {
          lists: ['选项1', '选项2', '选项3', '选项4'],
          value1: ''
        }
      }
    })
    Vue.nextTick(() => {
      const $dom = document.body.querySelector('.wd-radiogroup')
      expect($dom).to.exist
      const inputNum = $dom.getElementsByTagName('input').length
      expect(inputNum).to.equal(vm.lists.length)
      destroyVM(vm)
      done()
    })
  })
  it('RadioGroup 初始化对象数据', done => {
    vm = createVueInstance({
      template: `
        <wd-radiogroup :listData="lists" :name="'group1'" v-model="value1"></wd-radiogroup>
      `,
      data() {
        return {
          lists: [{value: '选项1', text: '选项text1'}, {value: '选项2', text: '选项text2'}, {value: '选项3', text: '选项text3'}, {value: '选项4', text: '选项text4'}],
          value1: ''
        }
      }
    })
    Vue.nextTick(() => {
      const $dom = document.body.querySelector('.wd-radiogroup')
      expect($dom).to.exist
      const inputNum = $dom.getElementsByTagName('input').length
      expect(inputNum).to.equal(vm.lists.length)
      const listsText = document.body.querySelectorAll('.wd-radiogroup-text')
      expect(listsText[0].innerText).to.equal('选项text1')
      expect(listsText[1].innerText).to.equal('选项text2')
      expect(listsText[2].innerText).to.equal('选项text3')
      expect(listsText[3].innerText).to.equal('选项text4')
      destroyVM(vm)
      done()
    })
  })
  it('RadioGroup 选中值', done => {
    vm = createVueInstance({
      template: `
        <wd-radiogroup :listData="lists" :name="'group1'" ref="radiogroup" v-model="value1"></wd-radiogroup>
      `,
      data() {
        return {
          lists: ['选项1', '选项2', '选项3', '选项4'],
          value1: '选项2'
        }
      }
    })
    Vue.nextTick(() => {
      let dafaultValue = vm.$refs.radiogroup._data.currentValue
      expect(dafaultValue).to.equal(vm._data.value1)
      destroyVM(vm)
      done()
    })
  })
  it('RadioGroup 被禁用', done => {
    vm = createVueInstance({
      template: `
        <wd-radiogroup :listData="lists" :name="'group1'" ref="radiogroup" v-model="value1"></wd-radiogroup>
      `,
      data() {
        return {
          lists: [{value: '选项1'}, {value: '选项2'}, {value: '被禁用', disChoose: true}, {value: '选中禁用', disChoose: true}],
          value1: ''
        }
      }
    })
    Vue.nextTick(() => {
      const disChoose = document.body.getElementsByTagName('li')[2]
      expect(disChoose.getElementsByTagName('input')[0].getAttribute('dischoose')).to.be
      done()
    })
  })
  it('RadioGroup 选中禁用不可点', done => {
    vm = createVueInstance({
      template: `
        <wd-radiogroup :listData="lists" :name="'group1'" ref="radiogroup" v-model="value1"></wd-radiogroup>
      `,
      data() {
        return {
          lists: [{value: '选项1'}, {value: '选项2'}, {value: '被禁用', disChoose: true}, {value: '选中禁用', disChoose: true}],
          value1: '被禁用'
        }
      }
    })
    Vue.nextTick(() => {
      const disChoose = document.body.getElementsByTagName('li')[2]
      expect(disChoose.getElementsByTagName('input')[0].getAttribute('dischoose')).to.be
      let ifClick = vm.$refs.radiogroup.ifClick
      expect(ifClick).to.not.be
      destroyVM(vm)
      done()
    })
  })
  it('RadioGroup 切换选中', done => {
    vm = createVueInstance({
      template: `
        <wd-radiogroup :listData="lists" :name="'group1'" ref="radiogroup" v-model="value1"></wd-radiogroup>
      `,
      data() {
        return {
          lists: ['选项1', '选项2', '选项3', '选项4'],
          value1: '选项1'
        }
      }
    })
    Vue.nextTick(() => {
      let liClick = vm.$refs.radiogroup.$el.getElementsByTagName('input')[1]
      liClick.click()
      expect(vm.$refs.radiogroup._data.currentValue).equal('选项2')
      destroyVM(vm)
      done()
    })
  })

  it('RadioGroup 切换禁用选中', done => {
    vm = createVueInstance({
      template: `
        <wd-radiogroup :listData="lists" :name="'group1'" ref="radiogroup" v-model="value1"></wd-radiogroup>
      `,
      data() {
        return {
          lists: [{value: '选项1'}, {value: '选项2'}, {value: '被禁用', disChoose: true}, {value: '选中禁用', disChoose: true}],
          value1: '被禁用'
        }
      }
    })
    Vue.nextTick(() => {
      let liClick = vm.$refs.radiogroup.$el.getElementsByTagName('input')[1]
      liClick.click()
      expect(vm.$refs.radiogroup._data.currentValue).equal('被禁用')
      let ifClick = vm.$refs.radiogroup.ifClick
      expect(ifClick).to.not.be
      destroyVM(vm)
      done()
    })
  })
})
