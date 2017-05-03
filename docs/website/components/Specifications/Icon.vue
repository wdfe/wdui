<template>
  <div class="icon-container specification-container">
    <p class="title">图标</p>
    <section>
      <header class="title">图标的设计原则</header>
      <p class="desc">图标的设计基本原则，在各种尺寸下保持图标的识别性，可读性，一致性，图标形式简洁。图标的形状可以更多的使用几何形状，图形上对称，一致。图标的制图规则采用网络、比例、尺寸、圆角来约束设计。保持视觉一致性。图标的种类可以分为状态栏图标，内容中的图标，工具栏图标，缺省图标和桌面图标。</p>
    </section>
    <section>
      <header class="title">基本图标绘制网络</header>
      <p class="desc">网格单位a，圆角为2a。图标形状绘制参考如下:</p>
      <div class="grid">
        <div class="grid-wrap example">
          <img src="../../assets/images/icon-grid-example.png">
        </div>
        <div class="grid-wrap">
          <div class="grid-item">
            <img src="../../assets/images/icon-grid-circle.png">
            <p class="grid-type">圆形</p>
          </div>
          <div class="grid-item">
            <img src="../../assets/images/icon-grid-square.png">
            <p class="grid-type">方形</p>
          </div>
          <div class="grid-item">
            <img src="../../assets/images/icon-grid-rectangle.png">
            <p class="grid-type">宽形</p>
          </div>
          <div class="grid-item">
            <img src="../../assets/images/icon-grid-rectangle2.png">
            <p class="grid-type">长形</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <header class="title">图标尺寸</header>
      <p class="desc">主要的图标尺寸分为大致四类。页面内容中的图标尺寸为48px，36px，底部工具栏图标64px，宫格图标120px，缺省图标的尺寸为240px。不常用的图标按照a的倍数变化。</p>
      <div class="gallery">
        <div class="icon-size-item">
          <p class="icon-size-item-type">页面内容中图标</p>
          <div class="icon-size-item-img-wraper">
            <img src="../../assets/images/icon-size-inpage.png">
          </div>
        </div>
        <div class="icon-size-item">
          <p class="icon-size-item-type">底部工具栏图标</p>
          <div class="icon-size-item-img-wraper">
            <img src="../../assets/images/icon-size-intoolbar.png">
          </div>
        </div>
        <div class="icon-size-item">
          <p class="icon-size-item-type">宫格图标</p>
          <div class="icon-size-item-img-wraper">
            <img src="../../assets/images/icon-size-inlatex.png">
          </div>
        </div>
        <div class="icon-size-item">
          <p class="icon-size-item-type">缺省图标</p>
          <div class="icon-size-item-img-wraper">
            <img src="../../assets/images/icon-size-default.png">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Icon',
}
</script>
<style lang="sass">

.icon-container {

  section {
    .icon-grid-img {
      margin-top: 35px;
      width: 100%;
      max-width: 800px;
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;

      .icon-size-item {
        display: flex;
        flex-direction: column;
        margin-right: 54px;
        margin-top: 15px;
        width: 420px;

        img {
          height: 150px;
        }
        .icon-size-item-type {
          color: #737373;
        }
        .icon-size-item-img-wraper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 7px;
          width: 420px;
          height: 300px;
          border: 1px solid #eaeaea;
        }
      }
    }

    .grid {
      display: flex;
      margin-top: 20px;

      .grid-wrap {
        display: flex;
        flex: 1;
        max-width: 390px;
        margin-right: 80px;
        height: 420px;
        flex-wrap: wrap;

        &.example {
          align-items: center;
          justify-content: center;

          img {
            width: 250px;
          }
        }
        .grid-item {
          display: flex;
          width: 50%;
          flex-direction: column;
          align-items: center;
          height: 210px;

          img {
            width: 160px;
          }
          .grid-type {
            margin-top: 15px;
          }
        }
      }
    }
  }
}

</style>
