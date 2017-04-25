<template lang="html">
  <div class="navbar-container">
    <wd-header title="Navbar">
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <wd-navbar v-model="selectedTabId">
      <wd-tab-item tabId="tab1">tab1</wd-tab-item>
      <wd-tab-item tabId="tab2">tab2</wd-tab-item>
      <wd-tab-item tabId="tab3">tab3</wd-tab-item>
      <wd-tab-item tabId="tab4">tab4</wd-tab-item>
    </wd-navbar>
    <wd-tab-container v-model="selectedTabId" class="tab-container">
      <wd-tab-container-item tabId="tab1">tab1 内容</wd-tab-container-item>
      <wd-tab-container-item tabId="tab2">tab2 内容</wd-tab-container-item>
      <wd-tab-container-item tabId="tab3">tab3 内容</wd-tab-container-item>
      <wd-tab-container-item tabId="tab4">tab4 内容</wd-tab-container-item>
    </wd-tab-container>
    <div class="row">
      <span>当前选中Tab</span>
      <span>{{ selectedTabId }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      selectedTabId: 'tab1'
    }
  },
}
</script>

<style lang="sass">
.navbar-container{
  position: relative;

  .icon-zuosanjiao {
    font-size: 36px;
    color: #fff;
  }
  .tab-container {
    padding: 20px;
    height: 500px;
    background-color: #FFF;
    font-size: 28px;
  }
  .row {
    display: flex;
    margin-top: 20px;
    padding: 0 20px;
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    background-color: #FFF;
    justify-content: space-between;
  }
}
</style>
