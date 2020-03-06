import axios from 'axios'

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
    store.commit('nextButtonAction', {event: e, store: store})
  },

  updateAgree: (store, e)=>{
    store.commit('updateAgree', e)
  },

  getXML: function(store, e){
    axios.get('./data/fruits.xml').then(function(r){
      store.commit('getData', {event, e, data: r.data});
    })
  }
}
