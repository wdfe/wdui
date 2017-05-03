# Dialog

## 单独引入

```javascript
import {Dialog} from 'wdui'

//注册
export default {
  ...
  components: {
    'wd-dialog': Dialog
  },
  ...
}
```

## 用法

Dialog 弹出一个对话框，适合需要定制性更大的场景，通过 `v-model` 来控制组件的显示／隐藏。

基本用法示例：

```html
<wd-dialog v-model="dialog">
  <span>这是一段信息</span>
</wd-dialog>
<wd-button type="gray" @click.native="dialog = true">弹层</wd-button>
```
```javascript
export default {
  data() {
    return {
      dialog: false
    }
  }
}
```

嵌套 MassageBox 示例：

```html
<wd-dialog v-model="dialogBox" @maskClick="maskClick()">
  <span>这是一段信息</span>
  <div slot="footer" class="dialog-footer">
    <span @click="dialogBox = false">关闭</span>
  </div>
</wd-dialog>
<wd-button type="gray" @click.native="dialogBox = true">嵌套MassageBox</wd-button>
```
```javascript
export default {
  data() {
    return {
      dialogBox: false
    }
  },
  methods: {
    maskClick() {
      this.dialogBox = false
    },
    MassageBoxClick() {
      this.$MessageBox.alert({
        title: 'alert 标题',
        text: 'alert 文字'
      })
    }
  }
}
```

公众号弹窗示例：

```html
<wd-dialog v-model="dialogNum" :onShow="showCb" :onHide="hideCb" :maskOpacity=".8">
  <span>这是一段信息</span>
  <img src="img.png">
  <div>关注酒评家公众号</div>
  <div>长按识别二维码</div>
</wd-dialog>
<wd-button type="gray" @click.native="dialogNum = true">嵌套MassageBox</wd-button>
```
```javascript
export default {
  data() {
    return {
      dialogNum: false
    }
  },
  methods: {
    showCb() {
      console.log('show callback!')
    },
    hideCb() {
      console.log('hide callback!')
    }
  }
}
```

## Props

| 参数        | 描述                       | 类型     | 默认值 | 备注  |
|-------------|----------------------------|----------|--------|-------|
| dialogClass | Dialog 的自定义类名        | String   | /      |       |
| showClose   | 是否显示关闭按钮           | Boolean  | true   | false |
| transition  | 设置弹出与关闭时的动画效果 | String   | fade   | fade  |
| maskOpacity | 蒙版透明度                 | Number   | 0.5    |       |
| maskColor   | 蒙版颜色                   | String   | #000   |       |
| onShow      | 窗体出现后的回调函数       | Function | /      |       |
| onHide      | 窗体隐藏后的回调函数       | Function | /      |       |
| onMaskClick | 点击 Mask 时的回调函数     | Function | /      |       |