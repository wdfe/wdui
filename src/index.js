import MessageBox from '../packages/MessageBox/index.js'
import Toast from '../packages/Toast/index.js'
import InfiniteScroll from '../packages/InfiniteScroll/index.js'
import Lazyload from '../packages/Lazyload'

const install = function(Vue) {
  if(install.installed) {
    return
  }
  Vue.directive('InfiniteScroll', InfiniteScroll)
  Vue.use(Lazyload, {
    try: 3
  })

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  version: '0.0.7',
  MessageBox,
  Toast,
  InfiniteScroll,
  Lazyload
}
