import Index from '../components/Index/Index.vue'
import UsageSidebar from '../components/App/UsageSidebar.vue'

import Intro from '../components/Specifications/Intro.vue'
import Color from '../components/Specifications/Color.vue'
import Typography from '../components/Specifications/Typography.vue'
import Icon from '../components/Specifications/Icon.vue'
import Image from '../components/Specifications/Image.vue'
import Layer from '../components/Specifications/Layer.vue'
import Layout from '../components/Specifications/Layout.vue'
import Iconfont from '../components/Specifications/Iconfont.vue'

import Components from '../components/Components/Components.vue'

import Resources from '../components/Resources/Resources.vue'

export default {
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/specifications',
      name: 'Specifications',
      component: UsageSidebar,
      children: [{
        path: 'intro',
        name: 'Intro',
        component: Intro
      }, {
        path: 'color',
        name: 'Color',
        component: Color
      }, {
        path: 'typography',
        name: 'Typography',
        component: Typography
      }, {
        path: 'icon',
        name: 'Icon',
        component: Icon
      }, {
        path: 'image',
        name: 'Image',
        component: Image
      }, {
        path: 'layer',
        name: 'Layer',
        component: Layer
      }, {
        path: 'layout',
        name: 'Layout',
        component: Layout
      }, {
        path: 'iconfont',
        name: 'Iconfont',
        component: Iconfont
      }]
    },
    {
      path: '/components/:component',
      name: 'Components',
      component: UsageSidebar
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources
    }
  ]
}
