# Radio

## 单独引入

```javascript
import {Radio} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-radio': Radio
  },
  ...
}
```

## 用法

Radio 组件 通过 `v-model` 设置已选中的数据。

```html
<ul class="custome-radiolist-list">
  <li v-for="list in listData">
    <label>
      <wd-radio
        :disChoose="list.disChoose"
        :name="'radio1'"
        :nowValue="currentValue"
        :text="list.value || list"
        v-model="currentValue">
      </wd-radio>
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
      listData: ['选项1', '选项2', '选项3', '选项4'],
      currentValue: '选项2',
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
      [{value: '选项1'}, {value: '选中'}, {value: '选项3'}, {value: '被禁用', disChoose: true}],
      currentValue: '选中',
    }
  }
}
```

## 配置项

| 参数        | 描述                                            | 类型      | 默认值   | 备注  |
|-----------  |------------------------------------------------ |---------  |-------- |------ |
| disChoose   | 是否为禁用选项                                   | Boolean   | false   | 可选  |
| nowValue    | 绑定的v-model值                                 | String    | ''      | 必需  |
| name        | radio name值，多个表单list同时存在时需传入      | String    | ''      | 可选  |
| text        | 表单value值                                      | String    | ''      | 可选  |
| v-model     | 双向绑定数据值，和nowValue一致，同步已选中数据   | Array     | /       | 必需  |

# RadioGroup

## 单独引入

```javascript
import {RadioGroup} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-radiogroup': RadioGroup
  },
  ...
}
```

## 用法

RadioGroup 组件 通过 `v-model` 设置已选中的数据。

```html
<wd-radiogroup
  :listData="listdata"
  :name="'group1'"
  v-model="currentValue">
</wd-radiogroup>
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
      listdata: [lists2: [{value: '选项1'}, {value: '选中'}, {value: '选项3'}, {value: '被禁用', disChoose: true}],
      currentValue: '选中',
    }
  }
}
```

## Props

| 参数      | 描述                                            | 类型    | 默认值   | 备注  |
|---------- |-----------------------------------------------  |-------- |-------- |------ |
| listData  | 传入的 RadioGroup 数据                         | Array   | []      | 必需  |
| name      | radio name 值，多个表单 list 同时存在时需传入   | String  | ''      | 可选  |
| v-model   | 双向绑定数据值，同步已选中数据                 | String  | ''      | 必需  |