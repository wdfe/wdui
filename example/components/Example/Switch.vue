<template>
  <div class="switch-page">
    <div class="page-title">Switch</div>
    <div class="form-item">
      <span class="status">{{status1}}</span><switchs @changeValue="update1" :value="value1"></switchs>
    </div>
    <div class="form-item">
      <span class="status">{{status2}}</span><switchs @changeValue="update2" :value="value2"></switchs>
    </div>
  </div>
</template>

<script>
  import Switchs from '../../../packages/switch'

  export default {
    data () {
      return {
        value1: true,
        value2: false
      }
    },
    computed: {
      status1 () {
        return this.value1 ? '开启中' : '关闭'
      },
      status2 () {
        return this.value2 ? '开启中' : '关闭'
      }
    },
    methods: {
      update1 (val) {
        this.value1 = val
      },
      update2 (val) {
        this.value2 = val
      }
    },
    components: {
      Switchs
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
