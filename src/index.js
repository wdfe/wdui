import Button from '../packages/Button/index.js'
import Dialog from '../packages/Dialog/index.js'
import InfiniteScroll from '../packages/InfiniteScroll/index.js'
import Lazyload from '../packages/Lazyload'
import MessageBox from '../packages/MessageBox/index.js'
import Picker from '../packages/Picker/index.js'
import Search from '../packages/Search/index.js'
import Switch from '../packages/Switch/index.js'
import Toast from '../packages/Toast/index.js'

const install = function(Vue) {
  if(install.installed) {
    return
  }

  Vue.component(Button.name, Button)
  Vue.component(Switch.name, Switch)
  Vue.directive('wd-infiniteScroll', InfiniteScroll)
  Vue.use(Lazyload, {
    try: 3
  })
  Vue.component(Dialog.name, Dialog)
  Vue.component(Search.name, Search)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '0.3.1'

export {
  install,
  version,
  Button,
  Dialog,
  InfiniteScroll,
  Lazyload,
  MessageBox,
  Search,
  Switch,
  Picker,
  Toast
}
