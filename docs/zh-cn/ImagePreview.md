# ImagePreview

## 单独引入

```javascript
import {ImagePreview} from 'wdui'
```

## 全局方法

全局引入 `wdui` 时，`wdui` 为 `Vue.prototype` 增加了全局方法： `$Imagepreview`，因此在 Vue 实例中可以使用如下方法唤起：

```javascript
this.$ImagePreview({
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
```

## 用法

ImagePreview 组件为图片预览组件。通过JS调用唤起，需要传入一个配置项，请看示例：

```html
<wd-button type="primary" @click.native="openImagePreview1">默认 ImagePreview</wd-button>
```
```javascript
export default {
  methods: {
    openImagePreview1() {
      this.$ImagePreview({
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
    }
  }
}
```
默认情况下，ImagePreview 组件会提供一个关闭按钮，点击后关闭组件；可以通过设置 `autoClose` 参数隐藏关闭按钮，此时点击图片即关闭组件。

```html
<wd-button type="primary" @click.native="openImagePreview2">ImagePreview 自动关闭</wd-button>
```
```javascript
export default {
  methods: {
    openImagePreview2() {
      this.$ImagePreview({
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
    }
  }
}
```

通过 `showIndicator` 参数可以设置是否显示数字指示器。

```html
<wd-button type="primary" @click.native="openImagePreview3">ImagePreview 隐藏 incaditor</wd-button>
```
```javascript
export default {
  methods: {
    openImagePreview3() {
      this.$ImagePreview({
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
    }
  }
}
```

通过 `defaultIndex` 参数可以设置组件打开时默认显示的图片的 Index。

```html
<wd-button type="primary" @click.native="openImagePreview4">ImagePreview 设置默认 index</wd-button>
```
```javascript
export default {
  methods: {
    openImagePreview4() {
      this.$ImagePreview({
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
    }
  }
}
```

## 配置项

| 参数            | 描述                                | 类型      | 默认值   | 备注          |
|---------------  |------------------------------------ |---------- |-------- |-------------- |
| transition      | 设置弹出与关闭时的动画效果           | String    | fade    | 可选值：fade  |
| imgList         | 图片列表                            | Array     | /       |               |
| autoClose       | 是否隐藏关闭按钮，点击图片关闭组件   | Boolean   | false   |               |
| showIndicator   | 是否显示 indicator 指示器            | Boolean   | true    |               |
| defaultIndex    | 默认展示的图片 Index                 | Number    | 0       |               |
| onShow          | 窗体出现后的回调函数                | Function  | /       |               |
| onHide          | 窗体隐藏后的回调函数                | Function  | /       |               |