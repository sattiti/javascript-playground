(function(w, d){
  // function localStorageInit(){
  //   if(('localStorage' in w) && (w.localStorage !== null)){
  //     return w.localStorage;
  //   }
  //   return false;
  // };

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
    }
    if(el.children){
      el.children.forEach((o)=>{
        let ct = attachElement(doc, o);
        t.appendChild(ct);
      });
    }
    return t;
  }; 

  function init(){
    const divCss = {
      backgroundColor: '#282a36',
      display: 'block',
      position: 'absolute',
      borderRadius: '6px',
      border: '1px solid #50fa7b',
      zIndex: 2147483647,
      minWidth: '160px',
      boxSizing: 'border-box',
      padding: '6px',
      left: 0,
      top: 0
    };

    const ulCss = {
      fontSize: '12px',
      lineHeight: 1.5,
      fontWeight: 'normal',
      display: 'block',
      listStyle: 'none',
      margin: 0,
      padding: 0
    };

    const liCss = {
      borderBottom: '1px solid #50fa7b'
    };

    const aCss = {
      color: '#f1fa8c',
      display: 'block',
      padding: '4px'
    };

    const buttonCss = {
      backgroundColor: '#44475a',
      border: '1px solid #44475a',
      borderRadius: '6px',
      boxSizing: 'border-box',
      color: '#f8f8f2',
      display: 'block',
      fontSize: '12px',
      fontWeight: 'normal',
      lineHeight: 1.5,
      marginTop: '10px',
      padding: '2px 4px',
      textAlign: 'center',
      width: '100%'
    };

    const lis = [
      {
        tag: 'li',
        css: liCss,
        children: [{
          value: 'Apple',
          attrs: {
            href: 'https://www.apple.com'
          },
          tag: 'a',
          css: aCss
        }],
      },
      {
        tag: 'li',
        css: liCss,
        children:[{
          tag: 'a',
          value: 'Google',
          attrs: {
            href: 'https://www.google.com'
          },
          css: aCss
        }]
      }
    ];

    const els = [{
      tag: 'div',
      attrs: {
        id: 'ENVNavPanel'
      },
      css: divCss,
      children: [{
        tag: 'ul',
        attrs: {id: 'envNav'},
        css: ulCss,
        children: lis
      },
      {
        tag: 'button',
        attrs: {'id': 'close','type': 'button'},
        css: buttonCss,
        value: 'Close'
      }]
    }];

    const evt = isPC ? 'dblclick' : 'touchstart';

    d.addEventListener(evt, function(e){
      e.preventDefault();
      e.stopPropagation();

      if(isPC || (!isPC && e.touches.length > 1)){
        els.forEach((el)=>{
          if(panel === null){
            panel = attachElement(d, el);
            d.body.appendChild(panel);
            isVisible = true;
          };

          if(!isVisible){
            isVisible         = !isVisible;
            panel.style.display = 'block';
          };

          panel.style.left = (e.pageX || w.pageXOffset) + 'px';
          panel.style.top  = (e.pageY || w.pageYOffset) + 'px';
          d.dispatchEvent(envNavEvt);
        });
      };
    }, false);
  };


  const isPC    = (function(ua){return (ua.indexOf('iphone')>0 || ua.indexOf('ipod')>0 || ua.indexOf('android')>0 && ua.indexOf('mobile')>0 || ua.indexOf('tizen')>0) ? false : true;})(w.navigator.userAgent.toLowerCase());
  // const s       = localStorageInit();
  let panel     = null;
  let isVisible = false;

  const envNavEvt     = d.createEvent('HTMLEvents');
  const envNavEvtName = 'ENVNav';
  envNavEvt.initEvent(envNavEvtName, true, true);

  // if(!s){
  //   alert('No Local Storage.');
  //   return false;
  // };

  init();
  d.addEventListener(envNavEvtName, function(e){
    const closeBtn = panel.querySelector('button#close');
    const envNav   = panel.querySelector('ul#envNav');
    const envLinks = envNav.querySelectorAll('li a');

    // close nav menu
    closeBtn.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();

      panel.style.display = 'none';
      isVisible           = false;

      return false;
    }, false);

    envLinks.forEach((el)=>{
      el.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();

        const u  = new URL(w.location.href);
        let path = u.pathname + u.search + u.hash

        const ctu  = new URL(e.currentTarget.getAttribute('href'));
        let domain = ctu.protocol + '//' + ctu.host

        let href = domain + path
        w.location.href = href;
        return false;

      }, false);
    });

  }, false);
})(window, document);
