import MessageBox from '../packages/MessageBox/index.js'

const install = function() {
  if(typeof window !== 'undefined' && window.WDUIInstalled) {
    return
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  window.WDUIInstalled = true
}

module.exports = {
  MessageBox
}
