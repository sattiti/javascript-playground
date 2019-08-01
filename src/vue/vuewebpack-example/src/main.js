import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

new Vue({
  el: '#app',
  store,
  router,

  // Render methods
  // (createElement: () => VNode) => VNode
  //
  // method1
  // template: `<App/>`,
  // components: { App }
  //
  // method2
  render: h=>h(App)

  // renderError
  // (createElement: () => VNode, error: Error) => VNode
  // development モードでのみ動作する。
  // デフォルトの render 関数でエラーが発生した際に、代替となる描画結果を提供する。
})
