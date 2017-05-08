<template lang="html">
  <div class="cell2-container">
    <wd-header title="Cell">
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <section>
      <wd-cell title="单独使用"></wd-cell>
    </section>
    <br>
    <section>
      <wd-cell title="标准标题"></wd-cell>
      <wd-cell title="标准标题" value="辅助说明"></wd-cell>
      <wd-cell title="带有链接" value="跳转回首页" to="/#/"></wd-cell>
      <wd-cell>
        <p slot="left"><img src="../../../src/assets/images/check.png" class="left-icon">自定义左侧</p>
        <p slot="right">自定义<span class="red">右侧</span><wd-switch class="switch" @changeValue="update1" :value="value1"></wd-switch></p>
      </wd-cell>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      selectedTabId: 'tab1',
      value1: true
    }
  },
  methods: {
    update1(val) {
      this.value1 = val
    }
  }
}
</script>

<style lang="sass">
.cell2-container{
  position: relative;

  .left-icon {
    margin-right: 10px;
    width: 36px;
  }

  .red {
    margin-right: 10px;
    color: red;
  }
}
</style>
