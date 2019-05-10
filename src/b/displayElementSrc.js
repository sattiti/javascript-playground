(function(w, d) {
  const els  = d.querySelectorAll("body *");
  const isPC = w.navigator.userAgent.toLowerCase().match(/iphone|ipad|android/img) ? false : true;

  function alertSrc(e){
    e.preventDefault();
    e.stopPropagation();
    let c = e.currentTarget;
    c.parentNode ?  alert(c.parentNode.outerHTML) : alert(c.outerHTML);
  };

  for(el of els){
    if(isPC){
      el.addEventListener('click', function(e){
        alertSrc(e);
        return false;
      });
    }
    else{
      el.addEventListener('touchstart', function(e){
        if(e.touches.length > 1) alertSrc(e);
        return false;
      });
    };
  };
})(window, document);
