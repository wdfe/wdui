import MessageBox from '../packages/MessageBox/index.js'
import Toast from '../packages/Toast/index.js'
import Button from '../packages/Button/index.js'
import InfiniteScroll from '../packages/InfiniteScroll/index.js'
import Lazyload from '../packages/Lazyload'
import Dialog from '../packages/Dialog/index.js'
import Picker from '../packages/Picker/index.js'

const install = function(Vue) {
  if(install.installed) {
    return
  }

  Vue.component(Button.name, Button)
  Vue.directive('InfiniteScroll', InfiniteScroll)
  Vue.use(Lazyload, {
    try: 3
  })
  Vue.component(Dialog.name, Dialog)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  version: '0.1.0',
  MessageBox,
  Toast,
  InfiniteScroll,
  Lazyload,
  Button,
  Dialog,
  Picker
}
