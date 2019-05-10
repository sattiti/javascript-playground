(function(w, d){
  const els     = d.querySelectorAll('body *');
  let num       = 0;
  const maxSize = 4;

  for(var el of els){
    let t = el.tagName.toLowerCase();

    if(parseInt(el.style.getPropertyValue('opacity'))<1 ||
      el.style.getPropertyValue('display') === 'none' ||
      el.style.getPropertyValue('visibility') === 'hidden' ||
      el.hidden ||
      t === 'iframe' ||
      t === 'frame'){
        el.remove();
        num = num +1;
    };

    if(t === 'img'){
      let w = el.naturalWidth || el.clientWidth || el.width || el.offsetWidth || 0;
      let h = el.naturalHeight || el.clientHeight || el.height || el.offsetHeight || 0;
      if(w <= maxSize || h <= maxSize){
        el.remove();
        num = num + num;
      };
    };
  };

  alert(num + ' elements removed.');
})(window, document);
