/* eslint-disable no-undef */
import * as wdui from '../../lib/index.js'
import ActionSheet from '../../lib/action-sheet.js'
import Button from '../../lib/button.js'
import Checkbox from '../../lib/checkbox.js'
import CheckboxGroup from '../../lib/checkbox-group.js'
import Dialog from '../../lib/dialog.js'
import ImagePreview from '../../lib/image-preview.js'
import Lazyload from '../../lib/lazyload.js'
import MessageBox from '../../lib/message-box.js'
import Picker from '../../lib/picker.js'
import Popup from '../../lib/popup.js'
import Radio from '../../lib/radio.js'
import RadioGroup from '../../lib/radio-group.js'
import Search from '../../lib/search.js'
import Swipe from '../../lib/swipe.js'
import SwipeItem from '../../lib/swipe-item.js'
import Switch from '../../lib/switch.js'
import Toast from '../../lib/toast.js'
import Tooltip from '../../lib/tooltip.js'

describe('Lib', () => {

  it('Lib 整体引入', () => {
    expect(wdui).to.be.an('Object')
    expect(wdui.version).to.exist
    expect(wdui.install).to.be.a('Function')
    expect(wdui.Button).to.be.an('Object')
    expect(wdui.Toast).to.be.an('Function')
    expect(wdui.__esModule).to.be.true
  })

  it('Lib ActionSheet 单独引入', () => {
    expect(ActionSheet).to.exist
  })

  it('Lib Button 单独引入', () => {
    expect(Button).to.exist
  })

  it('Lib Checkbox 单独引入', () => {
    expect(Checkbox).to.exist
  })

  it('Lib CheckboxGroup 单独引入', () => {
    expect(CheckboxGroup).to.exist
  })

  it('Lib Dialog 单独引入', () => {
    expect(Dialog).to.exist
  })

  it('Lib ImagePreview 单独引入', () => {
    expect(ImagePreview).to.exist
  })

  it('Lib Lazyload 单独引入', () => {
    expect(Lazyload).to.exist
  })

  it('Lib MessageBox 单独引入', () => {
    expect(MessageBox).to.exist
  })

  it('Lib Picker 单独引入', () => {
    expect(Picker).to.exist
  })

  it('Lib Popup 单独引入', () => {
    expect(Popup).to.exist
  })

  it('Lib Radio 单独引入', () => {
    expect(Radio).to.exist
  })

  it('Lib RadioGroup 单独引入', () => {
    expect(RadioGroup).to.exist
  })

  it('Lib Search 单独引入', () => {
    expect(Search).to.exist
  })

  it('Lib Swipe 单独引入', () => {
    expect(Swipe).to.exist
  })

  it('Lib SwipeItem 单独引入', () => {
    expect(SwipeItem).to.exist
  })

  it('Lib Switch 单独引入', () => {
    expect(Switch).to.exist
  })

  it('Lib Toast 单独引入', () => {
    expect(Toast).to.exist
  })

  it('Lib Tooltip 单独引入', () => {
    expect(Tooltip).to.exist
  })

})
