# Button

## 单独引入

```javascript
import {Button} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-button': Button
  },
  ...
}
```

## 用法

Button 按钮组件分为三种状态：常态、按压态、不可点状态，同时提供四种样式：`default`、`primary`、`gray`、`dark`。例：

```html
<wd-button type="default" @click.native="handler()">default 按钮</wd-button>
<wd-button type="primary">primary 按钮</wd-button>
<wd-button type="gray">gray 按钮</wd-button>
<wd-button type="dark">dark 按钮（仅深色背景上使用）</wd-button>
```
为按钮加入 `disabled` 属性可以使按钮置于不可点状态，例：

```html
<wd-button type="primary" disabled>primary 禁用按钮</wd-button>
```

为按钮加入 `ghost` 属性可以使按钮变为幽灵按钮样式，例：

```html
<wd-button type="gray" ghost>gray 幽灵按钮</wd-button>
```

通过 `nativeButtonType` 属性设置按钮类型，例

```html
<wd-button type="gray" nativeButtonType="submit">gray 按钮</wd-button>
```

## Props

| 参数              | 描述              | 类型      | 默认值   | 可选值                        |
|------------------ |-----------------  |---------  |---------  |---------------------------  |
| type              | 样式              | String    | default   | default/primary/gray/dark   |
| nativeButtonType  | button 原生类型   | String    | button    | button/reset/submit         |
| disabled          | 禁用态           | Boolean   | false     |                             |
| ghost             | 幽灵按钮          | Boolean   | false     |                             |