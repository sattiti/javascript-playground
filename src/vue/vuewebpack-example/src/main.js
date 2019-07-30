import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

new Vue({
  el: '#app',
  store,
  router,

  // render methods
  // 1
  // template: `<App/>`,
  // components: { App }

  // 2
  render: h=>h(App)
})
