import Vue from 'vue'

export const createCompInstance = (Component, propsData) => {
  const Constructor = Vue.extend(Component)
  return new Constructor({
    propsData
  }).$mount()
}


