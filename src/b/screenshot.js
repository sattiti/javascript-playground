(function(w, d){
  const evt = d.createEvent('Event');
  const evtName = 'DONE';
  evt.initEvent(evtName, true, true);
  const scale = 3;

  function createNewPage(){
    const nw = w.open('');
    const nd = nw.document;
    let els  = [];

    els[0] = d.createElement('meta');
    els[0].setAttribute('charset','utf-8');

    els[1] = d.createElement('meta');
    els[1].setAttribute('name','viewport');
    els[1].setAttribute('content','width=device-width');

    els[2] = d.createElement('title');
    els[2].textContent = 'Screenshot';

    els.forEach((el)=>{
      nd.head.appendChild(el);
    });

    return nw;
  };

  function renderImage(canvas, doc){
    const dataURI     = canvas.toDataURL('image/png');
    const img         = doc.createElement('img');
    img.setAttribute('src', dataURI);
    doc.body.appendChild(img);
    img.style.display = 'block';
    img.style.width   = (doc.body.scrollWidth || doc.body.offsetWidth || doc.body.clientWidth) + 'px';
    img.style.height  = 'auto';
    return canvas;
  };

  (function(evt){
    let els = [];

    els[0]= d.createElement('script');
    // els[0].setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js');
    els[0].setAttribute('src', 'https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.1/dist/html2canvas.min.js');

    var n = els.length;
    els.forEach((s)=>{
      d.body.appendChild(s);
      s.addEventListener('load',function(e){
        n = n - 1;
        if(n <= 0) d.dispatchEvent(evt);
      });
    });
  })(evt);

  d.addEventListener(evtName, function(e){
    const nw = createNewPage();
    const nd = nw.document;
    nd.body.style.margin  = 0;
    nd.body.style.padding = 0;

    // v1.0
    html2canvas(d.documentElement, {scale: scale}).then(function(canvas){
      renderImage(canvas, nd);
    });

    // v0.4.1
    // html2canvas(d.documentElement, {
    //   onrendered: function(canvas){
    //     renderImage(canvas, nd);
    //   },
    // });

    e.currentTarget.removeEventListener(evtName, arguments.callee, false);
  }, false);
})(window, document);
