<template>
  <div class="resources-container">
    <aside></aside>
    <content>
      <div class="resources-wrap">
        <p class="title">资源下载</p>
        <div class="gallery">
          <section class="download-item">
            <p class="title">微店移动端设计规范</p>
            <p class="desc">我们的设计规范会随着产品的变化而不断升级，对于未来的各种不同的变化，需要提供良好的扩展性。在规范实施稳定后应该有固定的人员进行维护升级，更新样式库。</p>
            <div class="placeholder">
              <a href="/resource/WDUIStyleGuide.zip" download>
                <img src="../../assets/images/resource-guide.png">
              </a>
            </div>
          </section>
          <section class="download-item">
            <p class="title">UI Kit</p>
            <p class="desc">我们的设计规范会随着产品的变化而不断升级，对于未来的各种不同的变化，需要提供良好的扩展性。在规范实施稳定后应该有固定的人员进行维护升级，更新样式库。</p>
            <div class="placeholder">
              <a href="/resource/WDUIComponents.zip" download>
                <img src="../../assets/images/resource-ui.png">
              </a>
            </div>
          </section>
        </div>
      </div>
    </content>
  </div>
</template>

<script>
export default {
  name: 'Resources',
  data() {
    return {
      active: ''
    }
  },
  created() {
    this.highlight()
  },
  methods: {
    highlight() {
      this.active = this.$route.name
    }
  }
}
</script>
<style lang="sass">
.resources-container {
  .gallery {
    display: flex;
    flex-wrap: wrap;

    section {
      width: 50%;
      box-sizing: border-box;

      .placeholder {
        margin-top: 20px;
        width: 530px;
        background-color: #F4F3F3;

        img {
          display: block;
          width: 100%;
        }
      }

      &:nth-child(odd) {
        padding-right: 20px;
      }
      &:nth-child(even) {
        padding-left: 20px;
      }
    }
  }
}
</style>
