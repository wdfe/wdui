import Vue from 'vue'
const ToastConstructor = Vue.extend(require('./Toast.vue'))

const removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

const init = () => {
  return new ToastConstructor({
    el: document.createElement('div')
  })
}

ToastConstructor.prototype.close = function() {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
}

const Toast = (options = {}) => {
  const instance = init()
  clearTimeout(instance.timer)
  instance.visible = true
  instance.duration = options.duration || 2000
  instance.content = options.content || ''
  instance.position = options.position || 'middle'
  instance.iconClass = options.iconClass || ''
  instance.autoClose = options.autoClose || true
  instance.theme = options.theme || 'Dark'
  document.body.appendChild(instance.$el)
  if('autoClose' in options){
    if(options.autoClose === true){
      instance.timer = setTimeout(function(){
        instance.close()
      }, instance.duration)
    }
  }else {
    instance.timer = setTimeout(function(){
      instance.close()
    }, instance.duration)
  }
  return instance
}

export default Toast
