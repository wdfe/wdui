<template lang="html">
  <div class="tabbar-container">
    <wd-header title="Tabbar">
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <div class="tab-container">
      <p v-show="selectedTabId === 'tab1'">tab1 内容</p>
      <p v-show="selectedTabId === 'tab2'">tab2 内容</p>
      <p v-show="selectedTabId === 'tab3'">tab3 内容</p>
      <p v-show="selectedTabId === 'tab4'">tab4 内容</p>
    </div>
    <div class="row">
      <span>当前选中Tab</span>
      <span>{{ selectedTabId }}</span>
    </div>
    <wd-tabbar v-model="selectedTabId" fixed>
      <wd-tab-item tabId="tab1">
        <div slot="icon" class="icon"></div>
        tab1
      </wd-tab-item>
      <wd-tab-item tabId="tab2">
        <div slot="icon" class="icon"></div>
        tab2
      </wd-tab-item>
      <wd-tab-item tabId="tab3">
        <div slot="icon" class="icon"></div>
        tab3
      </wd-tab-item>
      <wd-tab-item tabId="tab4">
        <div slot="icon" class="icon"></div>
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

  .icon-zuosanjiao {
    font-size: 36px;
    color: #fff;
  }
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
  .tab-container {
    margin-top: 20px;
    padding: 20px;
    height: 500px;
    background-color: #FFF;
    font-size: 28px;
  }
}
</style>
