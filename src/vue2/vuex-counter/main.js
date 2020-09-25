// Components
const Counter = {
  template: `
  <div id="counterbk">
    <p v-for="i in 5">{{ $store.state.count }} ({{ $store.getters.cyohan }})</p>
    <button type="button" @click="increment">+</button>
    <button type="button" @click="decrement">-</button>
    <button type="button" @click="incrementIfCyo">+ 丁</button>
    <button type="button" @click="incrementIfHan">+ 半</button>
    <button type="button" @click="incrementAsync">+ async</button>
  </div>
  `,
  computed: Vuex.mapGetters([
    'cyohan'
  ]),
  methods: Vuex.mapActions([
    'increment',
    'decrement',
    'incrementIfCyo',
    'incrementIfHan',
    'incrementAsync'
  ])
};

// vuex
Vue.use(Vuex);
const store = new Vuex.Store({
  // properties のようなもの。
  state: {
    count: 0
  },

  // state の変更処理を行う。
  mutations: {
    increment: function(state){
      state.count = state.count + 1;
    },
    decrement: function(state){
      state.count = state.count - 1;
    }
  },

  // state を変更処理せず、通知処理だけ行う。
  actions: {
    increment: function(store, e){
      store.commit('increment');
    },
    decrement: function(store, e){
      store.commit('decrement');
    },
    incrementIfCyo: function(store, e){
      if((store.state.count + 1) % 2 === 0) store.commit('increment');
    },
    incrementIfHan: function(store, e){
      if((store.state.count + 1) % 2 === 1) store.commit('increment');
    },
    incrementAsync: function(store){
      return new Promise(function(resolve, reject){
        setTimeout(function(){
          store.commit('increment');
          resolve();
        }, 1000);
      })
    }
  },

  // Vue の computed のようなもの。
  getters: {
    cyohan: function(state, getters){
      console.log(getters);
      return state.count % 2 === 0 ? '半' : '丁';
    }
  }
});


// main
const vm = new Vue({
  el: '#app',
  store,
  
  //components: [Counter]
  render: function(createElement){
    return createElement(Counter);
  },
  mounted: function(){
    document.title = 'vuex Counter';
  }
});
