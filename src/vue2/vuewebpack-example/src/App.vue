<template lang="pug">
  #app
    gnav
    h1 {{ h1text }}
    router-view
    <counter staticString="static hello" :dynamicString="message" />
    checkbox
    p(v-mymouseevent) {{ message }}
    label
      input(type="text", v-model="message")
</template>


<script>
import Gnav from './components/Gnav'
import Counter from './components/Counter'
import Checkbox from './components/Checkbox'

export default {
  name: 'app',

  components: {
    Gnav,
    Counter,
    Checkbox,
  },

  // computed properties は cache され、reactive 依存が変更されたときにだけ再算出する。
  computed: {
    a: vm =>{
      vm.a = 2
    },
    b: {
      get: function(){
        return this.b + 1
      },
      set: function(x){
        this.b = this.b + x
      }
    }
  },

  data: function(){
    return{
      message: 'your name',
      h1text: 'world'
    }
  },

  // v-model が指定されたとき、property と event を変更することができる。
  // default では v-model は、value を property とし、input を event して用いている。
  // model: {
  //   prop: 'class',
  //   event: 'change'
  // },

  // props
  // props: {
  //   propName: {
  //     type: String | Number, Boolean, Array, Object, Date, Function, Symbol,
  //     default: Any,
  //     required: true | false,
  //     validator: (value)=>{
  //
  //     }
  //   }
  // },

  // Vue インスタンスに組み込まれるメソッド。
  // これらのメソッドに直接アクセスでき、ディレクティブの式で使用することもできる。
  // methods: {},

  // instance 化の際に各 object のエントリーに対して監視する。
  watch: {
    '$store.state.count': {
      handler: function(val, oldVal){
        this.h1text = val
      },

      // オブジェクトの中のネストされた値の変更を検出か否か。
      deep: true,

      // コールバックは監視の開始後、直ちに呼ばれる。
      immediate: true
    }
  },

  // propsData
  // new 軽で instance 作成時のみ使用可。
  // instance 作成中にプロパティに値を渡す。
  // 主に unit test 時に使われる。
  // propsData: {},

  // Custom directives.
  // v-bind, v-model のようなカスタムディレクティブを登録することができる。
  directives: {
    mymouseevent: {
      // 初回のひも付いた時に 1 度だけ実行される。
      // binding
      //   .name: v-
      //   .value
      //   .oldValue
      //   .expression
      //   .arg
      //   .modifiers
      bind: (el, binding, vnode, oldVnode)=>{
        el.style.color = 'pink'
        el.addEventListener('mouseover', function(e){
          e.preventDefault()
          const c = e.currentTarget
          c.style.color = 'lime'
        })
        el.addEventListener('mouseout', function(e){
          e.preventDefault()
          const c = e.currentTarget
          c.style.color = 'black'
        })
      },

      // ひも付いている要素が親に挿入された時に呼び出される。
      inserted: (el, binding, vnode, oldVnode)=>{},

      // VNode が更新される度に呼び出される。
      update: (el, binding, vnode, oldVnode)=>{},

      // VNode と子コンポーネントの VNode が更新された後に呼び出される。
      componentUpdated: (el, binding, vnode, oldVnode)=>{},

      // 取り除かれた時に 1 度だけ呼び出される。
      unbind: (el, binding, vnode, oldVnode)=>{}
    }
  }
}
</script>


<style lang="sass">
body
  margin: 0
  padding: 0

#app
  width: 100%
</style>
