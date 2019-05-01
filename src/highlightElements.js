(function(w, d) {
  function randomHexColor(){
    var v = '#';
    var c = (()=>{
      var a = Math.round(Math.ceil(Math.random() * parseInt(0xff))).toString(16);
      return a.length !== 2 ? '0' + a : a;
    });
    for(var i=0;i<3;i++){
      v += c();
    }
    return v;
  };

  const els = d.querySelectorAll("body *");

  for(var el of els){
    el.style.border  = '2px solid ' + randomHexColor();
    el.style.padding = '5px';
  };
})(window, document);
