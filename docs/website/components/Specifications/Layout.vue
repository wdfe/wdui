<template>
  <div class="layout-container specification-container">
    <p class="title">基础网络</p>
    <section class="gallery">
      <div class="column">
        <header class="title">常用设备尺寸Android</header>
        <p class="desc">安卓中设计，经常需要适配的安卓设计尺寸，我们设计的尺寸为720的尺寸。其中1倍图Mdpi，我们不做考虑。还有4倍图1440*2560的设备尺寸会越来越多，目前比较常用的是上述三种，HDPI,XHDPI,XXHDPI。</p>
        <img src="../../assets/images/layout-android-size.png">
      </div>
      <div class="column">
        <header class="title">常用设备尺寸 IOS</header>
        <p class="desc">我们设计中，经常需要适配的设计尺寸，我们做的设计尺寸为750，其中iPhone Plus的尺寸是1080*1920，设计尺寸为1242*2208。</p>
        <img src="../../assets/images/layout-ios-size.png">
      </div>
    </section>
    <section>
      <p class="desc">所有的组件以4dp*4dp的基础网络对齐。文字排版，图标也都是以2dp*2dp的基础网络对齐。主要适用于iPhone4/5/6/6 Plus以及安卓Hdpi/XHdpi/XXHdpi等设备尺寸，基本覆盖大多数主流设备。让间距尽量保持4dp的倍数关系，让卡片与卡片，图片与文字，图片与图片，文字与文字之间保持一个统一的间距。</p>
    </section>
    <section>
      <header class="title">页面布局常用模块范例 iPhone6</header>
      <p class="desc">卡片之间的距离0dp/8dp/16dp/20dp 页面元素N*4dp</p>
      <div class="gallery layout-gap">
        <div class="column">
          <p class="desc">卡片间距：0DP</p>
          <img src="../../assets/images/layout-gap-0.png">
          <p class="desc">卡片间距：8D（16px）</p>
          <img src="../../assets/images/layout-gap-8.png">
          <p class="desc">卡片间距：16DP（32px）</p>
          <img src="../../assets/images/layout-gap-16.png">
          <p class="desc">卡片间距：20DP（40px）</p>
          <img src="../../assets/images/layout-gap-20.png">
        </div>
        <div class="column">
          <p class="desc"></p>
          <img src="../../assets/images/layout-card.png">
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Layout',
}
</script>
<style lang="sass">

.layout-container {

  .gallery {
    display: flex;

    .column {
      flex: 1;
      margin-right: 50px;

      img {
        margin-top: 10px;
        max-width: 100%;
      }
    }
    &.layout-gap {
      p {
        margin-top: 50px;
      }
    }
  }
}

</style>
