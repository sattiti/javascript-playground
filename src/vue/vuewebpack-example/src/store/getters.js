export default{
  // pageTitle: (state, getters)=>(pageName)=>{
  //   return state.pageTitle[pageName]
  // }

  pageTitle: function(state, getters){
    return function(pageName){
      return state.pageTitle[pageName]
    }
  },

  count: (state, getters)=>{
    return state.count
  },

  cyohan: (state, getters)=>{
    return state.count % 2 === 0 ? '半' : '丁'
  },

  qs: (state, getters, i)=>{
    return state.questions
  },

  buttonValue: (state, getters)=>{
    return state.buttonValue
  }
}
