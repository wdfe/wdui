import MessageBox from '../packages/MessageBox/index.js'
import Toast from '../packages/Toast/index.js'
import Button from '../packages/Button/index.js'
import InfiniteScroll from '../packages/InfiniteScroll/index.js'

const install = function(Vue) {
  if(install.installed) {
    return
  }

  Vue.component(Button.name, Button)
  Vue.directive('InfiniteScroll', InfiniteScroll)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  version: '0.0.7',
  MessageBox,
  Toast,
  Button,
  InfiniteScroll
}
