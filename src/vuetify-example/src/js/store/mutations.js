export default{
  showAcToolDetails: (state, e)=>{
    if(state.acTool.showDetails){
      state.acTool.selected    = []
      state.acTool.showDetails = false
    }

    if(state.acTool.search.length > 0){
      state.acTool.selected = state.acTool.itemData.filter(o=>{
        return o.origin === state.acTool.search
      })
      state.acTool.showDetails = true
    }
    else{
      state.acTool.selected = [] 
      state.acTool.showDetails = false
    }
  },
}