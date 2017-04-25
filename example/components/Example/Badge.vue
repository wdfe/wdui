<template lang="html">
  <div class="badge-container">
    <wd-header title="Badge">
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <br>
    <wd-cell title="基础小红点">
      <p slot="right"><wd-badge></wd-badge></p>
    </wd-cell>
    <wd-cell title="有数值">
      <p slot="right"><wd-badge :value="3"></wd-badge></p>
    </wd-cell>
    <wd-cell title="数值过多时收纳">
      <p slot="right"><wd-badge :value="190" :limit="99"></wd-badge></p>
    </wd-cell>
    <wd-cell title="显示字符">
      <p slot="right"><wd-badge value="NEW"></wd-badge></p>
    </wd-cell>
    <wd-cell title="带描边">
      <p slot="right" class="border-example"><wd-badge value="8" border></wd-badge></p>
    </wd-cell>
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
.badge-container{
  position: relative;

  .icon-zuosanjiao {
    font-size: 36px;
    color: #fff;
  }
  .border-example {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 90px;
    padding-right: 10px;
    background-color: #C60A1E;
  }
}
</style>
