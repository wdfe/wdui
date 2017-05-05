# Checkbox

## 单独引入

```javascript
import {Checkbox} from 'wdui'
//注册
export default {
  ...
  components: {
    'wd-checkbox': Checkbox
  },
  ...
}
```

## 用法

Checkbox 组件 通过 `v-model` 设置已选中的数据。

```html
<ul class="custome-checkbox-list">
  <li v-for="list in listData">
    <label>
      <wd-checkbox
        :disChoose="list.disChoose"
        :nowValue="currentValue"
        :text="list.value || list"
        v-model="currentValue">
      </wd-checkbox>
    </label>
  </li>
</ul>
<p class="current-value">当前选中："currentValue"</p>
```
```javascript
//不包含禁用选项
export default {
  ...
  data () {
    return {
      listdata: ['选项1', '选项2', '选项3', '选项4'],
      currentValue: [],
    }
  }
}
```
```javascript
//包含禁用选项
export default {
  ...
  data () {
    return {
      listdata: [{value: '多选项'},
        {value: '选中'},
        {value: '被禁用', disChoose: true},
        {value: '选中禁用', disChoose: true}],
      currentValue: ['选中','选中禁用'],
    }
  }
}
```


## 配置项

| 参数        | 描述                                              | 类型      | 默认值   | 备注  |
|-----------  |-------------------------------------------------- |---------  |-------- |------ |
| disChoose   | 是否为禁用选项                                     | Boolean   | false   | 可选  |
| nowValue    | 绑定的 v-model 值                                 | Array     | []      | 必需  |
| text        | 表单 value 值                                      | String    | ''      | 可选  |
| v-model     | 双向绑定数据值，和 nowValue 一致，同步已选中数据   | Array     | /       | 必需  |

# CheckGroup

## 单独引入

```javascript
import {CheckGroup} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-checkgroup': CheckGroup
  },
  ...
}
```

## 用法

CheckGroup 组件 通过 `v-model` 设置已选中的数据。

```html
<wd-checkgroup
  :listData="listdata"
  v-model="currentValue">
</wd-checkgroup>
```
```javascript
//不包含禁用选项
export default {
  ...
  data () {
    return {
      listdata: ['选项1', '选项2', '选项3', '选项4'],
      currentValue: [],
    }
  }
}
```
```javascript
//包含禁用选项
export default {
  ...
  data () {
    return {
      listdata: [{value: '多选项'},
        {value: '选中'},
        {value: '被禁用', disChoose: true},
        {value: '选中禁用', disChoose: true}],
      currentValue: ['选中','选中禁用'],
    }
  }
}
```

## Props

| 参数          | 描述                            | 类型    | 默认值   | 备注  |
|-------------- |-------------------------------- |-------  |-------- |------ |
| listData      | 传入的 CheckGroup 数据           | Array   | []      | 必需  |
| currentValue  | 双向绑定数据值，同步已选中数据   | Array   | []      | 必需  |