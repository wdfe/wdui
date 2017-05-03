# Scroller

## 单独引入

```javascript
import {Scroller} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-scroller': Scroller
  },
  ...
}
```

## 用法

Scroller 组件可以提供下拉刷新（`pull-to-refresh`）与上滑无限加载（`infinitescroll`）功能。

在使用 Scroller 组件时，请先为其父元素设置宽高，设置的宽高应为可视区域的宽高。

若要使用 Scroller 组件的 `pull-to-refresh` 功能，需要为其传入 `on-refresh`：数据更新函数，`refreshText`：下拉时展示的提示文字。

示例： Refresh

```html
<div class="page-infinite-wrapper">
  <wd-scroller
    :on-refresh="updateData"
    refreshText="下拉加载更多呦"
    loadingText="正在加载更多哦~"
    ref="scroller"
    >
    <ul class="page-infinite-list">
      <li v-for="item in list" class="page-infinite-listitem"></li>
    </ul>
  </wd-scroller>
</div>
```
在数据更新完成后，需要手动调用 Scroller 的实例方法 `finishPullToRefresh` 来通知组件更新相关状态。

```javascript
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    // 初始化首页内容
    for (let i = 1; i <= 30; i++) {
      this.list.push(i)
    }
  },
  methods: {
    updateData() {
      setTimeout(() => {
        let last = +this.list[0] - 1
        for (let i = last; i > last - 10; i--) {
          this.list.splice(0, 0, i)
        }
        // 数据更新结束后调用 finishPullToRefresh 来通知组件更新相关状态
        this.$refs.scroller.finishPullToRefresh()
      }, 2000)
    }
  }
}
```

若要使用 Scroller 组件的 `infiniteScroll` 功能，需要为其传入 `on-load`：数据更新函数，`loadText`：上滑时展示的提示文字。

示例： LoadMore

```html
<div class="page-infinite-wrapper">
  <wd-scroller
    :on-load="loadData"
    loadText="上拉加载更多"
    loadingText="正在加载更多哦~"
    ref="scroller"
    >
    <ul class="page-infinite-list">
      <li v-for="item in list" class="page-infinite-listitem"></li>
    </ul>
  </wd-scroller>
</div>
```
在数据更新完成后，需要手动调用 Scroller 的实例方法 `finishInfiniteLoading` 来通知组件更新相关状态。

```javascript
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    // 初始化首页内容
    for (let i = 1; i <= 30; i++) {
      this.list.push(i)
    }
  },
  methods: {
    loadData() {
      setTimeout(() => {
        let last = +this.list.slice(-1) + 1
        let moreload = last + 10
        for(let i = last; i < moreload; i++){
          this.list.push(i)
        }
        this.$refs.wrap.finishInfiniteLoading()
      }, 3000)
    }
  }
}
```

通过传入 `loadingText` 参数，可以设置加载中的文案。

通过传入 `noDataText` 参数，可以设置无更多数据时展示的文案。

在数据更新时，若调用 Scroller 实例的 `noMoreRefresh` 或 `noMoreInfiniteLoading`方法，则会通知组件展示无更多数据文案，且更新组件状态。

示例：noData

```javascript
export default {
  methods: {
    updateData() {
      setTimeout(() => {
        let last = +this.list[0] - 1
        if(last < 10) {
          this.$refs.wrap.noMoreRefresh()
          return
        }
        for (let i = last; i > last - 10; i--) {
          this.list.splice(0, 0, i)
        }
        this.$refs.wrap.finishPullToRefresh()
      }, 2000)
    }
  }
}
```

## Props

| 参数          | 描述                | 类型      | 默认值           | 备注  |
|-------------  |-------------------  |---------- |---------------- |------ |
| onRefresh     | 下拉更新 回调函数   | Function  | /               |       |
| onLoad        | 上拉加载 回调函数   | Function  | /               |       |
| refreshText   | 下拉更新文案        | String    | 下拉更新数据    |       |
| loadText      | 上拉加载文案        | String    | 加载更多数据    |       |
| loadingText   | 正在加载文案        | String    | 正在加载        |       |
| noDataText    | 无数据文案         | String    | 没有更多数据了   |       |

## 可供调用的实例方法

| 方法名                 | 类型      | 参数  | 备注                            |
|-----------------------  |---------- |------ |-------------------------------  |
| finishPullToRefresh     | Function  | /     | 下拉刷新 数据更新完成锚点函数   |
| noMoreRefresh           | Function  | /     | 下拉刷新 无更多数据锚点函数    |
| finishInfiniteLoading   | Function  | /     | 上滑加载 数据更新完成锚点函数   |
| noMoreInfiniteLoading   | Function  | /     | 上滑加载 无更多数据锚点函数    |