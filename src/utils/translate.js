/*
 * css translate 操作工具类，用于快速修改 dom 的 css translate 属性
 */

let docStyle = document.documentElement.style
let engine
let translate3d = false

if (window.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
  engine = 'presto'
} else if ('MozAppearance' in docStyle) {
  engine = 'gecko'
} else if ('WebkitAppearance' in docStyle) {
  engine = 'webkit'
} else if (typeof navigator.cpuClass === 'string') {
  engine = 'trident'
}

let cssPrefix = {trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-'}[engine]

let vendorPrefix = {trident: 'ms', gecko: 'Moz', webkit: 'Webkit', presto: 'O'}[engine]

let helperElem = document.createElement('div')
let perspectiveProperty = vendorPrefix + 'Perspective'
let transformProperty = vendorPrefix + 'Transform'
let transformStyleName = cssPrefix + 'transform'
let transitionProperty = vendorPrefix + 'Transition'
let transitionStyleName = cssPrefix + 'transition'
let transitionEndProperty = vendorPrefix.toLowerCase() + 'TransitionEnd'

if (helperElem.style[perspectiveProperty] !== undefined) {
  translate3d = true
}

let getTranslate = function(element) {
  let result = {left: 0, top: 0}
  if (element === null || element.style === null) {
    return result
  }

  let transform = element.style[transformProperty]
  let matches = transform.match(/translate3d\(\s*(-?\d+\.?\d*)px,\s*(-?\d+\.?\d*)px,.*\)/)
  if(matches) {
    result.left = +matches[1]
    result.top = +matches[2]
  }

  return result
}

let cancelTranslateElement = function(element) {
  if (element === null || element.style === null) {
    return
  }
  let transformValue = element.style[transformProperty]
  if (transformValue) {
    transformValue = transformValue.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g, '')
    element.style[transformProperty] = transformValue
  }
}

let translateElement = function(element, x, y) {
  if (x === null && y === null) {
    return
  }

  if (element === null || element === undefined || element.style === null) {
    return
  }

  if (!element.style[transformProperty] && x === 0 && y === 0) {
    return
  }

  if (x === null || y === null) {
    let translate = getTranslate(element)
    if (x === null) {
      x = translate.left
    }
    if (y === null) {
      y = translate.top
    }
  }

  cancelTranslateElement(element)

  if (translate3d) {
    element.style[transformProperty] += ' translate(' + (x ? (x + 'px') : '0px') + ',' + (y ? (y + 'px') : '0px') + ') translateZ(0px)'
  } else {
    element.style[transformProperty] += ' translate(' + (x ? (x + 'px') : '0px') + ',' + (y ? (y + 'px') : '0px') + ')'
  }
}

let getRender = (content) => {
  if (helperElem.style[perspectiveProperty] !== undefined) {
    return function(left, top, zoom) {
      content.style[transformProperty] = 'translate3d(' + (-left) + 'px,' + (-top) + 'px,0) scale(' + zoom + ')'
    }
  } else if (helperElem.style[transformProperty] !== undefined) {
    return function(left, top, zoom) {
      content.style[transformProperty] = 'translate(' + (-left) + 'px,' + (-top) + 'px) scale(' + zoom + ')'
    }
  } else {
    return function(left, top, zoom) {
      content.style.marginLeft = left ? (- left / zoom) + 'px' : ''
      content.style.marginTop = top ? (- top / zoom) + 'px' : ''
      content.style.zoom = zoom || ''
    }
  }
}

export default {
  transformProperty: transformProperty,
  transformStyleName: transformStyleName,
  transitionProperty: transitionProperty,
  transitionStyleName: transitionStyleName,
  transitionEndProperty: transitionEndProperty,
  getElementTranslate: getTranslate,
  translateElement: translateElement,
  cancelTranslateElement: cancelTranslateElement,
  getRender: getRender
}
