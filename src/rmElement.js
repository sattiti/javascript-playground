(function(w, d) {
  const els = d.querySelectorAll("body *");
  const evt = w.navigator.userAgent.toLowerCase().match(/iphone|ipad|android/img) ? 'touchmove' : 'dblclick';
  
  for(el of els){
    if(el.hasAttributes('href')){
      const href = el.getAttribute('href');
      el.setAttribute('href', '#'+href);
    };

    el.addEventListener(evt, function(e){
      e.preventDefault();
      e.stopPropagation();
      let c = e.currentTarget;
      c.remove();
      return false;
    });
  };
})(window, document);
