/* eslint-disable no-undef */
import ImagePreview from '../../packages/ImagePreview/index.js'

describe('ImagePreview', () => {
  let vm

  it('ImagePreview initial 默认样式', done => {
    vm = ImagePreview({
      imgList: [
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110639-27839-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110617-11c91-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110687-84627-s1.jpg?w=200&h=200'
        }
      ]
    })
    setTimeout(() => {
      expect(document.querySelector('.wd-imagepreview')).to.exist
      expect(document.querySelector('.wd-imagepreview-indicator')).to.exist
      expect(document.querySelector('.wd-imagepreview-close')).to.exist
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    }, 500)
  })

  it('ImagePreview autoClose 自动关闭', done => {
    vm = ImagePreview({
      imgList: [
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110639-27839-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110617-11c91-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110687-84627-s1.jpg?w=200&h=200'
        }
      ],
      autoClose: true
    })
    setTimeout(() => {
      expect(document.querySelector('.wd-imagepreview')).to.exist
      expect(document.querySelector('.wd-imagepreview-close')).to.not.exist
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    }, 500)
  })

  it('ImagePreview showIndicator 显示 indicator', done => {
    vm = ImagePreview({
      imgList: [
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110639-27839-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110617-11c91-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110687-84627-s1.jpg?w=200&h=200'
        }
      ],
      showIndicator: false
    })
    setTimeout(() => {
      expect(document.querySelector('.wd-imagepreview')).to.exist
      expect(document.querySelector('.wd-imagepreview-indicator')).to.not.exist
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    }, 500)
  })

  it('ImagePreview defaultIndex 设置默认 index', done => {
    vm = ImagePreview({
      imgList: [
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110639-27839-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110617-11c91-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110687-84627-s1.jpg?w=200&h=200'
        }
      ],
      defaultIndex: 1
    })
    setTimeout(() => {
      expect(document.querySelector('.wd-imagepreview')).to.exist
      expect(document.querySelector('.wd-imagepreview-indicator').textContent).to.equal('2/4')
      vm.value = false
      setTimeout(() => {
        done()
      }, 500)
    }, 500)
  })

  it('ImagePreview onShow 窗口出现回调', done => {
    vm = ImagePreview({
      imgList: [
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110639-27839-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110617-11c91-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110687-84627-s1.jpg?w=200&h=200'
        }
      ],
      onShow(instance) {
        document.body.token = true
        instance.value = false
      }
    })
    setTimeout(() => {
      expect(document.body.token).to.be.true
      setTimeout(() => {
        done()
      }, 500)
    }, 600)
  })

  it('ImagePreview onHide 窗口隐藏回调', done => {
    vm = ImagePreview({
      imgList: [
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110806-82728-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110639-27839-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110617-11c91-s1.jpg?w=480&h=480'
        },
        {
          url: 'https://si.geilicdn.com/vshop251425459-1449658110687-84627-s1.jpg?w=200&h=200'
        }
      ],
      onHide() {
        document.body.token = true
      }
    })
    setTimeout(() => {
      vm.value = false
      setTimeout(() => {
        expect(document.body.token).to.be.true
        done()
      }, 600)
    }, 500)
  })
})
