<template>
  <div class="color-container specification-container">
    <p class="title">色彩</p>
    <section>
      <header class="title">主色 Primary colors</header>
      <p class="desc">APP的主色与品牌红色一致，主要运用于APP内出现的LOGO、相关红色按钮、文字、ICON等。</p>
      <div class="gallery">
        <tint color="#C60A1E" desc="微店品牌色"></tint>
        <tint color="#EEEEEE" desc="默认背景色"></tint>
        <tint color="#FFFFFF" desc="H5纯文字内容背景色"></tint>
      </div>
    </section>
    <section>
      <header class="title">辅色 Secondary colors</header>
      <p class="desc">辅色按照不同场景状态及其功能来使用，主要用于各种状态、链接、模板等。</p>
      <div class="gallery">
        <tint color="#EB4935" desc="提醒、处罚"></tint>
        <tint color="#F69D00" desc="等待、进行中"></tint>
        <tint color="#09BB07" desc="正常、成功"></tint>
        <tint color="#4384D8" desc="操作、链接"></tint>
        <tint color="#6592CD" desc="文字链接"></tint>
      </div>
    </section>
    <section>
      <header class="title">文字排版色 Other colors</header>
      <p class="desc">文字排版色是黑灰渐变色阶，主要用于文字，分割线，线框等。</p>
      <div class="gallery">
        <tint color="#222222" desc="文字"></tint>
        <tint color="#404040" desc="文字"></tint>
        <tint color="#737373" desc="文字"></tint>
        <tint color="#9A9A9A" desc="文字、框"></tint>
        <tint color="#CACACA" desc="文字、线、框"></tint>
        <tint color="#DDDDDD" desc="线、框"></tint>
        <tint color="#F7F7F7" desc="模块"></tint>
      </div>
    </section>
  </div>
</template>

<script>

import Tint from './Tint.vue'

export default {
  name: 'Color',
  components: {
    Tint
  }
}
</script>
<style lang="sass">

.color-container {
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }
}

</style>
