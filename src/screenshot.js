(function(w, d){

  const evt = d.createEvent('Event');
  evt.initEvent('DONE', true, true);

  (function(evt){
    // let meta = [];
    let libs = [];

    // meta[0] = d.createElement('meta');
    // meta[0].setAttribute('charset','utf-8');
    //
    // meta[1] = d.createElement('meta');
    // meta[1].setAttribute('name','viewport');
    // meta[1].setAttribute('content','width=device-width');
    // meta.forEach((m)=>{
    //   nd.head.appendChild(m);
    // });

    libs[0] = d.createElement('script');
    libs[0].setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js');

    var n = libs.length;
    libs.forEach((s)=>{
      d.body.appendChild(s);
      s.addEventListener('load',function(e){
        n = n - 1;
        if(n <= 0) d.dispatchEvent(evt);
      });
    });
  })(evt);

  d.addEventListener('DONE', function(e){
    const nw = w.open('');
    const nd = nw.document;
    const nb = nd.body;

    html2canvas(d.documentElement, {
      onrendered: function(canvas){
        const dataURI = canvas.toDataURL('image/png');
        const img     = nd.createElement('img');
        img.setAttribute('src', dataURI);
        nd.body.appendChild(img);
        // nd.body.appendChild(canvas);
      }
    });

    e.currentTarget.removeEventListener('DONE', arguments.callee, false);
  }, false);
    
})(window, document);
