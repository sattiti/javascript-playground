(function(w,d){
  function assertError(){
    alert('No such Selectors or Elements.');
    return false;
  };

  function randomHexColor(){
    let v   = '#';
    const c = (()=>{
      let a = Math.round(Math.ceil(Math.random() * parseInt(0xff))).toString(16);
      return a.length !== 2 ? '0' + a : a;
    });
    for(var i=0; i<3; i++){
      v += c();
    }
    return v;
  };

  function getAttrs(n){
    var attr        = '';
    const attrNames = n.getAttributeNames();

    for(var name of attrNames){
      if(name === 'id'){
        attr = attr + "#" + n.getAttribute(name);
      }
      else if(name === 'class'){
        attr = attr + '.' + n.getAttribute(name);
      }
      else{
        attr = (attr + '[' + name + '="' + n.getAttribute(name) + '"]').replace('][', ' ');
      }
    };
    return attr;
  };

  let io = w.prompt('Input a Selector or tagName:', '*');
  if(io.length <= 0 || io === null || io == undefined){
    assertError();
    return false;
  };

  try{
    const els     = d.querySelectorAll(io);
    const elsSize = els.length;

    for(var i=0;i< elsSize;i++){
      const o   = els[i];
      const tag = o.tagName.toLowerCase();

      if(!tag.match(/script|link|noscript|head|meta|style|br/img)){
        let c = d.createElement('span');
        c.setAttribute('class', 'MYLabel');
        c.style.display         = 'block';
        c.style.position        = 'relative';
        c.style.left            = 0;
        c.style.top             = 0;
        c.style.zIndex          = 2147483647;
        c.style.width           = 'auto';
        c.style.height          = 'auto';
        c.style.backgroundColor = 'purple';
        c.style.color           = 'yellow';
        c.style.padding         = '4px 8px';
        c.style.fontSize        = '14px';
        c.style.height          = 'auto';
        c.style.width           = 'auto';
        c.style.lineHeight      = 1.5;
        c.style.clear           = 'both';
        c.style.fontWeight      = 'normal';
        c.style.wordBreak       = 'break-all';
        c.style.whiteSpace      = 'pre-wrap';
        c.style.textAlign       = 'left';
        c.style.verticalAlign   = 'top';
        c.textContent           = tag + getAttrs(o);

        if(o.parentNode && o.parentNode.style){
          o.parentNode.style.position = 'relative';
        };

        if(tag === 'img' || tag === 'br'){
          o.parentNode.insertBefore(c, o.parentNode.childNodes[0] || null);
        }
        else{
          o.insertBefore(c, o.childNodes[0] || null);
        };

        o.style.border     = '2px solid ' + randomHexColor();
        o.style.margin     = '5px';
        o.style.fontWeight = 'normal';
      };
    };
  }
  catch(err){
    console.log(err);
    assertError();
  }
})(window,document);
