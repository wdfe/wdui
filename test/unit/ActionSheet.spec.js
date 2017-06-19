/* eslint-disable no-undef */
import ActionSheet from '../../packages/ActionSheet/index.js'
import Vue from 'vue'

describe('ActionSheet', () => {
  let vm

  it('actionsheet initial 默认样式', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        items: [
            {title: '测试正文条目1'},
            {title: '测试正文条目2'}
        ]
      }
    })
    Vue.nextTick(() => {
      const $dom = document.querySelector('.wd-actionsheet')
      expect($dom).to.exist
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet title 标题', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      }
    })
    Vue.nextTick(() => {
      const $title = document.querySelector('.wd-actionsheet-header')
      expect($title.textContent).to.equal('测试标题')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet isShowTitle 是否显示标题', done => {
    vm = ActionSheet({
      title: '测试标题',
      isShowTitle: false,
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      }
    })
    Vue.nextTick(() => {
      const $title = document.querySelector('.wd-actionsheet-header')
      expect($title).to.not.exist
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet textAlign 对齐方式', done => {
    vm = ActionSheet({
      title: '测试标题',
      textAlign: 'center',
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      }
    })
    Vue.nextTick(() => {
      const $content = document.querySelector('.wd-actionsheet-content')
      expect(window.getComputedStyle($content).getPropertyValue('text-align')).to.equal('center')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet content type-radio 正文单选类型', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        type: 'radio',
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      }
    })
    Vue.nextTick(() => {
      const $itemFirst = document.querySelector('ul.wd-actionsheet-list > li:nth-child(1)')
      const $itemSecond = document.querySelector('ul.wd-actionsheet-list > li:nth-child(2)')
      $itemFirst.click()
      $itemSecond.click()
      setTimeout(() => {
        vm.value = false
        setTimeout(() => {
          expect(Array.prototype.slice.call($itemFirst.classList)).to.not.include('checked')
          expect(Array.prototype.slice.call($itemSecond.classList)).to.include('checked')
          done()
        }, 500)
      }, 200)
    })
  })

  it('actionsheet content type-checklist 正文多选类型', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        type: 'checklist',
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      }
    })
    Vue.nextTick(() => {
      const $itemFirst = document.querySelector('ul.wd-actionsheet-list > li:nth-child(1) > label')
      const $itemSecond = document.querySelector('ul.wd-actionsheet-list > li:nth-child(2) > label')
      $itemFirst.click()
      $itemSecond.click()
      expect($itemFirst.querySelector('input:checked').value).to.equal('测试正文条目1')
      expect($itemSecond.querySelector('input:checked').value).to.equal('测试正文条目2')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet content items-两列 正文两列数据', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        type: 'checklist',
        items: [
          {
            title: '测试正文主条目1',
            subtitle: '测试正文副条目1'
          },
          {
            title: '测试正文主条目2',
            subtitle: '测试正文副条目2'
          },
        ]
      }
    })
    Vue.nextTick(() => {
      const $item = document.querySelectorAll('ul.wd-actionsheet-list > li:nth-child(1) > label > span')
      expect($item.length).to.equal(2)
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet content radio-defaultValue 单选默认选中', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        type: 'radio',
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ],
        defaultValue: [1]
      }
    })
    Vue.nextTick(() => {
      const $itemSecond = document.querySelector('ul.wd-actionsheet-list > li:nth-child(2)')
      expect(Array.prototype.slice.call($itemSecond.classList)).to.include('checked')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet content radio-defaultValue 多选默认选中', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        type: 'checklist',
        items: [
          {
            title: '测试正文主条目1',
            subtitle: '测试正文副条目1'
          },
          {
            title: '测试正文主条目2',
            subtitle: '测试正文副条目2'
          },
        ],
        defaultValue: [0, 1]
      }
    })
    Vue.nextTick(() => {
      const $itemFirst = document.querySelector('ul.wd-actionsheet-list > li:nth-child(1) > label')
      const $itemSecond = document.querySelector('ul.wd-actionsheet-list > li:nth-child(2) > label')
      expect($itemFirst.querySelector('input:checked').value).to.equal('测试正文主条目1')
      expect($itemSecond.querySelector('input:checked').value).to.equal('测试正文主条目2')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet content defaultValue容错功能', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        type: 'checklist',
        items: [
          {
            title: '测试正文主条目1',
            subtitle: '测试正文副条目1'
          },
          {
            title: '测试正文主条目2',
            subtitle: '测试正文副条目2'
          },
          {
            title: '测试正文主条目3',
            subtitle: '测试正文副条目3'
          }
        ],
        defaultValue: [4, 1, '1', 1, 2]   //过滤字符串及重复项和越界项,过滤结果[1, 2]
      }
    })
    Vue.nextTick(() => {
      const $itemSecond = document.querySelector('ul.wd-actionsheet-list > li:nth-child(2) > label')
      const $itemThird = document.querySelector('ul.wd-actionsheet-list > li:nth-child(3) > label')
      expect($itemSecond.querySelector('input:checked').value).to.equal('测试正文主条目2')
      expect($itemThird.querySelector('input:checked').value).to.equal('测试正文主条目3')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet confirmText 主操作文字', done => {
    vm = ActionSheet({
      title: '测试标题',
      confirmText: '测试主操作文字',
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      }
    })
    Vue.nextTick(() => {
      const $confirmButton = document.querySelector('.wd-actionsheet-footer > span:nth-child(2)')
      expect($confirmButton.textContent).to.equal('测试主操作文字')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet cancelText 辅操作文字', done => {
    vm = ActionSheet({
      title: '测试标题',
      cancelText: '测试辅操作文字',
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      }
    })
    Vue.nextTick(() => {
      const $cancelButton = document.querySelector('.wd-actionsheet-footer > span:nth-child(1)')
      expect($cancelButton.textContent).to.equal('测试辅操作文字')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet isShowConfirmButton 是否展示主操作按钮', done => {
    vm = ActionSheet({
      title: '测试标题',
      isShowConfirmButton: false,
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      }
    })
    Vue.nextTick(() => {
      const $buttons = document.querySelectorAll('.wd-actionsheet-footer > span')
      expect($buttons.length).to.equal(1)
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })

  it('actionsheet maskColor 蒙版颜色', done => {
    vm = ActionSheet({
      title: '测试标题',
      maskColor: '#eee',
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      }
    })
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      expect($mask.style.backgroundColor).to.equal('rgb(238, 238, 238)')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('actionsheet maskOpacity 蒙版透明度', done => {
    vm = ActionSheet({
      title: '测试标题',
      maskOpacity: 0.7,
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      }
    })
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      expect($mask.style.opacity).to.equal('0.7')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('actionsheet onItemClick 执行点击操作项的回调函数', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      },
      isShowConfirmButton: false,
      onItemClick: (instance, data) => {
        document.body.testToken = data.datas
        instance.value = false
      }
    })
    Vue.nextTick(() => {
      const $itemFirst = document.querySelector('ul.wd-actionsheet-list > li:nth-child(1) > span')
      $itemFirst.click()
      setTimeout(() => {
        expect(document.body.testToken).to.equal('测试正文条目1')
        delete document.body.testToken
        done()
      }, 500)
    })
  })

  it('actionsheet onConfirm 确认选择时的回调函数', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        type: 'radio',
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      },
      onConfirm: (instance, data) => {
        document.body.testToken = data.datas.value
        instance.value = false
      }
    })
    Vue.nextTick(() => {
      const $confirmButton = document.querySelector('.wd-actionsheet-footer > span:nth-child(2)')
      const $itemFirst = document.querySelector('ul.wd-actionsheet-list > li:nth-child(1) > span')
      $itemFirst.click()
      $confirmButton.click()
      Vue.nextTick(() => {
        setTimeout(() => {
          expect(document.body.testToken).to.equal('测试正文条目1')
          delete document.body.testToken
          done()
        }, 500)
      })
    })
  })

  it('actionsheet onCancel 执行辅操作时的回调函数', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      },
      onCancel: (instance) => {
        document.body.testToken = 'cancel'
        instance.value = false
      },
    })
    setTimeout(() => {
      const $cancelButton = document.querySelector('.wd-actionsheet-footer > span:nth-child(1)')
      $cancelButton.click()
      expect(document.body.testToken).to.equal('cancel')
      setTimeout(() => {
        delete document.body.testToken
        done()
      }, 500)
    }, 200)
  })

  it('actionsheet onShow 窗体出现后的回调函数', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      },
      onShow(instance) {
        instance.testToken = 'show'
        instance.value = false
      },
    })
    setTimeout(() => {
      expect(vm.testToken).to.equal('show')
      setTimeout(() => {
        delete document.body.testToken
        done()
      }, 500)
    }, 400)
  })

  it('actionsheet onHide 窗体隐藏后的回调函数', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      },
      onHide(instance) {
        instance.testToken = 'hide'
        instance.value = false
      },
    })
    Vue.nextTick(() => {
      const $cancelButton = document.querySelector('.wd-actionsheet-footer > span:nth-child(1)')
      $cancelButton.click()
      setTimeout(() => {
        expect(vm.testToken).to.equal('hide')
        delete document.body.testToken
        done()
      }, 500)
    })
  })

  it('actionsheet onMaskClick 点击 Mask 时的回调函数', done => {
    vm = ActionSheet({
      title: '测试标题',
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'}
        ]
      },
      onMaskClick(instance) {
        instance.testToken = 'maskClick'
        instance.value = false
      },
    })
    setTimeout(() => {
      const $mask = document.querySelector('.wd-mask')
      $mask.click()
      expect(vm.testToken).to.equal('maskClick')
      setTimeout(() => {
        done()
      }, 500)
    }, 200)
  })

  it('actionsheet maxDisplay 最大显示条数', done => {
    vm = ActionSheet({
      title: '测试标题',
      isShowTitle: false,
      maxDisplay: 5,
      content: {
        items: [
          {title: '测试正文条目1'},
          {title: '测试正文条目2'},
          {title: '测试正文条目3'},
          {title: '测试正文条目4'},
          {title: '测试正文条目5'},
          {title: '测试正文条目6'},
          {title: '测试正文条目7'},
          {title: '测试正文条目8'}
        ]
      }
    })
    Vue.nextTick(() => {
      const $listHeight = document.querySelector('.wd-actionsheet-list').offsetHeight
      const $itemHeight = document.querySelector('.wd-actionsheet-listitem').offsetHeight
      expect(vm.maxDisplay).to.equal(5)
      expect($itemHeight * 5).to.equal($listHeight)
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    })
  })
})
