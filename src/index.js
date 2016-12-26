import MessageBox from '../packages/MessageBox/index.js'

const install = function() {
  if(install.installed) {
    return
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  install,
  version: '0.0.2',
  MessageBox
}
