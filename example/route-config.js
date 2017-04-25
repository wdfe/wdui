import Index from './components/Index/Index.vue'
import Button from './components/Example/Button.vue'
import Dialog from './components/Example/Dialog.vue'
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
import Scroller from './components/Example/Scroller/Scroller.vue'
import Refresh from './components/Example/Scroller/Refresh.vue'
import Loadmore from './components/Example/Scroller/Loadmore.vue'
import RefreshAndLoadmore from './components/Example/Scroller/RefreshAndLoadmore.vue'
import NoData from './components/Example/Scroller/NoData.vue'
import MultiScroll from './components/Example/Scroller/MultiScroll.vue'
import Header from './components/Example/Header.vue'
import Tabbar from './components/Example/Tabbar.vue'

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
    // {
    //   path: '/infinitescroll',
    //   name: 'InfiniteScroll',
    //   component: InfiniteScroll
    // },
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
    },
    {
      path: '/scroller',
      name: 'Scroller',
      component: Scroller
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/scroller/refresh',
      name: 'Refresh',
      component: Refresh
    },
    {
      path: '/scroller/loadmore',
      name: 'Loadmore',
      component: Loadmore
    },
    {
      path: '/scroller/refreshandloadmore',
      name: 'RefreshAndLoadmore',
      component: RefreshAndLoadmore
    },
    {
      path: '/scroller/nodata',
      name: 'NoData',
      component: NoData
    },
    {
      path: '/scroller/multiscroll',
      name: 'MultiScroll',
      component: MultiScroll
    },
    {
      path: '/tabbar',
      name: 'Tabbar',
      component: Tabbar
    }
  ]
}
