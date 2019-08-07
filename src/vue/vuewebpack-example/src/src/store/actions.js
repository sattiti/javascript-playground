export default{
  increment: (store, e)=>{
    store.commit('increment')
  },
  decrement: (store, e)=>{
    store.commit('decrement')
  },

  radioSelected: (store, e)=>{
    store.commit('radioSelected', e)
  },

  nextButtonAction: (store, e)=>{
    store.commit('nextButtonAction', e)
  }
}
