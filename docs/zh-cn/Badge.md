# Badge

## 单独引入

```javascript
import {Badge} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-badge': Badge
  },
  ...
}
```

## 用法

使用 Badge 组件可以快速创建提醒用的小红点。

传入 `value` 参数，定义内容。不传时为基础小红点。

```html
<wd-badge></wd-badge>
<wd-badge :value="3"></wd-badge>
<wd-badge value="NEW"></wd-badge>
```

若传入 `limit` 参数，则当 `value` 值大于 `limit` 时，展示为 `limit+`，用来实现 “99+” 收纳效果。

```html
<wd-badge :value="190" :limit="99"></wd-badge>
```

若传入 `border` 参数，则在红点外加一层白色描边，用于在红色底色场景上展示。

```html
<wd-badge value="1" border></wd-badge>
```

## Props

| 参数   | 描述     | 类型             | 默认值 | 可选值 |
|--------|----------|------------------|--------|--------|
| value  | 内容     | String || Number |        |        |
| limit  | 收纳数值 | Number           |        |        |
| border | 是否描边 | Boolean          | false  |        |