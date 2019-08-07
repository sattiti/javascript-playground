export default{
  increment: function(state){
    state.count = state.count + 1
  },
  decrement: state=>{
    state.count = state.count - 1
  },
  radioSelected: (state, e)=>{
    state.questions[0].show = true
  },
  nextButtonAction: (state, e)=>{
    state.questions[0].show = false
    let els = e.target.parentNode.querySelectorAll('input[type="radio"]')
    els.forEach(o=>{
      o.checked = false
    })
  }
}
