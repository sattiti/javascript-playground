export default{
  increment: function(state){
    state.count = state.count + 1
  },

  decrement: state=>{
    state.count = state.count - 1
  },

  radioSelected: (state, o)=>{
    let e             = o.event
    state.currentQNum = o.qNum
    state.questions[state.currentQNum].isCompleted = true
    state.finalAnswers[state.currentQNum] = ''
    state.finalAnswers[state.currentQNum] = e.target.getAttribute('value')
    console.log(1)
  },

  nextButtonAction: (state, e)=>{
    e.target.disabled = true

    let els = e.target.parentNode.querySelectorAll('input[type="radio"]')
    els.forEach(a=>{
      // if(a.checked){
      //   state.finalAnswers[state.currentQNum] = a.getAttribute('value')
      // }
      a.disabled = true
    })
  }
}
