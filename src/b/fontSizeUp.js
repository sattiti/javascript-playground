(function(w,d){
  const tags = ['div', 'span', 'iframe', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'pre', 'abbr', 'address', 'cite', 'code', 'del', 'dfn', 'em', 'ins', 'kbd', 'q', 'samp', 'small', 'strong', 'sub', 'sup', 'var', 'b', 'i', 'dl', 'dt', 'dd', 'ol', 'ul', 'li', 'fieldset', 'form', 'label', 'legend', 'table', 'caption', 'tbody', 'tfoot', 'thead', 'tr', 'th', 'td', 'article', 'aside', 'details', 'figcaption', 'figure',  'summary', 'time', 'mark', 'a'];

  tags.forEach((t)=>{
    const els = d.querySelectorAll(t);
    let s     = 16;
    els.forEach((el)=>{
      if(el.style.fontSize === '' || 
        el.style.fontSize.length <= 0 || 
        el.style.fontSize === undefined ||
        el.style.fontSize === null){
        el.style.fontSize = s + 'px';
      }
      else{
        s = parseInt(el.style.fontSize.replace(/[%.A-Za-z\s]+/mg, ''), 10);
        el.style.fontSize = s + 1 + 'px';
      };
    });
  })
})(window, document);
