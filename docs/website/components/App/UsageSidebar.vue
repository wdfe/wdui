<template>
  <div class="usagesidebar-container">
    <aside class="usagesidebar-sidebar sidebar">
      <div class="sidebar-item-group">
        <div class="sidebar-item-group-title">使用</div>
        <div class="sidebar-item" :class="{'active': active === 'quickstart'}">
          <router-link to="/components/quickstart">快速上手</router-link>
        </div>
        <div class="sidebar-item" :class="{'active': active === 'rem'}">
          <router-link to="/components/rem">REM 布局</router-link>
        </div>
      </div>
      <div class="sidebar-item-group">
        <div class="sidebar-item-group-title bold">规范</div>
        <template v-for="item in specifications">
          <div class="sidebar-item" :class="{'active': active === item.en}">
            <router-link :to="`/specifications/${item.en.toLowerCase()}`">{{ item.zh }}</router-link>
          </div>
        </template>
      </div>
      <div class="sidebar-item-group">
        <div class="sidebar-item-group-title bold">组件</div>
        <template v-for="item in components">
          <div class="sidebar-item" :class="{'active': active === item.toLowerCase()}">
            <router-link :to="`/components/${item.toLowerCase()}`">{{ item }}</router-link>
          </div>
        </template>
      </div>
    </aside>
    <content>
      <template v-if="this.$route.matched[0].path === '/components/:component'">
        <components :component="this.$route.params.component"></components>
      </template>
      <template v-else>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </template>
    </content>
    <div class="phone" v-if="this.$route.matched[0].path === '/components/:component'">
      <iframe :src="`/wdui/demo.html#/${active}`"></iframe>
    </div>
  </div>
</template>

<script>
import Components from '../Components/Components.vue'

export default {
  name: 'UsageSidebar',
  components: {
    components: Components
  },
  data() {
    return {
      active: '',
      specifications: [
        {
          en: 'Intro',
          zh: '简介'
        },
        {
          en: 'Color',
          zh: '色彩'
        },
        {
          en: 'Typography',
          zh: '字体排版'
        },
        {
          en: 'Icon',
          zh: '图标'
        },
        {
          en: 'Iconfont',
          zh: 'Iconfont'
        },
        {
          en: 'Image',
          zh: '图像'
        },
        {
          en: 'Layer',
          zh: '视觉层次'
        },
        {
          en: 'Layout',
          zh: '基础网络布局'
        }
      ],
      components: [
        'Toast',
        'MessageBox',
        'Dialog',
        'Lazyload',
        'Button',
        'Search',
        'Picker',
        'Swipe',
        'Switch',
        'Popup',
        'Radio',
        'Checkbox',
        'Tooltip',
        'ImagePreview',
        'ActionSheet',
        'Scroller',
        'Header',
        'Tabbar',
        'Navbar',
        'Cell',
        'Badge'
      ]
    }
  },
  watch: {
    $route() {
      this.highlight()
    }
  },
  created() {
    if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
      window.location.href = 'https://wdfe.github.io/wdui/demo.html'
    }
    this.highlight()
  },
  methods: {
    highlight() {
      if(this.$route.name === 'Components') {
        this.active = this.$route.params.component
      }else {
        this.active = this.$route.name
      }
    }
  }
}
</script>
<style lang="sass">
.usagesidebar-container {
  .phone {
    flex: none;
    align-self: stretch;
    position: relative;
    padding-top: 40px;
    padding-right: 40px;
    background-color: #FFF;
    width: 370px;
    background-image: url('../../assets/images/iphone.png');
    background-size: 370px;
    background-position: 0 40px;
    background-repeat: no-repeat;

    iframe {
      position: absolute;
      border: none;
      top: 132px;
      left: 24px;
      width: 322px;
      height: 571px;
    }
  }
}
</style>
