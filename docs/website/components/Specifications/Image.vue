<template>
  <div class="image-container specification-container">
    <p class="title">图像</p>
    <section>
      <header class="title">图像分类和原则</header>
      <p class="desc">我们APP中的图像大体可分为商品图像，banner，缩略图，头像等几类。其中banner和商品图像均是大图，而缩略图和头像为小图（一般不会超过屏幕的1/2）。在商品图像，banner，缩略图上可能会使用文本，要保证文本的可识别性。</p>
    </section>
    <section>
      <header class="title">文件保护示例</header>
      <p class="desc">网格单位a，圆角为2a。图标形状绘制参考如下:</p>
      <img src="../../assets/images/image-prot-example.png" class="image-prot-example">
    </section>
    <section>
      <header class="title">图像比例和尺寸</header>
      <p class="desc">banner的尺寸按照1080的宽度来适配所有的设备，高度按照需求自行变化。下图为推荐的常用图片比例。</p>
      <img src="../../assets/images/image-ratio.png" class="image-ratio">
    </section>
    <section>
      <header class="title">头像和缩略图常见尺寸</header>
      <p class="desc">头像和缩略图的大部分比例为1：1，我们定义几种常见的缩略图尺寸和使用的情况。头像和缩略图的尺寸定义是按照基本的网格系统定义。</p>
    </section>
    <section>
      <header class="title">1.头像</header>
      <p class="desc">微店里面的头像，均采用圆形。头像的常见尺寸48/64/80/96/120/144/200</p>
      <div class="gallery">
        <div class="column">
          <p>头像48-用于点赞</p>
          <img src="../../assets/images/image-ava-48.png">
          <p>头像64—用于评论列表</p>
          <img src="../../assets/images/image-ava-64.png">
          <p>头像80—用于动态、列表、IM聊天对话框、店铺头像</p>
          <img src="../../assets/images/image-ava-80.png">
          <p>头像96—用于IM、客户列表等</p>
          <img src="../../assets/images/image-ava-96.png">
        </div>
        <div class="column">
          <p>头像144—用于店铺详情头像，商会群</p>
          <img src="../../assets/images/image-ava-144.png">
          <p>头像200—用于店长信息 </p>
          <img src="../../assets/images/image-ava-200.png">
        </div>
      </div>
    </section>
    <section>
      <header class="title">2.缩略图</header>
      <p class="desc">缩略图的常见尺寸128/144/200/240</p>
      <div class="gallery">
        <div class="column">
          <p>缩略图128—用于社区、收入、商品列表、店长笔记</p>
          <img src="../../assets/images/image-thumb-128.png">
          <p>缩略图200—用于商品列表、店长笔记等。</p>
          <img src="../../assets/images/image-thumb-200.png">
        </div>
        <div class="column">
          <p>缩略图144—用于社区、收入、商品列表、店长笔记</p>
          <img src="../../assets/images/image-thumb-144.png">
          <p>缩略图240—用于商品列表、店长笔记等。</p>
          <img src="../../assets/images/image-thumb-240.png">
        </div>
      </div>
    </section>
    <section>
      <header class="title">3.其他图像</header>
      <p class="desc">其他尺寸，社区、商品、商品列表（H5） 。在这些情况下，抛去外边距（按照网格系统定义），定义中间的间距，图片按照数量来均分图片尺寸。</p>
      <div class="gallery">
        <div class="column">
          <p>两图</p>
          <img src="../../assets/images/image-list-2.png">
          <p>四图</p>
          <img src="../../assets/images/image-list-4.png">
        </div>
        <div class="column">
          <p>三图</p>
          <img src="../../assets/images/image-list-3.png">
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Image',
}
</script>
<style lang="sass">

.image-container {

  section {

    .image-prot-example,
    .image-ratio {
      margin-top: 10px;
    }

    .gallery {
      display: flex;

      .column {
        flex: 1;
        margin-right: 50px;

        img {
          margin-top: 10px;
          max-width: 100%;
        }

        p {
          margin-top: 40px;
          font-size: 12px;
          color: #222;
          line-height: 16px;
        }
      }
    }
  }
}

</style>
