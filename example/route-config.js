import Index from './components/Index/Index.vue'
import Button from './components/Example/Button.vue'
import Dialog from './components/Example/Dialog.vue'
import InfiniteScroll from './components/Example/InfiniteScroll.vue'
import Lazyload from './components/Example/Lazyload.vue'
import MessageBox from './components/Example/MessageBox.vue'
import Picker from './components/Example/Picker.vue'
import Search from './components/Example/Search.vue'
import Switch from './components/Example/Switch.vue'
import Toast from './components/Example/Toast.vue'

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
      path: '/switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    }
  ]
}
