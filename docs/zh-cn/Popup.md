# Popup

## 单独引入

```javascript
import {Popup} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-popup': Popup
  },
  ...
}
```

## 用法

Popup 组件接收 `position` 参数，决定弹窗弹出位置。默认 `position` 为 `bottom`。 通过 `v-model` 决定组件的打开与关闭。

`position` 示例：

```html
<!-- 默认 position 为 bottom -->
<wd-popup class="popup" v-model="bottom">
  <wd-button type="gray" @click.native="bottom = false">close bottom</wd-button>
</wd-popup>
<!-- 指定 position 为 top -->
<wd-popup class="popup" v-model="top" position="top">
  <wd-button type="gray" @click.native="top = false">close top</wd-button>
</wd-popup>

<wd-button type="primary" @click.native="bottom = true">Popup bottom</wd-button>
<br>
<wd-button type="primary" @click.native="top = true">Popup top</wd-button>
```
```javascript
export default {
  data() {
    return {
      bottom: false,
      top: false
    }
  }
}
```

`cover` 参数指定组件尺寸，可选值为百分比或固定像素值。默认情况下弹出的 model 尺寸为屏幕尺寸（即100%）。

cover 示例：

```html
<wd-popup class="popup" v-model="right70" position="left" cover="70%">
  <wd-button type="gray" @click.native="right70 = false">close left 70%</wd-button>
</wd-popup>

<wd-button type="primary" @click.native="right70 = true">Popup left 70%</wd-button>
```
```javascript
export default {
  data() {
    return {
      right70: false
    }
  }
}
```

组件接收 `closeWhenClicked` 参数，当该参数为 `true` 时，点击 model 关闭该组件。
组件的 mask 层在点击时会触发 `maskClick` 事件，可以为其设置回调函数。点击 mask 关闭组件示例：

```html
<wd-popup class="popup" v-model="closeMask" position="bottom" cover="50%" @maskClick="closeMask = false">
  <p>点击 mask 关闭</p>
</wd-popup>

<wd-button type="primary" @click.native="closeMask = true">Popup 点击 mask 关闭</wd-button>
```
```javascript
export default {
  data() {
    return {
      closeMask: false
    }
  }
}
```

## Props

| 参数              | 描述                    | 类型      | 默认值   | 备注                                    |
|------------------ |-----------------------  |---------  |-------- |---------------------------------------  |
| position          | 弹窗弹出位置            | String    | bottom  | 可选值: bottom/top/left/right          |
| cover             | 尺寸                    | String    | 100%    | 可选值：百分比或固定像素, 如70%/300px  |
| closeWhenClicked  | 点击 model 时关闭组件  | Boolean   | false   |                                         |
| maskOpacity       | 蒙版透明度             | Number    | 0.5     |                                         |
| maskColor         | 蒙版颜色                | String    | #000    |                                         |

## 事件

| 参数        | 描述          | 类型      | 默认值   | 备注  |
|-----------  |-------------- |---------- |-------- |------ |
| maskClick   | 蒙版点击回调  | Function  | /       |       |