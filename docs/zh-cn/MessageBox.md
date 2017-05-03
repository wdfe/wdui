# MessageBox

## 单独引入

```javascript
import {MessageBox} from 'wdui'
```

## 全局方法

全局引入 `wdui` 时，`wdui` 为 `Vue.prototype` 增加了全局方法： `$MessageBox`。 因此在 Vue 实例中可以使用如下方法唤起：

```javascript
this.$MessageBox.alert({
  title: '测试标题',
  text: '测试文字'
})
```

## 用法

MessageBox 组件有三个方法：`alert`，`confirm` 和 `prompt`。

在使用时，需要传入一个 `object` 作为配置项。

`alert` 示例：

```javascript
MessageBox.alert({
  title: '测试标题',
  text: '测试文字'
})
```

`confirm` 示例：

```javascript
MessageBox.confirm({
  title: '测试标题',
  text: '测试文字',
  onConfirm(instance) {
    console.log('确定！')
    instance.open = false
  },
  onCancel(instance) {
    console.log('取消！')
    instance.open = false
  }
})
```

`prompt` 示例：

```javascript
MessageBox.prompt({
  title: '测试标题',
  text: '测试文字',
  onConfirm(instance) {
    console.log(`输入值为：${instance.inputValue}`)
    instance.open = false
  },
  validate(val) {
    return !!val
  }
})
```

## 配置项

| 参数               | 描述                       | 类型     | 默认值                            | 备注                    |
|--------------------|----------------------------|----------|-----------------------------------|-------------------------|
| title              | 标题文字                   | String   | /                                 |                         |
| text               | 正文文字                   | String   | /                                 |                         |
| confirmText        | 主操作文字                 | String   | 确定                              |                         |
| cancelText         | 辅操作文字                 | String   | 取消                              |                         |
| isColumnButton     | 竖排展示操作按钮           | Boolean  | false                             |                         |
| isShowCancelButton | 展示取消按钮               | Boolean  | alert: false confirm/prompt: true |                         |
| isShowInput        | 展示 Input                 | Boolean  | alert/confirm: false prompt: true |                         |
| inputType          | Input 类型                 | String   | text                              | Input type 属性可用值   |
| maskColor          | 蒙版颜色                   | String   | #000                              |                         |
| maskOpacity        | 蒙版透明度                 | Number   | 0.5                               |                         |
| transition         | 设置弹出与关闭时的动画效果 | String   | fade                              | 可选值：fade            |
| onConfirm          | 执行主操作时的回调函数     | Function | 关闭窗体                          |                         |
| onCancel           | 执行辅操作时的回调函数     | Function | 关闭窗体                          |                         |
| onShow             | 窗体出现后的回调函数       | Function | /                                 |                         |
| onHide             | 窗体隐藏后的回调函数       | Function | /                                 |                         |
| onMaskClick        | 点击 Mask 时的回调函数     | Function | /                                 |                         |
| validate           | Input 值验证函数           | Function | /                                 | return true时为通过验证 |