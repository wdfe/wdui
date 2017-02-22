/* eslint-disable no-undef */
import MessageBox from '../../packages/MessageBox/index.js'
import Vue from 'vue'

describe('MessageBox', () => {

  let vm

  it('alert initial 默认样式', done => {
    vm = MessageBox.alert({
      title: '测试标题',
      text: '测试文字'
    })
    Vue.nextTick(() => {
      const $dom = document.querySelector('.wd-messagebox')
      expect($dom).to.exist
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('alert title 标题', done => {
    vm = MessageBox.alert({
      title: '测试标题',
      text: '测试文字'
    })
    Vue.nextTick(() => {
      const $title = document.querySelector('.wd-messagebox-content header')
      expect($title.textContent).to.equal('测试标题')
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('alert text 文本', done => {
    vm = MessageBox.alert({
      title: '测试标题',
      text: '测试文字'
    })
    Vue.nextTick(() => {
      const $text = document.querySelector('.wd-messagebox-content-text')
      expect($text.textContent).to.equal('测试文字')
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('alert confirmText 主操作文字', done => {
    vm = MessageBox.alert({
      title: '测试标题',
      text: '测试文字',
      confirmText: '主操作文字'
    })
    Vue.nextTick(() => {
      const $confirmText = document.querySelector('.wd-messagebox-footer-row span:last-child')
      expect($confirmText.textContent).to.equal('主操作文字')
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('confirm cancelText 辅操作文字', done => {
    vm = MessageBox.confirm({
      title: '测试标题',
      text: '测试文字',
      cancelText: '辅操作文字'
    })
    Vue.nextTick(() => {
      const $confirmText = document.querySelector('.wd-messagebox-footer-row span:first-child')
      expect($confirmText.textContent).to.equal('辅操作文字')
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('confirm isColumnButton 竖排展示操作按钮', done => {
    vm = MessageBox.confirm({
      title: '测试标题',
      text: '测试文字',
      isColumnButton: true
    })
    Vue.nextTick(() => {
      const $btnGroup = document.querySelector('.wd-messagebox footer')
      expect(Array.prototype.slice.call($btnGroup.classList)).to.include('wd-messagebox-footer-column')
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('confirm isShowCancelButton 展示取消按钮', done => {
    vm = MessageBox.confirm({
      title: '测试标题',
      text: '测试文字',
      isShowCancelButton: false
    })
    Vue.nextTick(() => {
      const $btns = document.querySelectorAll('.wd-messagebox-footer-row span')
      expect($btns.length).to.equal(1)
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('prompt isShowInput 展示input', done => {
    vm = MessageBox.prompt({
      title: '测试标题',
      text: '测试文字'
    })
    Vue.nextTick(() => {
      const $input = document.querySelector('.wd-messagebox-content input')
      expect($input).to.exist
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('prompt inputType input类型', done => {
    vm = MessageBox.prompt({
      title: '测试标题',
      text: '测试文字',
      inputType: 'password'
    })
    setTimeout(() => {
      const $input = document.querySelector('.wd-messagebox-content input')
      expect($input.getAttribute('type')).to.equal('password')
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('alert maskColor 蒙版颜色', done => {
    vm = MessageBox.alert({
      title: '测试标题',
      text: '测试文字',
      maskColor: 'red'
    })
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      expect($mask.style.backgroundColor).to.equal('red')
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('alert maskOpacity 蒙版透明度', done => {
    vm = MessageBox.alert({
      title: '测试标题',
      text: '测试文字',
      maskOpacity: 0.8
    })
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      expect($mask.style.opacity).to.equal('0.8')
      vm.open = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('confirm onConfirm 主操作回调', done => {
    vm = MessageBox.confirm({
      title: '测试标题',
      text: '测试文字',
      onConfirm(instance) {
        instance.testToken = 'success'
        instance.open = false
      }
    })
    setTimeout(() => {
      const $btn = document.querySelector('.wd-messagebox-footer-row span:last-child')
      $btn.click()
      expect(vm.testToken).to.equal('success')
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('confirm onCancel 辅操作回调', done => {
    vm = MessageBox.confirm({
      title: '测试标题',
      text: '测试文字',
      onCancel(instance) {
        instance.testToken = 'success'
        instance.open = false
      }
    })
    setTimeout(() => {
      const $btn = document.querySelector('.wd-messagebox-footer-row span:first-child')
      $btn.click()
      expect(vm.testToken).to.equal('success')
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('alert onShow 窗体出现回调', done => {
    vm = MessageBox.alert({
      title: '测试标题',
      text: '测试文字',
      onShow(instance) {
        instance.testToken = 'success'
        instance.open = false
      }
    })
    setTimeout(() => {
      expect(vm.testToken).to.equal('success')
      setTimeout(() => {
        done()
      }, 500)
    }, 400)
  })

  it('alert onHide 窗体隐藏回调', done => {
    vm = MessageBox.alert({
      title: '测试标题',
      text: '测试文字',
      onHide(instance) {
        document.body.testToken = 'success'
        instance.open = false
      }
    })
    setTimeout(() => {
      const $btn = document.querySelector('.wd-messagebox-footer-row span')
      $btn.click()
      setTimeout(() => {
        expect(document.body.testToken).to.equal('success')
        delete document.body.testToken
        done()
      }, 500)
    }, 300)
  })

  it('alert onMaskClick mask点击回调', done => {
    vm = MessageBox.alert({
      title: '测试标题',
      text: '测试文字',
      onMaskClick(instance) {
        vm.testToken = 'success'
        instance.open = false
      }
    })
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      $mask.click()
      expect(vm.testToken).to.equal('success')
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('prompt validate input验证', done => {
    vm = MessageBox.prompt({
      title: '测试标题',
      text: '测试文字',
      validate(val) {
        return !!val
      }
    })
    setTimeout(() => {
      const $btn = document.querySelector('.wd-messagebox-footer-row span:last-child')
      expect(Array.prototype.slice.call($btn.classList)).to.include('disabled')
      done()
    }, 200)
  })

})
