<template>
  <div class="app-header-container">
    <span class="iconfont icon-zuosanjiao" @click="handleClick" v-if="!disableReturn"></span>
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>

export default {
  name: 'app-header',
  props: {
    title: {
      default: ''
    },
    disableReturn: {
      type: Boolean,
      default: false
    },
    returnUrl: {
      type: String
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick() {
      if(this.returnUrl) {
        location.href = this.returnUrl
      }else {
        window.history.go(-1)
      }
    }
  }
}
</script>
<style lang="sass">
.app-header-container {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 96px;
  background-color: #C60A1E;

  p {
    font-size: 36px;
    text-align: center;
    color: #fff;
  }

  span {
    margin-left: 24px;
    font-size: 36px;
    color: #fff;
    position: absolute;
    left: 0;
  }
}
</style>
