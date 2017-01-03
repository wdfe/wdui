import MessageBox from '../packages/MessageBox/index.js'
import Dialog from '../packages/Dialog/index.js'

const install = function(Vue) {
  if(install.installed) {
    return
  }
  Vue.component(Dialog.name, Dialog)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  version: '0.0.4',
  MessageBox,
  Dialog
}
