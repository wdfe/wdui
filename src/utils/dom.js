import Vue from 'vue'

const isServer = Vue.prototype.$isServer
const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/
const ieVersion = isServer ? 0 : Number(document.documentMode)

/**
 * trim
 * @param string
 * @returns {string}
 */
const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

/**
 * camelCase
 * @param name
 */
const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

/**
 * 绑定事件
 */
export const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * 删除事件
 */
export const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 *
 * @param el
 * @param event
 * @param fn
 */
export const once = function(el, event, fn) {
  let listener = function() {
    if (fn) {
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

/**
 * 包含 class
 * @param el
 * @param cls
 * @returns {boolean}
 */
export function hasClass(el, cls) {
  if (!el || !cls) {
    return false
  }
  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.')
  }
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

/**
 * 添加 class
 * @param el
 * @param cls
 */
export function addClass(el, cls) {
  if (!el) {
    return
  }

  let curClass = el.className
  let classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i]
    if (!clsName) {
      continue
    }

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

/**
 * 删除 class
 * @param el
 * @param cls
 */
export function removeClass(el, cls) {
  if (!el || !cls) {
    return
  }
  let classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i]
    if (!clsName) {
      continue
    }

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

/**
 * 是否支持 css 属性
 * @param css
 * @returns {boolean}
 */
export function supportCss(css) {
  let style = document.documentElement.style
  let prefix = ['Webkit', 'Moz', 'ms', 'O']

  if (css in style) {
    return true
  }

  css = css.replace(/^[a-z]/, a => a.toUpperCase())

  for (let index = 0, length = prefix.length; length > index; index++) {
    if (prefix[index] + css in style) {
      return true
    }
  }
  return false
}

/**
 * 获取样式
 * @type {Function}
 */
export const getStyle = ieVersion < 9 ? function(element, styleName) {
  if (isServer) {
    return
  }
  if (!element || !styleName) {
    return null
  }
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'styleFloat'
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100
        } catch (e) {
          return 1.0
        }
      default:
        return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null)
    }
  } catch (e) {
    return element.style[styleName]
  }
} : function(element, styleName) {
  if (isServer) {
    return
  }
  if (!element || !styleName) {
    return null
  }
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    let computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

/**
 * 设置样式
 * @param element
 * @param styleName
 * @param value
 */
export function setStyle(element, styleName, value) {
  if (!element || !styleName) {
    return
  }

  if (typeof styleName === 'object') {
    for (let prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
    } else {
      element.style[styleName] = value
    }
  }
}
