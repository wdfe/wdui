/* eslint-disable no-undef */
import * as wdui from '../../lib/index.js'

describe('Lib', () => {

  it('整体引入', () => {
    expect(wdui).to.be.an('Object')
    expect(wdui.version).to.exist
    expect(wdui.install).to.be.a('Function')
    expect(wdui.Button).to.be.an('Object')
    expect(wdui.Toast).to.be.an('Function')
    expect(wdui.__esModule).to.be.true
  })
})
