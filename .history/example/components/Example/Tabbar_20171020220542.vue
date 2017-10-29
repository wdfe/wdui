<template lang="html">
  <div class="tabbar-container">
    <wd-header title="Tabbar">
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <wd-tab-container v-model="selectedTabId" class="tab-container">
      <wd-tab-container-item tabId="tab1">tab1 内容</wd-tab-container-item>
      <wd-tab-container-item tabId="tab2">tab2 内容</wd-tab-container-item>
      <wd-tab-container-item tabId="tab3">tab3 内容</wd-tab-container-item>
      <wd-tab-container-item tabId="tab4">tab4 内容</wd-tab-container-item>
    </wd-tab-container>
    <br>
    <wd-cell title="当前选中Tab" :value="selectedTabId"></wd-cell>
    <wd-tabbar v-model="selectedTabId" fixed>
      <wd-tab-item tabId="tab1">
        <img slot="icon" class="icon"></img>
        tab1
      </wd-tab-item>
      <wd-tab-item tabId="tab2">
        <img slot="icon" class="icon"></img>
        tab2
      </wd-tab-item>
      <wd-tab-item tabId="tab3">
        <img slot="icon" class="icon"></img>
        tab3
      </wd-tab-item>
      <wd-tab-item tabId="tab4">
        <img slot="icon" class="icon"></img>
        tab4
      </wd-tab-item>
    </wd-tabbar>
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
.tabbar-container{
  position: relative;

  .link {
    display: flex;
    align-items: center;
  }
  .title {
    color: yellow;
  }
  .icon {
    width: 64px;
    height: 64px;
    border: 1px solid #666; /* px */
    box-sizing: border-box;
  }
  .active {
    background-color: #dddddd;
  }
  .tab-container {
    margin-top: 20px;
    padding: 20px;
    height: 500px;
    background-color: #FFF;
    font-size: 28px;
    box-sizing: border-box;
  }
}
</style>
