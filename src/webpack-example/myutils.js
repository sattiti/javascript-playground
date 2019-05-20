module.exports = {
  attachElement: function(doc, el){
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
        let ct = this.attachElement(doc, o);
        t.appendChild(ct);
      });
    };

    return t;
  },

  showMsg: function(a, msg){
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
  }
};
