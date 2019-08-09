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

  questions: (state, getters)=>{
    return state.questions
  },

  answers: (state, getters)=>{
    return state.finalAnswers
  },

  buttons: (state, getters)=>{
    return state.buttons
  },

  hasAnswer: (state, getters)=>{
    // return state.currentQnum === 3 ? true : false
  }
}
