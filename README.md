# WDUI

[![Build Status](https://travis-ci.org/wdfe/wdui.svg?branch=dev)](https://travis-ci.org/wdfe/wdui)
[![Coverage Status](https://coveralls.io/repos/github/wdfe/wdui/badge.svg)](https://coveralls.io/github/wdfe/wdui)
[![npm package](https://img.shields.io/npm/v/wdui.svg)](https://www.npmjs.org/package/wdui)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

- [项目主页](https://wdfe.github.io/wdui/#/)

### 安装

```bash
npm i wdui@latest --save-dev
```

### 引入

#### 整体引入

```javascript
import Vue from 'vue'
import * as wdui from 'wdui' //整体引入
import 'wdui/lib/styles/theme-default/index.css' //引入样式文件

Vue.use(wdui)
```

#### 按需引入（使用 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component) 插件）

```bash
npm i babel-plugin-component --save-dev
```
修改 babel 配置文件 `.babelrc`, 添加 babel-plugin-component 插件
```json
{
  "plugins": ["transform-vue-jsx", "something else" ,["babel-plugin-component", {
    "libraryName": "wdui"
  }]],
}
```
按需引入
```javascript
import {Header} from 'wdui'

export default {
  components: {
    'wd-header': Header
  }
}
```

### Tips

 - 全部组件使用 REM 布局实现多终端适配，使用本组件库时请搭配使用 [lib-flexible](https://github.com/amfe/lib-flexible) 方案。
 - 兼容性: Android 4.4 + ， iOS 6 +

### Contribute

请参考 [Contribute Guide](https://github.com/wdfe/wdui/blob/dev/CONTRIBUTING.md) 后提交 Pull Request。

### License

MIT
