export default{
  increment: (store, e)=>{
    store.commit('increment')
  },

  decrement: (store, e)=>{
    store.commit('decrement')
  },

  radioSelected: (store, o)=>{
    store.commit('radioSelected', o)
  },

  nextButtonAction: (store, e)=>{
    store.commit('nextButtonAction', e)
  }
}
