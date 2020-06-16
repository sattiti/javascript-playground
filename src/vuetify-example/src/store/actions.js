export default{
  acToolButtonOnClick: (store, e)=>{
    store.commit('showAcToolDetails', e)
  },

  acToolOnFocus: (store, e)=>{
    store.commit('resetInputValue', e)
  }
}
