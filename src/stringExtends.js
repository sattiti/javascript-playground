// htmlEscape
String.prototype.htmlEscape = ()=>{
  return this
    .replace(/&/img, '&amp;')
    .replace(/\b;amp;\b/img, ';')
    .replace(/'/img, '&#x27;')
    .replace(/`/img, '&#x60;')
    .replace(/"/img, '&quot;')
    .replace(/</img, '&lt;')
    .replace(/>/img, '&gt;');
};
