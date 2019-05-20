;(function(w, d){
  const libEvtName = 'LIBS_LOADED';

  function attachElement(doc, el){
    const t = doc.createElement(el.tag);

    if(el.attrs){
      for(k in el.attrs){
        t.setAttribute(k, el.attrs[k]);
      };
    }

    if(el.value){
      t.textContent = el.value;
    };

    if(el.css){
      for(var k in el.css){
        t.style[k] = el.css[k];
      };
    };

    if(el.children){
      el.children.forEach((o)=>{
        let ct = attachElement(doc, o);
        t.appendChild(ct);
      });
    };

    return t;
  };

  function showMsg(a, msg){
    const wrapper = a.document.createElement('div');
    const el      = a.document.createElement('p');
    const period  = 1000;

    wrapper.style.backgroundColor = 'rgba(0, 0, 0, .6)';
    wrapper.style.position        = 'absolute';
    wrapper.style.left            = 0;
    wrapper.style.top             = 0;
    wrapper.style.width           = a.innerWidth + 'px';
    wrapper.style.height          = a.innerHeight + 'px';
    wrapper.style.zIndex          = 999999;

    el.textContent           = msg;
    el.style.fontFamily      = 'YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro",Meiryo,sans-serif';
    el.style.alignItems      = 'center';
    el.style.backgroundColor = '#bd93f9';
    el.style.color           = '#f8f8f2';
    el.style.borderRadius    = '6px';
    el.style.display         = 'flex';
    el.style.justifyContent  = 'center';
    el.style.height          = '40px';
    el.style.width           = '100px';
    el.style.padding         = '10px';
    el.style.position        = "absolute";
    el.style.textAlign       = 'center';
    el.style.zIndex          = 99999999;

    wrapper.appendChild(el);
    a.document.body.appendChild(wrapper);
    el.style.top  = ((a.innerHeight * .5) - el.offsetHeight *.5).toString() + 'px';
    el.style.left = ((a.innerWidth * .5) - el.offsetWidth *.5).toString() + 'px';

    setTimeout(function(){
      wrapper.remove();
    }, period);
  };

  function cb(nw, btn){
    const c = new nw.ClipboardJS('#' + btn.getAttribute('id'));
    c.on('success', function(e){
      showMsg(nw, 'Copied!');
    });

    c.on('error', function(e){
      showMsg(nw, 'error.');
    });
    return c;
  };

  function init(){
    const nw        = w.open('');
    const nd        = nw.document;
    const doctype   = nd.implementation.createDocumentType('html', '', '');
    const pageTitle = 'Screenshot';

    nd.doctype ?  nd.replaceChild(doctype, nd.doctype) : nd.insertBefore(doctype, nd.childNodes[0]);

    const headEls = [
      {tag: 'meta', attrs:{charset: 'utf-8'}},
      {tag: 'meta', attrs:{name: 'viewport', content: 'width=device-width'}},
      {tag: 'title', value: pageTitle}
    ];

    const libsEls = [
      // {tag: 'script', attrs: {src: 'https://code.jquery.com/jquery-3.4.1.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.1/dist/html2canvas.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js'}}
    ];

    const contentEls = [
      {
        tag: 'div',
        attrs: {
          id: 'wrappwer'
        },
        children: [
          {
            tag: 'button',
            attrs: {
              type:"button",
              id: "cb",
              'data-clipboard-target': 'img#screenshot',
              'data-clipboard-action': 'copy'
            },
            css: {
              display: 'block',
              outline: 'none',
              textAlign: 'center',
              border: 'none',
              padding: '.6em 0',
              margin:'1em 0',
              borderRadius: '6px',
              border: '1px solid #f8f8f2',
              backgroundColor: '#6272a4',
              color: '#f8f8f2',
              width: '100%',
              boxSizing: 'border-box',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontFamily: 'YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro",Meiryo,sans-serif'
            },
            value: 'Copy'
          },
          {
            tag: 'img',
            attrs: {
              id: 'screenshot',
              src: '',
            },
            css: {
              display: 'block',
              height: 'auto',
              width: '100%'
            }
          }
        ]
      }
    ];

    headEls.forEach((el)=>{
      nd.head.appendChild(attachElement(nd, el));
    });

    contentEls.forEach((el)=>{
      nd.body.appendChild(attachElement(nd, el));
    });

    const evt = nd.createEvent('HTMLEvents');
    let n     = libsEls.length;
    evt.initEvent(libEvtName, true, true);

    libsEls.forEach((el)=>{
      s = attachElement(nd, el);
      nd.body.appendChild(s);
      s.addEventListener('load', function(e){
        n = n - 1;
        if(n <= 0) nd.dispatchEvent(evt);
      }, false);
    });

    return nw;
  };

  function run(nw, nd){
    const scale           = 2;
    nd.body.style.margin  = 0;
    nd.body.style.padding = 0;

    const img   = nd.querySelector('img#screenshot');
    const cbBtn = nd.querySelector('button#cb');

    nw.html2canvas(d.documentElement || d.body, {scale: scale}).then(function(canvas){
      img.setAttribute('src', canvas.toDataURL('image/png'));
      cb(nw, cbBtn);
    });
  };

  const nw = init();
  nw.document.addEventListener(libEvtName, (e)=>{
    run(nw, nw.document);
  }, false);
})(window, document);
