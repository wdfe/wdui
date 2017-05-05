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

Switch 组件通过 `v-model` 绑定状态。例：

```html
<wd-switch v-model="value"></wd-switch>
```
```javascript
export default {
  data () {
    return {
      value: true
    }
  }
}
```

## Props

| 参数    | 描述    | 类型      | 默认值   | 备注  |
|-------  |-------- |---------  |-------- |------ |
| v-model   | 状态   | Boolean   | false       |       |
