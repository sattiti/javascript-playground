export default{
  increment: function(state){
    state.count = state.count + 1
  },
  decrement: state=>{
    state.count = state.count - 1
  }
}
