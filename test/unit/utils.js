import Vue from 'vue'

let id = 20170302

export const createDiv = () => {
  const $div = document.createElement('div')
  $div.id = (id++)
  document.body.appendChild($div)
  return $div
}

export const createCompInstance = (Component, propsData) => {
  const Constructor = Vue.extend(Component)
  return new Constructor({
    propsData
  }).$mount()
}

export const createVueInstance = (option) => {
  let div = createDiv()
  return new Vue(option).$mount(div)
}

export const destroyVM = (vm) => {
  if(vm.$el && vm.$el.parentNode) {
    vm.$el.parentNode.removeChild(vm.$el)
  }
}


