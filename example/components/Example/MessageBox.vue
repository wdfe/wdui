<template lang="html">
  <div class="messagebox-container">
    <app-header title="MessageBox" returnUrl="#/"></app-header>
    <wd-button @click.native="showAlert">Alert 示例</wd-button>
    <wd-button @click.native="showConfirm">Confirm 示例</wd-button>
    <wd-button @click.native="showPrompt">Prompt 示例</wd-button>
  </div>
</template>

<script>
import AppHeader from '../Index/AppHeader.vue'

export default {
  components: {
    'app-header': AppHeader
  },
  methods: {
    showAlert: function() {
      this.$MessageBox.alert({
        title: 'alert 标题',
        text: 'alert 文字'
      })
    },
    showConfirm: function() {
      this.$MessageBox.confirm({
        title: 'confirm 标题',
        text: '是否确认？',
        onConfirm(instance) {
          alert('确定！')
          instance.open = false
        },
        onCancel(instance) {
          alert('取消！')
          instance.open = false
        }
      })
    },
    showPrompt: function() {
      this.$MessageBox.prompt({
        title: 'prompt 标题',
        text: '请输入',
        onConfirm(instance) {
          alert(`输入值为：${instance.inputValue}`)
          instance.open = false
        },
        validate(val) {
          return !!val
        }
      })
    }
  }
}
</script>

<style lang="sass">
.messagebox-container {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &>button {
    margin-top: 30px;
  }

  .app-header-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
