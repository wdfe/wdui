# Search

## 单独引入

```javascript
import {Search} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-search': Search
  },
  ...
}
```

## 用法

```html
<wd-search
  @callback="doSearch"
  :defaultValue="'测试'"
  :placeholder="'默认文案'">
</wd-search>
```

## Props

| 参数          | 描述                | 类型      | 默认值           | 可选值   |
|-------------- |-------------------- |---------- |---------------- |-------- |
| callback      | 点击搜索的回调函数   | Function  | /               |         |
| defaultValue  | 默认表单内填写文案   | String    |                 |         |
| palceholder   | 默认表单内提示内容   | String    | 请输入搜索内容   |         |