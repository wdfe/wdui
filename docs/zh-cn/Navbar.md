# Navbar

## 单独引入

```javascript
import {Navbar, TabItem} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-navbar': Navbar,
    'wd-tab-item': TabItem
  },
  ...
}
```

## 用法

使用 Navbar 组件可以快速创建选项卡。

示例如下：

```html
<wd-navbar v-model="selectedTabId">
  <wd-tab-item tabId="tab1">tab1</wd-tab-item>
  <wd-tab-item tabId="tab2">tab2</wd-tab-item>
  <wd-tab-item tabId="tab3">tab3</wd-tab-item>
  <wd-tab-item tabId="tab4">tab4</wd-tab-item>
</wd-navbar>
```
```javascript
export default {
  data() {
    return {
      selectedTabId: 'tab1'
    }
  }
}
```

每个 TabItem 组件为选项卡中的一个选项。每个 TabItem 组件可以通过 `flex` 参数来设定宽度，当然您也可以使用 CSS 自由覆写组件样式来达到您想要的效果。

每个 TabItem 组件都需要一个 `tabId` 参数来标明自己的身份。当 Navbar 组件的 `v-model` 值与 `tabId` 相等时，该选项会被标记上 `active` class。

当点击激活某个选项时，Navbar 组件的 `v-model` 值会同步发生改变。

## 与 TabContainer 搭配使用

```javascript
import {TabContainer, TabContainerItem} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-tab-container': TabContainer,
    'wd-tab-container-item': TabContainerItem
  },
  ...
}
```

TabContainer 组件可以用来快速创建选项卡对应的内容区。

右侧 Demo 页示例如下：

```html
<!-- navbar 选项卡 -->
<wd-navbar v-model="selectedTabId">
  <wd-tab-item tabId="tab1">tab1</wd-tab-item>
  <wd-tab-item tabId="tab2">tab2</wd-tab-item>
  <wd-tab-item tabId="tab3">tab3</wd-tab-item>
  <wd-tab-item tabId="tab4">tab4</wd-tab-item>
</wd-navbar>
<!-- TabContainer 选项卡内容区 -->
<wd-tab-container v-model="selectedTabId" class="tab-container">
  <wd-tab-container-item tabId="tab1">tab1 内容</wd-tab-container-item>
  <wd-tab-container-item tabId="tab2">tab2 内容</wd-tab-container-item>
  <wd-tab-container-item tabId="tab3">tab3 内容</wd-tab-container-item>
  <wd-tab-container-item tabId="tab4">tab4 内容</wd-tab-container-item>
</wd-tab-container>
<br>
<wd-cell title="当前选中Tab" :value="selectedTabId"></wd-cell>
```
```javascript
export default {
  data() {
    return {
      selectedTabId: 'tab1'
    }
  }
}
```

每个 TabContainerItem 组件为选项卡的一个内容区，其同样需要一个 `tabId` 参数来标明自己的身份。当 TabContainer 组件的 `v-model` 值与 `tabId` 相等时，该内容区会展示出来。

## Navbar Props

| 参数      | 描述                | 类型      | 默认值   | 备注  |
|---------  |-------------------- |---------  |-------- |------ |
| v-model   | 选中选项的 TabId     | String    |         |       |

## TabItem Props

| 参数    | 描述              | 类型    | 默认值   | 备注  |
|-------  |------------------ |-------- |-------- |------ |
| tabId   | 该选项的TabId     | String  |         |       |
| flex    | 该选项的 flex 值   | Number  | 1       |       |

## TabContainer Props

| 参数      | 描述                | 类型    | 默认值   | 备注  |
|---------  |-------------------- |-------- |-------- |------ |
| v-model   | 选中内容区的 TabId  | String  |         |       |

## TabContainerItem Props

| 参数    | 描述              | 类型    | 默认值   | 备注  |
|-------  |-----------------  |-------- |-------- |------ |
| tabId   | 该内容区的TabId  | String  |         |       |