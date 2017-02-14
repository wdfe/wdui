<template lang="html">
  <div class="messagebox-container">
    <wd-button type="gray" @click.native="showAlert">Alert 示例</wd-button>
    <wd-button type="gray" @click.native="showConfirm">Confirm 示例</wd-button>
    <wd-button type="gray" @click.native="showPrompt">Prompt 示例</wd-button>
  </div>
</template>

<script>
export default {
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &>button {
    margin-top: 30px;
  }
}
</style>
