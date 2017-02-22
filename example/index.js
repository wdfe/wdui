/* eslint-disable no-unused-vars */
import 'es6-promise/auto'
import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './route-config'
import _http from './util/http.js'
import * as wdui from '../src/index.js'
import './assets/reset.css'

Vue.use(wdui)
Vue.use(VueRouter)

const router = new VueRouter(configRouter)
const app = new Vue({
  el: '#app',
  router: router,
  render(h) {
    return (<router-view></router-view>)
  }
})
