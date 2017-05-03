# ActionSheet

## 单独引入

```javascript
import {ActionSheet} from 'wdui'
```

## 全局方法

全局引入 `wdui` 时，`wdui` 为 `Vue.prototype` 增加了全局方法： `$ActionSheet`。 因此在 Vue 实例中可以使用如下方法唤起：

```javascript
this.$ActionSheet({
  title: '复制链接',
  isShowTitle: false,
  content: {
    type: 'single',
    items: [
      { title: '复制店铺名称+链接' },
      { title: '仅复制店铺链接' },
      { title: '仅复制店铺名称' }
    ]
  },
  textAlign: 'center',
  isShowConfirmButton: false,
  onItemClick: (instance, data) => {
    alert(data.datas)
    instance.value = false
  }
})
```

## 用法

ActionSheet 组件被唤起后，将于屏幕下方弹出，选择完毕后收回。

在使用时，需要传入一个 `object` 作为配置项。

操作表正文可以通过 `type` 来设置显示类型。根据传入的数据格式,可以添加一列或两列文本。

`single` 单列居中示例：

```javascript
ActionSheet({
  title: '复制链接',
  isShowTitle: false,
  content: {
    type: 'single',
    items: [
      { title: '复制店铺名称+链接' },
      { title: '仅复制店铺链接' },
      { title: '仅复制店铺名称' }
    ]
  },
  textAlign: 'center',
  isShowConfirmButton: false,
  onItemClick: (instance, data) => {
    alert(data.datas)
    instance.value = false
  }
})
```

`radio` 示例：

```javascript
ActionSheet({
  title: '请选择排序方式',
  content: {
    type: 'radio',
    items: [
      { title: '名称字母排序' },
      { title: '总交易额' },
      { title: '总订单数' },
      { title: '上次购买时间' },
      { title: '平均交易额' },
      { title: '单次最高交易额' }
    ]
  },
  onConfirm: (instance, data) => {
    alert(JSON.stringify(data.datas))
    instance.value = false
  }
})
```

`checklist` 两列示例：

```javascript
ActionSheet({
  title: '分类至(按分类展示商品,方便买家筛选)',
  content: {
    type: 'checklist',
    items: [
      {
        title: '男士背包',
        subtitle: '共1件商品'
      },
      {
        title: '男士公文包',
        subtitle: '共0件商品'
      },
      {
        title: '女士背包',
        subtitle: '共1件商品'
      }
    ],
    defaultValue: [ 0, 2 ]
  },
  onConfirm: (instance, data) => {
    alert(JSON.stringify(data.datas))
    instance.value = false
  }
})
```

## 配置项

| 参数                  | 描述                        | 类型      | 默认值     | 备注                                                                              |
|---------------------  |---------------------------- |---------- |---------- |---------------------------------------------------------------------------------  |
| title                 | 标题文字                    | String    | /         |                                                                                   |
| isShowTitle           | 是否展示标题                | Boolean   | true      |                                                                                   |
| textAlign             | 对齐方式                    | String    | left      | 单选/多选时必须为left                                                             |
| content               | 正文显示配置                | Object    | /         | content 配置项见下表                                                              |
| confirmText           | 主操作文字                   | String    | 确定      |                                                                                   |
| cancelText            | 辅操作文字                   | String    | 取消      |                                                                                   |
| isShowConfirmButton   | 是否展示主操作按钮           | Boolean   | true      | 无确定按钮,则选择后自动关闭操作表。单列建议不显示(因为没有选项标记)多选必须存在   |
| maskColor             | 蒙版颜色                    | String    | #000      |                                                                                   |
| maskOpacity           | 蒙版透明度                   | Number    | 0.5       |                                                                                   |
| transition            | 设置弹出与关闭时的动画效果   | String    | fade      | 可选值：fade                                                                      |
| onItemClick           | 执行点击操作项的回调函数    | Function  | 关闭窗体  | 传入参数：instance(实例) 和 data(选择项数据)                                     |
| onConfirm             | 确认选择时的回调函数        | Function  | 关闭窗体  | 传入参数：instance(实例) 和 data(选择项数据)                                     |
| onCancel              | 执行辅操作时的回调函数       | Function  | 关闭窗体  |                                                                                   |
| onShow                | 窗体出现后的回调函数        | Function  |           |                                                                                   |
| onHide                | 窗体隐藏后的回调函数        | Function  |           |                                                                                   |
| onMaskClick           | 点击 Mask 时的回调函数      | Function  |           |                                                                                   |

## content 配置项

| 参数          | 描述                        | 类型    | 默认值   | 备注                                                                                                  |
|-------------- |---------------------------  |-------- |-------- |-----------------------------------------------------------------------------------------------------  |
| type          | 类型                        | String  | single  | 可选值: radio/checklist                                                                              |
| items         | 操作项名称                 | Array   | /       | 单列: 按此形式传入数据, [{'title':''},...]双列: 按此形式传入数据, [{'title':'','subtitle':''},...]    |
| defaultValue  | 单选/多选默认选中项的下标   | Array   | /       | 每次加载组件前修改该值即可改变默认选中项,若不改变则以首次传入值为准(每次选中项的下标会以_index返回)  |