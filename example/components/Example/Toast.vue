<template lang="html">
  <div class="toast-container">
    <wd-button type="primary" @click.native="showToast1">弹层</wd-button>
    <br>
    <wd-button type="primary" @click.native="showToast2">icon弹层</wd-button>
    <br>
    <wd-button type="primary" @click.native="showToast3">强提示</wd-button>
  </div>
</template>

<script>
export default {
  methods: {
    showToast1: function(){
      this.$Toast({
        content: '试试多文字文字'
      })
    },
    showToast2: function(){
      this.$Toast({
        content: 'icon弹层',
        iconClass: 'loader'
      })
    },
    showToast3: function(){
      let some = this.$Toast({
        theme: 'Light',
        content: '弹层',
        iconClass: 'loader'
      })
      setTimeout(function(){
        some.close()
      }, 1000)
    }
  }
}
</script>

<style lang="css">
.toast-container{
  justify-content:center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
