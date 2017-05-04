# REM 布局

## 要求

wdui 所有组件均基于 lib-flexible 的 REM 布局编写，使用 wdui 时请先确认项目使用了 lib-flexible 移动端适配方案，否则会导致样式失真。

## 背景需求

移动端设备屏幕尺寸多种多样，从 iPhone 5s 的 `320 x 480` 分辨率到现代安卓机的 `1080 x 1920` 分辨率，让页面适配众多终端设备成为一件越来越头疼的事情。

## CSS 单位 rem

rem 是相对于 html 元素的 font-size 的一个单位。如果 html 上定义了 `font-size: 20px`;，则无论在任何地方都是 `1rem = 20px `这个大小不会受到父元素的影响。如果通过 JS 获取到视口宽度，在 html 上定义 `font-size` 大小为视口宽度，则 1rem 即为 100% 视口宽度。

## 使用 lib-flexible 可伸缩布局方案

lib-flexible 为淘宝出品的移动端自适应方案。将以下 JavaScript 代码以内联方式引入至 `<head>` 标签内：

```
<script type="text/javascript">
  (function(win, lib) {
    var doc = win.document
    var docEl = doc.documentElement
    var metaEl = doc.querySelector('meta[name="viewport"]')
    var flexibleEl = doc.querySelector('meta[name="flexible"]')
    var dpr = 0
    var scale = 0
    var tid
    var flexible = lib.flexible || (lib.flexible = {})

    if (metaEl) {
      console.warn('将根据已有的meta标签来设置缩放比例')
      var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/)
      if (match) {
        scale = parseFloat(match[1])
        dpr = parseInt(1 / scale)
      }
    } else if (flexibleEl) {
      var content = flexibleEl.getAttribute('content')
      if (content) {
        var initialDpr = content.match(/initial\-dpr=([\d\.]+)/)
        var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/)
        if (initialDpr) {
          dpr = parseFloat(initialDpr[1])
          scale = parseFloat((1 / dpr).toFixed(2))
        }
        if (maximumDpr) {
          dpr = parseFloat(maximumDpr[1])
          scale = parseFloat((1 / dpr).toFixed(2))
        }
      }
    }

    if (!dpr && !scale) {
      var isAndroid = win.navigator.appVersion.match(/android/gi)
      var isIPhone = win.navigator.appVersion.match(/iphone/gi)
      var devicePixelRatio = win.devicePixelRatio
      if (isIPhone) {
        // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
        if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
          dpr = 3
        } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
          dpr = 2
        } else {
          dpr = 1
        }
      } else {
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1
      }
      scale = 1 / dpr
    }

    docEl.setAttribute('data-dpr', dpr)
    if (!metaEl) {
      metaEl = doc.createElement('meta');
      metaEl.setAttribute('name', 'viewport')
      metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
      if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(metaEl)
      } else {
        var wrap = doc.createElement('div')
        wrap.appendChild(metaEl)
        doc.write(wrap.innerHTML)
      }
    }

    function refreshRem(){
      var width = docEl.getBoundingClientRect().width
      if (width / dpr > 540) {
        width = 540 * dpr
      }
      var rem = width / 10
      docEl.style.fontSize = rem + 'px'
      flexible.rem = win.rem = rem
    }

    win.addEventListener('resize', function() {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    }, false)
    win.addEventListener('pageshow', function(e) {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    }, false)

    if (doc.readyState === 'complete') {
      doc.body.style.fontSize = 12 * dpr + 'px'
    } else {
      doc.addEventListener('DOMContentLoaded', function() {
        doc.body.style.fontSize = 12 * dpr + 'px'
      }, false)
    }


    refreshRem()

    flexible.dpr = win.dpr = dpr
    flexible.refreshRem = refreshRem
    flexible.rem2px = function(d) {
      var val = parseFloat(d) * this.rem
      if (typeof d === 'string' && d.match(/rem$/)) {
        val += 'px'
      }
      return val
    }
    flexible.px2rem = function(d) {
      var val = parseFloat(d) / this.rem
      if (typeof d === 'string' && d.match(/px$/)) {
        val += 'rem'
      }
      return val
    }

  })(window, window['lib'] || (window['lib'] = {}))
</script>
```

这段代码将会自动为 html 定义 font-size，值为视口宽度的十分之一。引入该段代码之后，无论在何种设备上，1rem = 10% 视口宽度，由固定 PX 布局变为了 REM（百分比）布局，实现了屏幕的适配效果。

在 `<head>` 中引入该段 JS 后，wdui 组件样式即正常工作。

同时，我们推荐在项目中广泛应用 REM 单位。由 Px 转换至 REM 的常用工具有如下几种：

- [px2rem](https://github.com/songsiqi/px2rem)
- [CSSREM](https://github.com/flashlizi/cssrem)
- [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem)

## 参考资料

1. [使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)
2. [lib-flexible](https://github.com/amfe/lib-flexible)
