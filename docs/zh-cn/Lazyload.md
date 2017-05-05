# Lazyload

## 单独引入

```javascript
import Vue from 'vue'
import {Lazyload} from 'wdui'

Vue.use(Lazyload)
```

## 用法

```html
// 为 img 元素添加 v-lazy 指令，指令的值为图片的地址。同时需要设置图片在加载时的样式。
<img v-lazy="'img.jpg'" />

// 传入的参数可以是一个对象, 对象包含属性请参照下表
<img v-lazy="imgData" />
```
```javascript
export default {
  data () {
    return {
      imgData: {
        src: 'img.jpg',
        error: 'another-error.png',
        loading: 'another-loading-spin.svg'
      }
    }
  }
}
```

示例：

```html
<div class="img-list">
  <div>
    <img v-lazy="img" v-for="img in list">
  </div>
</div>
```
```javascript
export default {
  data () {
    return {
      list: [
        'your_images_url',
        'your_images_url',
        {
          src: 'your_images_url.png',
          error: 'another-error.png',
          loading: 'another-loading-spin.svg'
        }
      ]
    }
  }
}
```

## 对象可包含属性

| 参数    | 描述                   | 类型   | 默认值 | 备注 |
|---------|------------------------|--------|--------|------|
| src     | 图片地址               | String |        |      |
| error   | 加载不成功时显示的图片 | String |        |      |
| loading | 加载时显示的图片       | String |        |      |