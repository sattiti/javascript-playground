const Helper = require('./helper.js');

(function(cw, cd){
  function init(){
    const nw = cw.open('');

    const contentEls = [{
      tag: 'div',
      attrs: {id: 'wrapper'},
      children: [{
        tag: 'pre',
        children: [{
          tag: 'code',
          attrs: {
            class: 'html xml js hljs',
            id: 'ppcode'
          },
        }]
      }]
    }];

    contentEls.forEach((el)=>{
      nw.document.body.appendChild(Helper.attachElement(nw.document, el));
    });

    return nw;
  };

  const w = init();
  Helper.showMsg(w, "Hello world");
})(window, document);
