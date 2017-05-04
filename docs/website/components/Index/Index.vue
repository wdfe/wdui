<template>
  <div class="index-container">
    <section class="banner">
      <content class="particles">
        <div class="mask" id="particles-js"></div>
        <p class="title">全新的 WDUI，助力移动开发</p>
        <p class="subtitle">轻量且精美的 UI 控件库让你快速搭建 APP 布局</p>
        <div class="button-group">
          <router-link to="/components/quickstart" class="button-start">快速开始</router-link>
          <router-link to="/specifications/intro" class="button-doc">查看文档</router-link>
          <a href="https://wdfe.github.io/wdui/demo.html" class="button-demo">查看演示</a>
        </div>
      </content>
    </section>
    <section class='feature'>
      <content>
        <div class="feature-article">
          <p class="title">精美的 UI 控件库</p>
          <p class="subtitle">遵循微店的设计规范，我们开发了一系列精美的移动UI组件，在满足不同功能操作体验的同时让界面更加规范、易用、美观。组件的设计兼具不同屏幕的适配，专为移动而生。</p>
        </div>
        <img src="../../assets/images/index-kit.png">
      </content>
    </section>
    <section class='feature'>
      <content>
        <img src="../../assets/images/index-powerful.png">
        <div class="feature-article">
          <p class="title">功能强大的组件</p>
          <p class="subtitle">WDUI 提供一系列的 JavaScript 插件和 CSS 组件包含按钮、表单、提示、弹窗等常用组件，另外还解决了移动端口屏幕适配等问题，大幅度提升了开发的效率。</p>
        </div>
      </content>
    </section>
    <section class='feature'>
      <content>
        <div class="feature-article">
          <p class="title">轻量级、高性能</p>
          <p class="subtitle">WDUI 面向 HTML5 开发，使用 CSS3 来做动画交互，平滑、高效，更适合移动设备，让 Web 应用更快速载入。</p>
        </div>
        <img src="../../assets/images/index-lightweight.png">
      </content>
    </section>
    <section class='feature'>
      <content>
        <img src="../../assets/images/index-down.png">
        <div class="feature-article">
          <p class="title">丰富的素材资源</p>
          <p class="subtitle">丰富的素材资源，包括控件设计的规范、产品设计过程中使用到的中英文字体、IconFont 字体文件等，我们会持续提供更多优质资源的下载。</p>
        </div>
      </content>
    </section>
  </div>
</template>

<script>
import particlesJS from '../../assets/js/particles/particles.js'
import option from '../../assets/js/particles/particles.json'

export default {
  name: 'Index',
  mounted() {
    particlesJS('particles-js', option)
  }
}
</script>
<style lang="sass">
.index-container {
  margin: 0!important;
  width: 100%!important;

  section {
    width: 100%;

    content {
      display: flex;
      align-items: center;
      margin: 0 auto;
      width: 82.5%;
      min-width: 1200px;
      max-width: 1600px;

      &.particles {
        position: relative;
        height: 100%;

        .mask {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }

    &.banner {
      height: 460px;
      background-color: #222;

      content {
        flex-direction: column;

        .title {
          margin-top: 132px;
          font-size: 48px;
          color: #fff;
          letter-spacing: 0;
          line-height: 67px;
          z-index: 1;
        }
        .subtitle {
          font-size: 20px;
          color: #fff;
          letter-spacing: 0;
          line-height: 28px;
          z-index: 1;
        }
        .button-group {
          margin-top: 66px;
          z-index: 1;

          a {
            display: inline-block;
            margin-right: 10px;
            width: 180px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            color: #fff;
            border: 1px solid #3399ff;
            border-radius: 4px;
            font-size: 20px;

            &.button-start {
              background-color: #3399ff;
            }
          }
          .button-demo {
            display: none;
          }
        }
      }
    }

    &.feature {
      height: 413px;
      background-color: #FFF;

      content {
        height: 100%;
        justify-content: space-between;
        align-items: center;

        .feature-article {
          width: 530px;

          .title {
            font-size: 20px;
            font-weight: bolder;
            line-height: 24px;
            color: #222;
          }
          .subtitle {
            margin-top: 10px;
            font-size: 16px;
            color: #737373;
            line-height: 24px;
          }
        }
        img {
          height: 274px;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .index-container {
    section {
      content {
        min-width: 0;
      }

      &.banner {
        .particles {
          width: 100%;
          margin: 0;

          .title {
            margin: 80px 20px 0;
            font-size: 40px;
            line-height: 50px;
            text-align: center;
          }
          .subtitle {
            margin: 30px 20px 0;
            text-align: center;
            font-size: 18px;
            line-height: 24px;
          }
          .button-group {
            margin-top: 55px;

            .button-doc {
              display: none;
            }
            .button-start {
              display: none;
            }
            .button-demo {
              display: inline-block;
            }
          }
        }
      }

      &.feature {
        height: 300px;

        content {
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;

          img {
            height: 80px;
          }
        }

        &:nth-child(even) {
          content {
            img {
              margin-left: 15px;
            }
          }
        }

        &:nth-child(odd) {
          content {
            img {
              margin-right: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
