/* eslint-disable no-undef */
import Button from '../../packages/Button/index.js'
import {createCompInstance} from './utils.js'

describe('Button', () => {

  let vm

  it('initial 默认样式', () => {
    vm = createCompInstance(Button)
    expect(Array.prototype.slice.call(vm.$el.classList)).to.include('wd-button-primary')
  })

  it('ghost 幽灵按钮', () => {
    vm = createCompInstance(Button, {
      ghost: true
    })
    expect(Array.prototype.slice.call(vm.$el.classList)).to.include('wd-button-ghost')
  })

  it('type 样式', () => {
    vm = createCompInstance(Button, {
      type: 'gray'
    })
    expect(Array.prototype.slice.call(vm.$el.classList)).to.include('wd-button-gray')
  })

  it('diabled 禁用态', () => {
    vm = createCompInstance(Button, {
      disabled: true
    })
    expect(vm.$el.hasAttribute('disabled')).to.be.true
  })

  it('nativeButtonType button原生类型', () => {
    vm = createCompInstance(Button, {
      nativeButtonType: 'submit'
    })
    expect(vm.$el.getAttribute('type')).to.equal('submit')
  })
})
