# Tooltip

## 单独引入

```javascript
import {Tooltip} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-tooltip': Tooltip
  },
  ...
}
```

## 用法

Tooltip 组件为气泡弹窗组件，内容可以自定义。组件的开关由 `v-model` 参数控制。 使用该组件时，必需为其指定 `locator` 参数，即气泡弹窗组件所指向的 DOM 节点。这个操作可以在 `mounted` 生命周期函数中执行，请看示例。

`locator` 示例：

```html
<wd-button id="locator1" type="primary" @click.native="flag1 = true">默认 tooltip</wd-button>
<br>
<wd-tooltip v-model="flag1" :locator="locator1">
  <p @click="flag1 = false">click to close tooltip</p>
</wd-tooltip>
```
```javascript
export default {
  data() {
    return {
      flag1: false,
      locator1: null
    },
    mounted() {
      this.locator1 = document.querySelector('#locator1')
    }
  }
}
```

指定 `locator` 后，Tooltip 组件会根据 `locator` 的尺寸与位置，自动计算出气泡弹窗的摆放方位。例如：当 `locator` 位于视口上半部分时，气泡弹窗会自动置于其下方；而 `locator` 尺寸较小且偏向于视口左右某一侧时，气泡弹窗会自动调整方位，使得视觉效果最佳，且箭头指向依然准确。具体例子可参考右侧的 demo。

气泡弹窗的弹出方位可以手动指定，传入 `position` 参数，可选值为 `top` 和 `bottom`。

```html
<wd-button id="locator5" type="primary" @click.native="flag5 = true">tooltip position:bottom</wd-button>
  <br>
  <wd-tooltip v-model="flag5" :locator="locator5" position="bottom">
  <p @click="flag5 = false">click to close tooltip</p>
</wd-tooltip>
```
```javascript
export default {
  data() {
    return {
      flag5: false,
      locator5: null
    },
    mounted() {
      this.locator5 = document.querySelector('#locator5')
    }
  }
}
```

## Props

| 参数          | 描述                      | 类型    | 默认值   | 备注                |
|-------------  |-------------------------- |-------- |-------- |-------------------- |
| position      | 弹窗弹出位置              | String  | /       | 可选值: bottom/top   |
| locator       | 气泡弹窗要指向的锚点 DOM  | DOM     | /       | 必需                |
| maskOpacity   | 蒙版透明度                 | Number  | 0.5     |                     |
| maskColor     | 蒙版颜色                  | String  | #000    |                     |

## Event

| 参数        | 描述          | 类型      | 默认值   | 备注  |
|-----------  |-------------- |---------- |-------- |------ |
| maskClick   | 蒙版点击回调  | Function  | /       |       |