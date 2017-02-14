import Index from './components/Index/Index.vue'
import Toast from './components/Example/Toast.vue'
import InfiniteScroll from './components/Example/InfiniteScroll.vue'
import Search from './components/Example/Search.vue'
import MessageBox from './components/Example/MessageBox.vue'
import Dialog from './components/Example/Dialog.vue'
import Button from './components/Example/Button.vue'
import Picker from './components/Example/Picker.vue'
import Lazyload from './components/Example/Lazyload.vue'

export default {
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
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
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/messagebox',
      name: 'MessageBox',
      component: MessageBox
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/picker',
      name: 'Picker',
      component: Picker
    },
    {
      path: '/quickstart',
      redirect: '/'
    }
  ]
}
