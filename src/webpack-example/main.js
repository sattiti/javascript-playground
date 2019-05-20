const MyUtils = require('./myutils.js');

(function(cw, cd){
  console.log(MyUtils)

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
      nw.document.body.appendChild(MyUtils.attachElement(nw.document, el));
    });

    return nw;
  };

  const w = init();
  MyUtils.showMsg(w, "Hello world");
})(window, document);
