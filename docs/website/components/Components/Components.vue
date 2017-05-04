<template>
  <div :class="`${component}-container markdown`" v-html="content"></div>
</template>

<script>
/*global hljs*/
import MarkdownIt from 'markdown-it'
import Toast from '../../../zh-cn/Toast.md'
import MessageBox from '../../../zh-cn/MessageBox.md'
import Dialog from '../../../zh-cn/Dialog.md'
import Lazyload from '../../../zh-cn/Lazyload.md'
import Button from '../../../zh-cn/Button.md'
import Search from '../../../zh-cn/Search.md'
import Picker from '../../../zh-cn/Picker.md'
import Swipe from '../../../zh-cn/Swipe.md'
import Switch from '../../../zh-cn/Switch.md'
import Popup from '../../../zh-cn/Popup.md'
import Radio from '../../../zh-cn/Radio.md'
import Checkbox from '../../../zh-cn/Checkbox.md'
import Tooltip from '../../../zh-cn/Tooltip.md'
import ImagePreview from '../../../zh-cn/ImagePreview.md'
import ActionSheet from '../../../zh-cn/ActionSheet.md'
import Header from '../../../zh-cn/Header.md'
import Scroller from '../../../zh-cn/Scroller.md'
import Tabbar from '../../../zh-cn/Tabbar.md'
import Navbar from '../../../zh-cn/Navbar.md'
import Cell from '../../../zh-cn/Cell.md'
import Badge from '../../../zh-cn/Badge.md'
import Quickstart from '../../../zh-cn/Quickstart.md'
import Rem from '../../../zh-cn/Rem.md'
import {highlightInit} from '../../util/utils.js'

const mdList = {
  ['Badge'.toLowerCase()]: Badge,
  ['Toast'.toLowerCase()]: Toast,
  ['MessageBox'.toLowerCase()]: MessageBox,
  ['Dialog'.toLowerCase()]: Dialog,
  ['Lazyload'.toLowerCase()]: Lazyload,
  ['Button'.toLowerCase()]: Button,
  ['Search'.toLowerCase()]: Search,
  ['Picker'.toLowerCase()]: Picker,
  ['Swipe'.toLowerCase()]: Swipe,
  ['Switch'.toLowerCase()]: Switch,
  ['Popup'.toLowerCase()]: Popup,
  ['Radio'.toLowerCase()]: Radio,
  ['Checkbox'.toLowerCase()]: Checkbox,
  ['Tooltip'.toLowerCase()]: Tooltip,
  ['ImagePreview'.toLowerCase()]: ImagePreview,
  ['ActionSheet'.toLowerCase()]: ActionSheet,
  ['Scroller'.toLowerCase()]: Scroller,
  ['Header'.toLowerCase()]: Header,
  ['Tabbar'.toLowerCase()]: Tabbar,
  ['Navbar'.toLowerCase()]: Navbar,
  ['Cell'.toLowerCase()]: Cell,
  ['Quickstart'.toLowerCase()]: Quickstart,
  ['Rem'.toLowerCase()]: Rem
}

const md = new MarkdownIt({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, str).value
    }
    return ''
  }
})

export default {
  name: 'Components',
  props: {
    component: {
      type: String
    },
  },
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.render()
  },
  watch: {
    component() {
      this.render()
    }
  },
  methods: {
    render() {
      this.content = md.render(mdList[this.component])
      this.$nextTick(() => {
        highlightInit(hljs)
      })
    }
  }
}
</script>

<style lang="sass">
.markdown {

  h1 {
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    color: #222;
  }

  h2 {
    margin-top: 50px;
    font-size: 16px;
    line-height: 24px;
    color: #222;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    color: #737373;

    &+p {
      margin-top: 5px;
    }
  }

  ul,ol {
    margin-top: 10px;
  }

  li {
    a {
      color: #737373;
    }
  }
}
</style>
