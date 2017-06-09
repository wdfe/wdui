import Button from '../packages/Button/index.js'
import Dialog from '../packages/Dialog/index.js'
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
import Scroller from '../packages/Scroller/index.js'
import Header from '../packages/Header/index.js'
import Tabbar from '../packages/Tabbar/index.js'
import TabItem from '../packages/TabItem/index.js'
import TabContainer from '../packages/TabContainer/index.js'
import TabContainerItem from '../packages/TabContainerItem/index.js'
import Cell from '../packages/Cell/index.js'
import Badge from '../packages/Badge/index.js'
import Navbar from '../packages/Navbar/index.js'

const install = function(Vue) {
  if(install.installed) {
    return
  }

  Vue.component(Button.name, Button)
  Vue.component(Dialog.name, Dialog)
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
  Vue.component(Scroller.name, Scroller)
  Vue.component(Header.name, Header)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(TabContainer.name, TabContainer)
  Vue.component(TabContainerItem.name, TabContainerItem)
  Vue.component(Cell.name, Cell)
  Vue.component(Badge.name, Badge)
  Vue.component(Navbar.name, Navbar)

  Vue.$Toast = Vue.prototype.$Toast = Toast
  Vue.$ActionSheet = Vue.prototype.$ActionSheet = ActionSheet
  Vue.$ImagePreview = Vue.prototype.$ImagePreview = ImagePreview
  Vue.$MessageBox = Vue.prototype.$MessageBox = MessageBox
  Vue.$Picker = Vue.prototype.$Picker = Picker
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '0.6.6'

export {
  install,
  version,
  Button,
  Dialog,
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
  ActionSheet,
  Scroller,
  Header,
  Tabbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Cell,
  Badge,
  Navbar
}
