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
  document.body.appendChild(instance.$el)
  if('theme' in options){
    if(options.theme === 'Light'){
      instance.theme = options.theme
      return instance
    }
  }
  instance.timer = setTimeout(function(){
    instance.close()
  }, instance.duration)
}
Vue.$Toast = Vue.prototype.$Toast = Toast
export default Toast
