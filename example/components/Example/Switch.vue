<template>
  <div class="switch-page">
    <wd-header title="Switch">
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <div class="form-item">
      <span class="status">{{status1}}</span><wd-switch class="switch" v-model="value1"></wd-switch>
    </div>
    <div class="form-item">
      <span class="status">{{status2}}</span><wd-switch class="switch" v-model="value2"></wd-switch>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: false
    }
  },
  computed: {
    status1() {
      return this.value1 ? '开启中' : '关闭'
    },
    status2() {
      return this.value2 ? '开启中' : '关闭'
    }
  }
}
</script>

<style lang="sass">
  .page-title {
    margin: 0 auto 40px;
    height: 130px;
    line-height: 130px;
    font-size: 40px;
    background: #C60A1E;
  }
  .form-item {
    height: 100px;
    line-height: 100px;
    padding: 0 40px;
    font-size: 32px;
    background: #FFFFFF;
    margin-bottom: 2px;
  }
  .switch {
    float: right;
    top: 20px;
    right: 0;
  }
</style>
