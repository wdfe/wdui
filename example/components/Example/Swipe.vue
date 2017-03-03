<template>
  <div class="component-wrapper">
    <wd-swipe class="swipe" :auto="4000" :show-indicators="true">
      <wd-swipe-item>page1</wd-swipe-item>
      <wd-swipe-item>page2</wd-swipe-item>
      <wd-swipe-item>page3</wd-swipe-item>
      <wd-swipe-item>page4</wd-swipe-item>
    </wd-swipe>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css">
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
