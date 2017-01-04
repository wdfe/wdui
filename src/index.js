import MessageBox from '../packages/MessageBox/index.js'
import Toast from '../packages/Toast/index.js'
import InfiniteScroll from '../packages/InfiniteScroll/index.js'
const install = function(Vue) {
  if(install.installed) {
    return
  }
  Vue.directive('InfiniteScroll', InfiniteScroll)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  version: '0.0.6',
  MessageBox,
  Toast,
  InfiniteScroll
}
