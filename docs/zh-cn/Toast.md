# Toast

## 单独引入

```javascript
import {Toast} from 'wdui'
```

## 全局方法

全局引入 `wdui` 时，`wdui` 为 `Vue.prototype` 增加了全局方法： `$Toast`。 因此在 Vue 实例中可以使用如下方法唤起：

```javascript
this.$Toast({
  content: '测试文字'
})
```

## 用法

Toast 组件有三种类型：文字弹层，带图标的弹层和强提示弹层。

在使用时，需要传入一个 `object` 作为配置项。

文字弹层示例：

```javascript
Toast({
  content: '测试文字'
})
```

带图标弹层目前支持图标：`loader`, `success` 示例：

```javascript
Toast({
  content: '带图标的弹层',
  iconClass: 'loader'
})
```

强提示弹层示例：

```javascript
Toast({
  theme: 'Light',
  content: '弹层',
  iconClass: 'loader'
})
```

执行 `Toast` 方法会返回一个 `Toast` 实例，每个实例都有 `close` 方法，用于手动关闭 `Toast`。

```javascript
let toast1 = Toast({
  content: 'Hello',
  autoClose: false
})

setTimeout(function(){
  toast1.close()
}, 2000)
```

## 配置项

| 参数      | 描述             | 类型     | 默认值 | 可选值                                                                     |
|-----------|------------------|----------|--------|----------------------------------------------------------------------------|
| content   | 提示文字         | String   | /      |                                                                            |
| duration  | 持续时间（毫秒） | Number   | 2000   |                                                                            |
| iconClass | 图标类型         | String   | /      | loader、success                                                            |
| theme     | 提示类型         | String   | Dark   | Dark（默认提示）, Light（强提示）                                          |
| autoClose | 是否自动关闭     | Boolean  | true   | true（自动关闭默认时间是2s）, false(不自动关闭，自主调用close方法回调关闭) |
| close     | 关闭弹层回调方法 | Function | /      |                                                                            |