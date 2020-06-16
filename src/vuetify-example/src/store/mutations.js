export default{
  showAcToolDetails: (state, e)=>{
    if(state.acTool.selected !== null && state.acTool.search.length > 0){
      state.acTool.showDetails = true
    }
    else{
      state.acTool.showDetails = false
    }

  },

  resetInputValue: (state, e)=>{
    if(state.acTool.showDetails){
      state.acTool.selected = null
      state.acTool.showDetails = false
    }
  },
}
