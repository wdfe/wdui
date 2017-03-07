<template>
  <div class="component-wrapper">
    <div class="page-title">Swipe</div>
    <h2 class="swipe-title">基础用法</h2>
    <div class="swipe-wrapper">
      <wd-swipe class="swipe" :auto="4000" :show-indicators="true">
        <wd-swipe-item>page1</wd-swipe-item>
        <wd-swipe-item>page2</wd-swipe-item>
        <wd-swipe-item>page3</wd-swipe-item>
        <wd-swipe-item>page4</wd-swipe-item>
      </wd-swipe>
    </div>
    <h2 class="swipe-title">取消自动播放</h2>
    <div class="swipe-wrapper">
      <wd-swipe class="swipe" :auto="0" :show-indicators="true">
        <wd-swipe-item>page1</wd-swipe-item>
        <wd-swipe-item>page2</wd-swipe-item>
        <wd-swipe-item>page3</wd-swipe-item>
        <wd-swipe-item>page4</wd-swipe-item>
      </wd-swipe>
    </div>
    <h2 class="swipe-title">隐藏 indicators</h2>
    <div class="swipe-wrapper">
      <wd-swipe class="swipe" :auto="4000" :show-indicators="false">
        <wd-swipe-item>page1</wd-swipe-item>
        <wd-swipe-item>page2</wd-swipe-item>
        <wd-swipe-item>page3</wd-swipe-item>
        <wd-swipe-item>page4</wd-swipe-item>
      </wd-swipe>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css">
  .component-wrapper .page-title {
    margin-bottom: 0;
  }
  .swipe-wrapper {
    height: 400px;
    margin-bottom: 30px;
  }
  .swipe-title {
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
  }
  .component-wrapper {
    height: 400px;
    /*height: 100%;*/
  }
  .wd-swipe-items-wrap > section:nth-child(1) {
    background: deepskyblue;
  }
  .wd-swipe-items-wrap > section:nth-child(2) {
    background: cyan;
  }
  .wd-swipe-items-wrap > section:nth-child(3) {
    background: chartreuse;
  }
  .wd-swipe-items-wrap > section:nth-child(4) {
    background: green;
  }
</style>
