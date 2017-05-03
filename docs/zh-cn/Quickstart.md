# 快速上手

## 安装

```
npm i wdui --save-dev
```

## 整体引入 wdui

示例入口 js：

```javascript
import Vue from 'vue'
import * as wdui from 'wdui' //整体引入
import 'wdui/lib/styles/theme-default/index.css' //引入样式文件
import App from './App.vue'

Vue.use(wdui)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

如果项目是由 `cookvue` 生成的，在入口 js 文件中加入以下代码即可：


```javascript
import * as wdui from 'wdui'
import 'wdui/lib/styles/theme-default/index.css'

Vue.use(wdui)
```

整体引入 wdui 后，所有组件可直接使用，不再需要额外的单独引入步骤。

## 按需引入 wdui 部分组件

首先在项目中安装 babel 插件：`babel-plugin-component`：

```
npm i babel-plugin-component --save-dev
```

随后修改项目的 babel 配置文件：`.babelr`，加入 `babel-plugin-component` 插件：

```json
{
  ...
  "plugins": ["transform-vue-jsx",["babel-plugin-component", {
    "libraryName": "wdui",
  }]],
  ...
}
```

随后即可按需引入组件，示例如下：

```javascript
import Vue from 'vue'
import {Search, Button} from 'wdui'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
```

各个组件的使用方法请参阅其各自的文档。
