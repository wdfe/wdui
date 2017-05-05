<template>
  <div class="component-wrapper">
    <wd-header title="Swipe" fixed>
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <br>
    <br>
    <br>
    <div class="swipe-wrapper">
      <h2 class="swipe-title">基础用法</h2>
      <wd-swipe class="swipe">
        <wd-swipe-item>page1</wd-swipe-item>
        <wd-swipe-item>page2</wd-swipe-item>
        <wd-swipe-item>page3</wd-swipe-item>
        <wd-swipe-item>page4</wd-swipe-item>
      </wd-swipe>
    </div>
    <div class="swipe-wrapper">
      <h2 class="swipe-title">取消自动播放</h2>
      <wd-swipe class="swipe" :auto="0">
        <wd-swipe-item>page1</wd-swipe-item>
        <wd-swipe-item>page2</wd-swipe-item>
        <wd-swipe-item>page3</wd-swipe-item>
        <wd-swipe-item>page4</wd-swipe-item>
      </wd-swipe>
    </div>
    <div class="swipe-wrapper">
      <h2 class="swipe-title">隐藏 indicators</h2>
      <wd-swipe class="swipe" :show-indicators="false">
        <wd-swipe-item>page1</wd-swipe-item>
        <wd-swipe-item>page2</wd-swipe-item>
        <wd-swipe-item>page3</wd-swipe-item>
        <wd-swipe-item>page4</wd-swipe-item>
      </wd-swipe>
    </div>
    <div class="swipe-wrapper">
      <h2 class="swipe-title">显示标题</h2>
      <wd-swipe class="swipe" :show-title="true" :indicators-position="'right'">
        <wd-swipe-item :title="'这是第1页的标题'">page1</wd-swipe-item>
        <wd-swipe-item :title="'这是第2页的标题'">page2</wd-swipe-item>
        <wd-swipe-item :title="'这是第3页的标题'">page3</wd-swipe-item>
        <wd-swipe-item :title="'这是第4页的标题'">page4</wd-swipe-item>
      </wd-swipe>
    </div>
    <div class="swipe-wrapper">
      <h2 class="swipe-title">使用页数</h2>
      <wd-swipe class="swipe" :indicators-type="'number'">
        <wd-swipe-item>page1</wd-swipe-item>
        <wd-swipe-item>page2</wd-swipe-item>
        <wd-swipe-item>page3</wd-swipe-item>
        <wd-swipe-item>page4</wd-swipe-item>
      </wd-swipe>
    </div>
  </div>
</template>

<script>
</script>

<style lang="sass">
.component-wrapper {
  .swipe {
    height: 420px;
    width: 750px;
  }
  .swipe-wrapper {
    margin-bottom: 30px;
  }
  .swipe-title {
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
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
}
</style>
