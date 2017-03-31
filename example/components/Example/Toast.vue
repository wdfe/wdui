<template lang="html">
  <div class="toast-container">
    <app-header title="Toast" returnUrl="#/"></app-header>
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
      let toast1 = this.$Toast({
        content: 'Hello',
        autoClose: false
      })
      setTimeout(function(){
        toast1.close()
      }, 2000)
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

<style lang="sass">
.toast-container{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .app-header-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
