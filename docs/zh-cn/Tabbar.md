# Tabbar

## 单独引入

```javascript
import {Tabbar, TabItem} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-tabbar': Tabbar,
    'wd-tab-item': TabItem
  },
  ...
}
```

## 用法

使用 Tabbar 组件可以快速创建页底选项卡。

示例如下：

```html
<wd-tabbar v-model="selectedTabId" fixed>
  <wd-tab-item tabId="tab1">
    <img slot="icon"></img>
    tab1
  </wd-tab-item>
  <wd-tab-item tabId="tab2">
    <img slot="icon"></img>
    tab2
  </wd-tab-item>
  <wd-tab-item tabId="tab3">
    <img slot="icon"></img>
    tab3
  </wd-tab-item>
  <wd-tab-item tabId="tab4">
    <img slot="icon"></img>
    tab4
  </wd-tab-item>
</wd-tabbar>
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

每个 TabItem 组件为选项卡中的一个选项。通过传入 `name` 为 `icon` 的 slot 可以设置图标。每个 TabItem 组件可以通过 `flex` 参数来设定宽度，当然您也可以使用 CSS 自由覆写组件样式来达到您想要的效果。

每个 TabItem 组件都需要一个 `tabId` 参数来标明自己的身份。当 Tabbar 组件的 `v-model` 值与 `tabId` 相等时，该选项会被标记上 `active` class。

当点击激活某个选项时，Tabbar 组件的 `v-model` 值会同步发生改变。

为 Tabbar 组件添加 `fixed` 参数使其吸附在屏幕底端。

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
<!-- TabContainer 选项卡内容区 -->
<wd-tab-container v-model="selectedTabId" class="tab-container">
  <wd-tab-container-item tabId="tab1">tab1 内容</wd-tab-container-item>
  <wd-tab-container-item tabId="tab2">tab2 内容</wd-tab-container-item>
  <wd-tab-container-item tabId="tab3">tab3 内容</wd-tab-container-item>
  <wd-tab-container-item tabId="tab4">tab4 内容</wd-tab-container-item>
</wd-tab-container>
<br>
<wd-cell title="当前选中Tab" :value="selectedTabId"></wd-cell>

<!-- Tabbar 底部选项卡 -->
<wd-tabbar v-model="selectedTabId" fixed>
  <wd-tab-item tabId="tab1">
    <img slot="icon" class="icon"></img>
    tab1
  </wd-tab-item>
  <wd-tab-item tabId="tab2">
    <img slot="icon" class="icon"></img>
    tab2
  </wd-tab-item>
  <wd-tab-item tabId="tab3">
    <img slot="icon" class="icon"></img>
    tab3
  </wd-tab-item>
  <wd-tab-item tabId="tab4">
    <img slot="icon" class="icon"></img>
    tab4
  </wd-tab-item>
</wd-tabbar>
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

## Tabbar Props

| 参数      | 描述                | 类型      | 默认值   | 备注  |
|---------  |-------------------- |---------  |-------- |------ |
| v-model   | 选中选项的 TabId     | String    |         |       |
| fixed     | 是否吸附于屏幕底部   | Boolean   | false   |       |

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