# Switch

## 单独引入

```javascript
import {Switch} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-switch': Switch
  },
  ...
}
```

## 用法

Switch 组件通过 `value` 传递默认值，通过 `changeValue` 事件监听值的变化。例：

```html
<wd-switch class="switch" @changeValue="update" :value="value"></wd-switch>
```
```javascript
export default {
  data () {
    return {
      value: true
    }
  },
  methods: {
    update (val) {
      this.value = val
    }
  }
}
```

## Props

| 参数    | 描述    | 类型      | 默认值   | 备注  |
|-------  |-------- |---------  |-------- |------ |
| value   | 默认值   | Boolean   | /       |       |

## 事件

| 事件名       | 触发条件        | 参数  | 备注  |
|-------------  |---------------  |------ |------ |
| changeValue   | switch 值改变  | val   |       |