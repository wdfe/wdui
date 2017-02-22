/* eslint-disable no-undef */
import Picker from '../../packages/Picker/index.js'
import Vue from 'vue'

describe('Picker', () => {
  let vm

  it('picker initial 默认样式', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州', '深圳', '杭州'],
        textAlign: 'center'
      }]
    })
    Vue.nextTick(() => {
      const $dom = document.querySelector('.wd-picker')
      expect($dom).to.exist
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('picker showItemCount 展示行数', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州', '深圳', '杭州'],
        textAlign: 'center'
      }],
      showItemCount: 3
    })
    Vue.nextTick(() => {
      expect(vm.showItemCount).to.equal(3)
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('picker isShowCancelButton 显示取消按钮', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州', '深圳', '杭州'],
        textAlign: 'center'
      }],
      isShowCancelButton: false
    })
    Vue.nextTick(() => {
      const $btn = document.querySelector('.wd-picker-header-cancel')
      expect($btn).to.be.null
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('picker slots 单项选择', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }]
    })
    Vue.nextTick(() => {
      const $slot = document.querySelectorAll('.wd-picker-slots-container .wd-picker-slot')
      expect($slot.length).to.equal(1)
      const $items = $slot[0].querySelectorAll('.wd-picker-slot-item')
      const texts = Array.prototype.slice.call($items).map(e => e.textContent.trim())
      expect(texts).to.eql(['北京', '上海', '广州'])
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('picker slots 多项选择', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }, {
        type: 'divider',
        content: '-'
      }, {
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }]
    })
    Vue.nextTick(() => {
      const $slots = document.querySelectorAll('.wd-picker-slots-container .wd-picker-slot')
      expect($slots.length).to.equal(3)
      expect($slots[0].querySelectorAll('.wd-picker-slot-item').length).to.equal(3)
      expect(Array.prototype.slice.call($slots[1].classList)).to.include('wd-picker-slot-divider')
      expect($slots[2].querySelectorAll('.wd-picker-slot-item').length).to.equal(3)
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('picker maskColor 蒙版颜色', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }],
      maskColor: 'red'
    })
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      expect($mask.style.backgroundColor).to.equal('red')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('picker maskOpacity 蒙版透明度', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }],
      maskOpacity: 0.8
    })
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      expect($mask.style.opacity).to.equal('0.8')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('picker onConfirm 确认回调', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }],
      onConfirm: (instance, datas) => {
        document.body.testToken = datas.slot0
        instance.value = false
      },
    })
    Vue.nextTick(() => {
      const $btn = document.querySelector('.wd-picker-header-confirm')
      $btn.click()
      expect(document.body.testToken).to.equal('北京')
      setTimeout(() => {
        delete document.body.testToken
        done()
      }, 500)
    })
  })

  it('picker onChange 改变回调', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }],
      onChange: (instance, changeInfo) => {
        document.body.testToken = changeInfo
      }
    })
    setTimeout(() => {
      vm.$refs.slot0[0].locateItem(1)
      Vue.nextTick(() => {
        expect(document.body.testToken.changedSlotIndex).to.equal(0)
        expect(document.body.testToken.oldSlotValue).to.equal('北京')
        expect(document.body.testToken.newSlotValue).to.equal('上海')
        expect(document.body.testToken.val).to.eql({
          slot0: '上海'
        })
        vm.value = false
        setTimeout(() => {
          delete document.body.testToken
          done()
        }, 500)
      })
    }, 200)
  })

  it('picker onCancel 取消回调', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }],
      onCancel: (instance) => {
        document.body.testToken = 'cancel'
        instance.value = false
      },
    })
    Vue.nextTick(() => {
      const $btn = document.querySelector('.wd-picker-header-cancel')
      $btn.click()
      expect(document.body.testToken).to.equal('cancel')
      setTimeout(() => {
        delete document.body.testToken
        done()
      }, 500)
    })
  })

  it('picker onShow 窗体出现回调', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }],
      onShow: (instance) => {
        document.body.testToken = 'show'
        instance.value = false
      },
    })
    setTimeout(() => {
      expect(document.body.testToken).to.equal('show')
      setTimeout(() => {
        delete document.body.testToken
        done()
      }, 500)
    }, 400)
  })

  it('picker onHide 窗体隐藏回调', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }],
      onHide: (instance) => {
        document.body.testToken = 'hide'
        instance.value = false
      },
    })
    Vue.nextTick(() => {
      const $btn = document.querySelector('.wd-picker-header-cancel')
      $btn.click()
      setTimeout(() => {
        expect(document.body.testToken).to.equal('hide')
        delete document.body.testToken
        done()
      }, 500)
    })
  })

  it('picker onMaskClick mask点击回调', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }],
      onMaskClick(instance) {
        document.body.testToken = 'maskClick'
        instance.value = false
      }
    })
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      $mask.click()
      expect(document.body.testToken).to.equal('maskClick')
      setTimeout(() => {
        delete document.body.testToken
        done()
      }, 500)
    }, 200)
  })

  it('picker slot type类型', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }, {
        type: 'divider',
        content: '-'
      }, {
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }]
    })
    Vue.nextTick(() => {
      const $slots = document.querySelectorAll('.wd-picker-slots-container .wd-picker-slot')
      expect(Array.prototype.slice.call($slots[0].classList)).to.not.include('wd-picker-slot-divider')
      expect(Array.prototype.slice.call($slots[1].classList)).to.include('wd-picker-slot-divider')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('picker slot flex值', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 2,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }, {
        type: 'divider',
        content: '-'
      }, {
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }]
    })
    Vue.nextTick(() => {
      const $slots = document.querySelectorAll('.wd-picker-slots-container .wd-picker-slot')
      expect($slots[0].style.webkitFlexGrow).to.equal('2')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('picker slot textAlign对齐', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'left'
      }]
    })
    Vue.nextTick(() => {
      const $slots = document.querySelector('.wd-picker-slots-container .wd-picker-slot')
      expect($slots.style.textAlign).to.equal('left')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('picker slot content间隔符内容', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 2,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }, {
        type: 'divider',
        content: '~'
      }, {
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州'],
        textAlign: 'center'
      }]
    })
    Vue.nextTick(() => {
      const $divider = document.querySelector('.wd-picker-slot-divider p')
      expect($divider.textContent.trim()).to.equal('~')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('picker slot defaultValue默认值', done => {
    vm = Picker({
      slots: [{
        type: 'data',
        flex: 1,
        values: ['北京', '上海', '广州', '深圳', '杭州'],
        textAlign: 'center',
        defaultValue: '深圳'
      }]
    })
    setTimeout(() => {
      const $selected = document.querySelector('.wd-picker-slot-item-selected')
      expect($selected.textContent.trim()).to.equal('深圳')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    }, 400)
  })

})
