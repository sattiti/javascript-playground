<template lang="pug">
  #app
    gnav
    h1 world
    router-view
    counter
    p {{ message }}
    input(type="text", v-myfocus, v-model="message")
</template>


<script>
import Gnav from './components/Gnav.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'app',
  data: function(){
    return{
      message: ''
    }
  },
  components: {
    Gnav,
    Counter
  },

  directives: {
    myfocus: {
      // 初回のひも付いた時に 1 度だけ実行される。
      // binding
      //   .name: v-
      //   .value
      //   .oldValue
      //   .expression
      //   .arg
      //   .modifiers
      bind: (el, binding, vnode, oldVnode)=>{
        el.style.color = 'red'
      },

      // ひも付いている要素が親に挿入された時に呼び出される。
      inserted: (el, binding, vnode, oldVnode)=>{},

      // VNode が更新される度に呼び出される。
      update: (el, binding, vnode, oldVnode)=>{
        console.log(el)
      },

      // VNode と子コンポーネントの VNode が更新された後に呼び出される。
      componentUpdated: (el, binding, vnode, oldVnode)=>{},

      // 取り除かれた時に 1 度だけ呼び出される。
      unbind: (el, binding, vnode, oldVnode)=>{}
    }
  }
}
</script>


<style lang="sass" scoped>
body
  margin: 0
  padding: 0

#app
  width: 100%
</style>
