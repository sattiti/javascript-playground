import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

const vm = new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  render: h=>h(App)
})
