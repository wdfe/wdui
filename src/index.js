import Button from '../packages/Button/index.js'
import Dialog from '../packages/Dialog/index.js'
import InfiniteScroll from '../packages/InfiniteScroll/index.js'
import Lazyload from '../packages/Lazyload'
import MessageBox from '../packages/MessageBox/index.js'
import Picker from '../packages/Picker/index.js'
import Search from '../packages/Search/index.js'
import Swipe from '../packages/Swipe/index.js'
import SwipeItem from '../packages/SwipeItem/index.js'
import Switch from '../packages/Switch/index.js'
import Toast from '../packages/Toast/index.js'
import Popup from '../packages/Popup/index.js'
import Radio from '../packages/Radio/index.js'
import RadioGroup from '../packages/RadioGroup/index.js'
import Checkbox from '../packages/Checkbox/index.js'
import CheckboxGroup from '../packages/CheckboxGroup/index.js'
import ImagePreview from '../packages/ImagePreview/index.js'
import Tooltip from '../packages/Tooltip/index.js'
import ActionSheet from '../packages/ActionSheet/index.js'

const install = function(Vue) {
  if(install.installed) {
    return
  }

  Vue.component(Button.name, Button)
  Vue.component(Dialog.name, Dialog)
  Vue.directive('wd-infiniteScroll', InfiniteScroll)
  Vue.use(Lazyload, {try: 3})
  Vue.component(Search.name, Search)
  Vue.component(Popup.name, Popup)
  Vue.component(Tooltip.name, Tooltip)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(Switch.name, Switch)
  Vue.component(Radio.name, Radio)
  Vue.component(RadioGroup.name, RadioGroup)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(CheckboxGroup.name, CheckboxGroup)

  Vue.$Toast = Vue.prototype.$Toast = Toast
  Vue.$ActionSheet = Vue.prototype.$ActionSheet = ActionSheet
  Vue.$ImagePreview = Vue.prototype.$ImagePreview = ImagePreview
  Vue.$MessageBox = Vue.prototype.$MessageBox = MessageBox
  Vue.$Picker = Vue.prototype.$Picker = Picker
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '0.4.4'

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
  Toast,
  Popup,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  ImagePreview,
  Tooltip,
  ActionSheet
}
