import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.credentials = true
Vue.http.options.emulateJSON = true

function _http(url, method, data){
  return Vue.http[method](url, data).then((response) => {
    if(Number(response.data.status.status_code) === 0){
      return response.data.result
    }else if (Number(response.data.status.status_code) === 31002){
      switch (response.data.status.status_reason) {
      case '':
        return ''
      default:
        Vue.$toast(response.data.status.status_reason)
      }
    }else{
      Vue.$toast(response.data.status.status_reason)
    }
  }, (response) => {
    Vue.$toast('wrong')
  })
}

Vue.$Http = Vue.prototype.$Http = _http

export default _http
