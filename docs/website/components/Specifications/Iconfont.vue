<template>
  <div class="iconfont-container specification-container">
    <p class="title">Iconfont</p>
    <section>
      <p class="desc">提供了一套常用的 Iconfont 字体库。</p>
    </section>
    <section>
      <header class="title">使用方法</header>
      <p class="desc">直接在 DOM 元素上加入图标对应的 Class 即可。</p>
    </section>
    <section>
      <header class="title">示例：</header>
      <p class="iconfont-example">
        <i class="wd-icon-star"></i>
        <i class="wd-icon-message"></i>
        <i class="wd-icon-search"></i>
      </p>
      <pre><code class="html">  &lt;i class="wd-icon-star">&lt;/i>
    &lt;i class="wd-icon-message">&lt;/i>
    &lt;i class="wd-icon-search">&lt;/i></code></pre>
    </section>
    <section>
      <header class="title">图标集合</header>
      <div class="gallery">
        <div class="iconfont-item" v-for="iconfont in iconfontlist">
          <i :class="iconfont.class"></i>
          <p class="class">{{ iconfont.class }}</p>
          <p class="unicode">{{ iconfont.unicode }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/*global hljs*/
import {highlightInit} from '../../util/utils.js'

export default {
  name: 'Iconfont',
  data() {
    return {
      iconfontlist: [
        {
          class: 'wd-icon-zero',
          unicode: '\\e900'
        },
        {
          class: 'wd-icon-one',
          unicode: '\\e901'
        },
        {
          class: 'wd-icon-two',
          unicode: '\\e902'
        },
        {
          class: 'wd-icon-three',
          unicode: '\\e903'
        },
        {
          class: 'wd-icon-four',
          unicode: '\\e904'
        },
        {
          class: 'wd-icon-five',
          unicode: '\\e905'
        },
        {
          class: 'wd-icon-six',
          unicode: '\\e906'
        },
        {
          class: 'wd-icon-seven',
          unicode: '\\e907'
        },
        {
          class: 'wd-icon-eight',
          unicode: '\\e908'
        },
        {
          class: 'wd-icon-nine',
          unicode: '\\e909'
        },
        {
          class: 'wd-icon-verify',
          unicode: '\\e90a'
        },
        {
          class: 'wd-icon-nav',
          unicode: '\\e90b'
        },
        {
          class: 'wd-icon-search',
          unicode: '\\e90c'
        },
        {
          class: 'wd-icon-cart-simple',
          unicode: '\\e90d'
        },
        {
          class: 'wd-icon-message',
          unicode: '\\e90e'
        },
        {
          class: 'wd-icon-like-off',
          unicode: '\\e90f'
        },
        {
          class: 'wd-icon-like-on',
          unicode: '\\e910'
        },
        {
          class: 'wd-icon-check',
          unicode: '\\e911'
        },
        {
          class: 'wd-icon-cart-off',
          unicode: '\\e912'
        },
        {
          class: 'wd-icon-cart-on',
          unicode: '\\e913'
        },
        {
          class: 'wd-icon-menu',
          unicode: '\\e914'
        },
        {
          class: 'wd-icon-shop',
          unicode: '\\e915'
        },
        {
          class: 'wd-icon-star',
          unicode: '\\e916'
        },
        {
          class: 'wd-icon-qq',
          unicode: '\\e917'
        },
        {
          class: 'wd-icon-weixin',
          unicode: '\\e918'
        },
        {
          class: 'wd-icon-money',
          unicode: '\\e919'
        },
        {
          class: 'wd-icon-prom-share',
          unicode: '\\e91a'
        },
        {
          class: 'wd-icon-prom-fans',
          unicode: '\\e91b'
        },
        {
          class: 'wd-icon-prom-goods',
          unicode: '\\e91c'
        },
        {
          class: 'wd-icon-prom-headline',
          unicode: '\\e91d'
        },
        {
          class: 'wd-icon-consult',
          unicode: '\\e91e'
        },
        {
          class: 'wd-icon-prom-wxapp',
          unicode: '\\e91f'
        },
        {
          class: 'wd-icon-account',
          unicode: '\\e920'
        },
        {
          class: 'wd-icon-prom-helper',
          unicode: '\\e921'
        },
        {
          class: 'wd-icon-prom-data',
          unicode: '\\e922'
        },
        {
          class: 'wd-icon-prom-activity',
          unicode: '\\e923'
        },
        {
          class: 'wd-icon-up',
          unicode: '\\e924'
        },
        {
          class: 'wd-icon-down',
          unicode: '\\e925'
        },
        {
          class: 'wd-icon-left',
          unicode: '\\e926'
        },
        {
          class: 'wd-icon-right',
          unicode: '\\e927'
        },
        {
          class: 'wd-icon-up2',
          unicode: '\\e928'
        },
        {
          class: 'wd-icon-down2',
          unicode: '\\e929'
        },
        {
          class: 'wd-icon-left2',
          unicode: '\\e92a'
        },
        {
          class: 'wd-icon-right2',
          unicode: '\\e92b'
        },
        {
          class: 'wd-icon-account2',
          unicode: '\\e92c'
        },
        {
          class: 'wd-icon-image',
          unicode: '\\e92d'
        },
        {
          class: 'wd-icon-trash',
          unicode: '\\e92e'
        },
        {
          class: 'wd-icon-lock',
          unicode: '\\e92f'
        }
      ]
    }
  },
  mounted() {
    highlightInit(hljs)
  }
}
</script>
<style lang="sass">

.iconfont-container {

  section {

    .gallery {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;

      .iconfont-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        color: #737373;
        width: 150px;
        height: 120px;

        i {
          margin-top: 15px;
          margin-bottom: 15px;
          font-size: 24px;
          color: #000;
        }
        .class {
          color: #666;
        }
        .unicode {
          color: #aaa;
          font-size: 12px;
        }
      }
    }

    .iconfont-example {
      margin-top: 10px;
      font-size: 20px;
    }
  }
}

</style>
