# Cell

## 单独引入

```javascript
import {Cell} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-cell': Cell
  },
  ...
}
```

## 用法

使用 Cell 组件可以快速创建列表项。Cell 组件既可以单独出现，也可以成组出现，成组出现时会自动加上间隔线。

基础用法：

```html
<wd-cell title="标准标题" value="辅助说明"></wd-cell>
```

`title` 参数定义列表项左侧内容。 `value` 参数定义列表项右侧内容。

`to` 参数接收一个 URL 字符串。传入 `to` 参数的列表项，会自动展示右箭头，点击会跳转到指定的 URL。

```html
<wd-cell title="带有链接" value="跳转回首页" to="/#/"></wd-cell>
```

传入 `name` 为 `left` 和 `right` 的 slot 可以自定义列表项左侧右侧展示内容。此时 `title`/`value` 参数均失效。

```html
<wd-cell>
  <p slot="left"><img src="../../../src/assets/images/check.png" class="left-icon">自定义左侧</p>
  <p slot="right">自定义<span class="red">右侧</span><wd-switch class="switch" @changeValue="update1" :value="value1"></wd-switch></p>
</wd-cell>
```

## Props

| 参数    | 描述          | 类型    | 默认值   | 备注  |
|-------  |-------------- |-------- |-------- |------ |
| title   | 左侧文字      | String  |         |       |
| value   | 右侧文字      | String  |         |       |
| to      | 添加跳转链接  | String  |         |       |
