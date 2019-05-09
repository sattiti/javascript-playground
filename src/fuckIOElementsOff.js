(function(w, d){
  function assertError(){
    alert('No such Selectors or Elements.');
    return false;
  };

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

  function rmEl(e){
    e.preventDefault();
    const c = e.currentTarget;
    c.remove();
  };

  function scanEls(els, f){
    const size = els.length;
    for(var i=0; i<size; i++){
      const o = els[i];
      f(o);
    };
  };

  // const isPC = (function(ua){return (ua.indexOf('iphone')>0 || ua.indexOf('ipod')>0 || ua.indexOf('android')>0 && ua.indexOf('mobile')>0 || ua.indexOf('tizen')>0) ? false : true;})(w.navigator.userAgent.toLowerCase());
  let io = w.prompt('Input a Selector or tagName:');

  if(io.length <= 0 || io === null || io == undefined){
    assertError();
    return false;
  };
  
  try{
    const els            = d.querySelectorAll(io);
    const elsSize        = els.length;
    const period         = 5000;
    const timeoutEvt     = d.createEvent('Event');
    const timeoutEvtName = 'TIMEOUT';
    timeoutEvt.initEvent('TIMEOUT', true, true);

    if(els.length <= 0 || els === undefined || els === null){
      assertError();
      return false;
    };

    scanEls(els, function(o){
      const oStyle     = o.style;
      o.style.border   = '4px solid ' + randomHexColor();
      o.style.display  = 'block';
      o.style.position = 'static';
      o.addEventListener(timeoutEvtName, rmEl, false);

      setTimeout(()=>{
        o.style = oStyle;
      }, period);
    });

    setTimeout(()=>{
      if(confirm('Fuck it off anyway?')){
        scanEls(els, function(o){
          o.dispatchEvent(timeoutEvt);
        });
        alert(els.length + ' elements fucked.');
      }
      else{
        scanEls(els, function(o){
          o.removeEventListener(timeoutEvtName, rmEl, false);
        });
      };
    }, period);
  }

  catch(e){
    console.log(e);
    assertError();
  };
})(window, document);
