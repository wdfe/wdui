/* eslint-disable no-unused-vars */
import 'es6-promise/auto'
import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './route-config'
import * as wdui from '../src/index.js'
import './assets/reset.css'
import '../src/assets/styles/theme-default/index.scss'
import './assets/iconfont/iconfont.css'
import AppHeader from './components/Index/AppHeader.vue'

Vue.use(wdui)
Vue.use(VueRouter)
Vue.component(AppHeader.name, AppHeader)

const router = new VueRouter(configRouter)
const app = new Vue({
  el: '#app',
  router: router,
  render(h) {
    return (<router-view></router-view>)
  }
})
