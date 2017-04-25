<template lang="html">
  <div class="dialog-area">
    <wd-header title="Dialog" fixed>
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <wd-dialog v-model="dialog">
      <span class="dialog-text">Dialog 弹出一个对话框，内容可以是任意的，可以定制性更大的场景，v-model控制组件的显示。</span>
    </wd-dialog>
    <wd-dialog v-model="dialogBox" @maskClick="maskClick()">
      <span class="dialog-text" @click="MassageBoxClick()">点击触发MassageBox</span>
      <div slot="footer" class="dialog-footer">
        <span @click="dialogBox = false">关闭</span>
      </div>
    </wd-dialog>
    <wd-dialog v-model="dialogNum" :maskOpacity=".8">
      <span class="dialogNum">
        <img src="https://sa.geilicdn.com/public_no_1486439719547.jpg?w=280&h=280">
        <div>关注酒评家公众号</div>
        <div class="pressBtn">长按识别二维码</div>
      </span>
    </wd-dialog>
    <div class="messagebox-container">
      <wd-button @click.native="dialog = true">普通弹层</wd-button>
      <wd-button @click.native="dialogBox = true">嵌套MassageBox</wd-button>
      <wd-button @click.native="dialogNum = true">公众号弹窗</wd-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogBox: false,
      dialogNum: false
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
</script>

<style lang="sass">
.dialog-area {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;

  .app-header-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
  }
}
.dialog-text {
  font-size: 28px;
  line-height: 36px;
}
.dialogNum {
  text-align: center;
}
.dialogNum img {
  width: 100%;
}
.dialogNum div:first-of-type {
  margin-top: 20px;
  font-size:40px;
}
.dialogNum .pressBtn{
  color: #999;
  font-size: 28px;
  margin-top: 16px;
}

</style>
