(function(w, d){
  function assertError(){
    alert('No such Selectors or Elements.');
    return false;
  };

  let io = w.prompt('Input a Selector or tagName:');
  
  if(io.length <= 0 || io === null || io == undefined){
    assertError();
    return false;
  };
  
  try{
    const els = d.querySelectorAll(io);
    
    if(els.length <= 0 || els === undefined || els === null){
      assertError();
      return false;
    };
    
    els.forEach((o)=>{
      o.remove();
    });
    
    alert(els.length + ' elements fucked.');
  }
  catch(e){
    console.log(e);
    assertError();
  };
})(window, document);
