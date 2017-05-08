<template lang="html">
  <div class="header-container">
    <wd-header fixed title="悬挂标题">
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <br>
    <br>
    <br>
    <br>
    <wd-header title="标准标题"></wd-header>
    <br>
    <wd-header title="带有返回按钮">
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <br>
    <wd-header title="两侧均有内容">
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
      <span slot="right" class="share">分享</span>
    </wd-header>
    <br>
    <wd-header>
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
      <p slot="title"><span class="title">复杂样式</span>标题</p>
      <span slot="right" class="share">分享</span>
    </wd-header>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
.header-container{
  position: relative;

  .link {
    display: flex;
    align-items: center;
  }
  .title {
    color: yellow;
  }
}
</style>
