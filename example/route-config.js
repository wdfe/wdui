import Index from './components/Index/Index.vue'
import Button from './components/Example/Button.vue'
import Dialog from './components/Example/Dialog.vue'
import InfiniteScroll from './components/Example/InfiniteScroll.vue'
import Lazyload from './components/Example/Lazyload.vue'
import MessageBox from './components/Example/MessageBox.vue'
import Picker from './components/Example/Picker.vue'
import Search from './components/Example/Search.vue'
import Swipe from './components/Example/Swipe.vue'
import Switch from './components/Example/Switch.vue'
import Toast from './components/Example/Toast.vue'
import Popup from './components/Example/Popup.vue'
import Checkbox from './components/Example/Checkbox.vue'
import Radio from './components/Example/Radio.vue'
import ImagePreview from './components/Example/ImagePreview.vue'
import Tooltip from './components/Example/Tooltip.vue'
import ActionSheet from './components/Example/ActionSheet.vue'

export default {
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/quickstart',
      redirect: '/'
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/infinitescroll',
      name: 'InfiniteScroll',
      component: InfiniteScroll
    },
    {
      path: '/lazyload',
      name: 'Lazyload',
      component: Lazyload
    },
    {
      path: '/messagebox',
      name: 'MessageBox',
      component: MessageBox
    },
    {
      path: '/picker',
      name: 'Picker',
      component: Picker
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/swipe',
      name: 'Swipe',
      component: Swipe
    },
    {
      path: '/switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox
    },
    {
      path: '/imagepreview',
      name: 'ImagePreview',
      component: ImagePreview
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: Tooltip
    },
    {
      path: '/actionsheet',
      name: 'ActionSheet',
      component: ActionSheet
    }
  ]
}
