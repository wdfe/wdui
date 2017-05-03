<template>
  <div class="layer-container specification-container">
    <p class="title">视觉层级</p>
    <section>
      <header class="title">视觉层级</header>
      <p class="desc">承载内容的页面底色归为两种，我们赋予他们一些使用规则，在承载文章、按钮、页面提示、缺省页的情况，可以在原页面底色上直接使用。其他的设计形式，需要用卡片来承载页面元素。</p>
      <div class="gallery">
        <img src="../../assets/images/layer-hierarchy-1.png" class="layer-hierarchy">
        <img src="../../assets/images/layer-hierarchy-2.png" class="layer-hierarchy">
        <img src="../../assets/images/layer-hierarchy-3.png" class="layer-hierarchy">
        <img src="../../assets/images/layer-hierarchy-4.png" class="layer-hierarchy">
      </div>
    </section>
    <section>
      <header class="title">卡片</header>
      <p class="desc">关于卡片，我们定义的卡片是承载页面元素的容器，可以任意大小和拉伸。用来区隔模块内容等。</p>
      <div class="gallery">
        <img src="../../assets/images/layer-card.png">
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Layer',
}
</script>
<style lang="sass">

.layer-container {

  section {

    .gallery {
      img {
        margin-top: 10px;
        margin-right: 50px;
        max-width: 100%;

        &.layer-hierarchy {
          width: 420px;
        }
      }
    }

  }

}

</style>
