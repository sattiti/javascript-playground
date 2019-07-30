export default{
  increment: (store, e)=>{
    store.commit('increment')
  },
  decrement: (store, e)=>{
    store.commit('decrement')
  }
}
