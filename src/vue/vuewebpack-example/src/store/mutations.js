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
    let q             = state.questions[state.currentQNum]
    q.isCompleted     = true
    q.ans             = e.target.getAttribute('value')
  },

  nextButtonAction: (state, e)=>{
    e.target.disabled = true
    let els           = e.target.parentNode.querySelectorAll('input[type="radio"]')

    els.forEach(a=>{
      a.disabled = true
    })

    if(state.currentQNum +1 >= state.questions.length) return;
    let q    = state.questions[state.currentQNum + 1];
    q.active = true;
  },

  updateAgree: (state, e)=>{
    state.agree = e.target.checked
  },
}
