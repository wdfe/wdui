# Swipe

## 单独引入

```javascript
import { Swipe } from 'wdui'
import { SwipeItem } from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-swipe': Swipe,
    'wd-swipe-item': SwipeItem,
  },
  ...
}
```

## 用法

基本用法

```html
<wd-swipe>
  <wd-swipe-item>page1</wd-swipe-item>
  <wd-swipe-item>page2</wd-swipe-item>
  <wd-swipe-item>page3</wd-swipe-item>
</wd-swipe>
```

取消自动播放

```html
<wd-swipe :auto="0">
  <wd-swipe-item>page1</wd-swipe-item>
  <wd-swipe-item>page2</wd-swipe-item>
  <wd-swipe-item>page3</wd-swipe-item>
</wd-swipe>
```

隐藏 indicators

```html
<wd-swipe :show-indicators="false">
  <wd-swipe-item>page1</wd-swipe-item>
  <wd-swipe-item>page2</wd-swipe-item>
  <wd-swipe-item>page3</wd-swipe-item>
</wd-swipe>
```

显示标题

```html
<wd-swipe :show-title="true" :indicators-position="'right'">
  <wd-swipe-item :title="'这是第1页的标题'">page1</wd-swipe-item>
  <wd-swipe-item :title="'这是第2页的标题'">page2</wd-swipe-item>
  <wd-swipe-item :title="'这是第3页的标题'">page3</wd-swipe-item>
</wd-swipe>
```

使用页数

```html
<wd-swipe :indicators-type="'number'">
  <wd-swipe-item>page1</wd-swipe-item>
  <wd-swipe-item>page2</wd-swipe-item>
  <wd-swipe-item>page3</wd-swipe-item>
</wd-swipe>
```

## Props

| 参数                  | 描述                                                                                            | 类型      | 默认值   | 备注                                |
|---------------------  |------------------------------------------------------------------------------------------------ |---------  |-------- |-----------------------------------  |
| speed                 | 动画持续时间(毫秒)                                                                              | Number    | 300     |                                     |
| auto                  | 自动播放的时间间隔(毫秒)                                                                         | Number    | 3000    |                                     |
| defaultIndex          | 初始显示的轮播图的索引                                                                           | Number    | 0       |                                     |
| show-title            | 显示标题                                                                                        | Boolean   | false   | 需同时设置 swipe-item 的 title 值  |
| show-indicators       | 显示 indicators                                                                                 | Boolean   | true    |                                     |
| indicators-type       | indicators 类型                                                                                 | String    | dot     | 可选值：dot / number                |
| indicators-position   | indicator 位置                                                                                  | String    | center  | 可选值：center / right              |
| loop                  | 是否可以循环播放                                                                                | Boolean   | true    |                                     |
| prevent               | 是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能  | Boolean   | false   |                                     |

## 可供调用的实例方法

| 方法名   | 描述    | 备注  |
|-------- |-------- |------ |
| next    | 下一页   | /     |
| prev    | 上一页   | /     |