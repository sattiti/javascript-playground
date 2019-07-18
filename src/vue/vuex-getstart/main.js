// [VueComponents] -> Dispatch -> [Actions] -> Commit
// |                                           |
// Render <---------- [State] <-- Mutates <--- [Mutations(異変)]

// Actions   非同期処理用。
// Mutations 同期処理用(状態変更)。state 変更の唯一の手段。

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: function(){
      this.state.count = this.state.count + 1;
    }
  }
});


// Counter Component
const Counter = {
  template: `<p>{{ count }}</p>`,
  computed: Vuex.mapState({
    // this.count が store.state.count にマッピング。
    count: state => state.count,
    countAlias: 'count'
  })
};


const vm = new Vue({
  el: '#app',
  store,
  components: {
    counter: Counter
  },
  template: `<div>
<counter></counter>
  </div>
  `,
  mounted: function(){
    document.title = 'vuex-getstart';
  }
});


// state update.
store.commit('increment');
console.log(store.state.count);