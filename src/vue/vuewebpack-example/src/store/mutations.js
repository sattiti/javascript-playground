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
    // state.finalAnswers[state.currentQNum] = ''
    // state.finalAnswers[state.currentQNum] = e.target.getAttribute('value')
  },

  nextButtonAction: (state, o)=>{
    const e = o.event
    e.target.style.display = 'none'

    // answer element
    const ansEl = e.target.parentNode.querySelector('p.ans')
    ansEl.style.display = "block"

    const ul = e.target.parentNode.querySelector('ul')
    ul.style.display = 'none'

    const q                    = state.questions[state.currentQNum]
    q.isCompleted              = true
    state.finalAnswers[q.name] = ''

    let els = e.target.parentNode.querySelectorAll('input[type="radio"]')
    els.forEach(a=>{
      if(a.checked){
        state.finalAnswers[q.name] = a.value
        ansEl.textContent = a.value
      }
      a.disabled = true
    })

    state.answerCompleted = Object.keys(state.finalAnswers).length < state.questions.length ? false : true
  }
}
