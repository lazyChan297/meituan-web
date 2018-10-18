// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/style/test.css'
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8888'
axios.interceptors.request.use(
    config => {
        console.log(config)
        return config;
    },
    err => {

    });
axios.interceptors.response.use(
  response => {
    if(response.data.code===1){
      return response.data.retObj
    }else {
      return {error:'error'}
    }
  },
  error => {
    console.log(error)
  }
)

Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
