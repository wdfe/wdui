<template lang="html">
  <div class="button-container">
    <wd-header title="Button" fixed>
      <router-link to="/" slot="left" class="link">
        <span class="iconfont icon-zuosanjiao"></span>
      </router-link>
    </wd-header>
    <hr />
    <hr />
    <hr />
    <wd-button type="default">default 按钮</wd-button>
    <wd-button type="primary">primary 按钮</wd-button>
    <wd-button type="gray">gray 按钮</wd-button>
    <hr />
    <hr />
    <wd-button type="default" disabled>default 按钮禁用态</wd-button>
    <wd-button type="primary" disabled>primary 按钮禁用态</wd-button>
    <wd-button type="gray" disabled>gray 按钮禁用态</wd-button>
    <hr />
    <hr />
    <wd-button type="default" ghost>default 幽灵按钮</wd-button>
    <wd-button type="primary" ghost>primary 幽灵按钮</wd-button>
    <wd-button type="gray" ghost>gray 幽灵按钮</wd-button>
    <hr />
    <div class="gray-buttons">
      <hr />
      <wd-button type="dark" @click.native="handler()">dark 按钮（仅深色背景上使用）</wd-button>
      <wd-button type="dark" disabled>dark 按钮禁用态</wd-button>
      <wd-button type="dark" ghost>dark 幽灵按钮</wd-button>
      <hr />
      <hr />
      <hr />
    </div>
  </div>
</template>

<script>
</script>

<style lang="sass">
.button-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  button,
  &>hr {
    margin-top: 30px;
  }
  hr {
    border: none;
  }

  .gray-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: rgba(0,0,0,0.6)
  }

  .app-header-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
