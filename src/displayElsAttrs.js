(function(w,d){
  var nodes = d.querySelectorAll('*');

  function hexColor(){
    var v = '#';
    var c = (()=>{
      var a = Math.round(Math.ceil(Math.random() * parseInt(0xff))).toString(16);
      return a.length !== 2 ? '0' + a : a;
    });
    for(var i=0;i<3;i++){
      v += c();
    }
    return v;
  };

  function getAttrAll(n){
    var attr = '';
    for(var name of n.getAttributeNames()){
      if(name === 'id'){
        attr = attr + "#" + n.getAttribute(name);
      }
      else if(name === 'class'){
        attr = attr + '.' + n.getAttribute(name);
      }
      else{
        attr = attr + '[' + name+'="' + n.getAttribute(name) + '"]';
      }
    };
    return attr;
  };

  var nodesSize = nodes.length;
  for(var i=0;i<nodesSize;i++){
    var n   = nodes[i];
    var tag = n.tagName.toLowerCase();
    var t   = tag;
    if(!tag.match(/script|link|noscript|head|meta|style|br/img)){
      var label = d.createElement('span');
      label.setAttribute('class', 'MYLabel');
      label.style.color           = 'yellow';
      label.style.backgroundColor = 'purple';
      label.style.position        = 'relative';
      label.style.display         = 'block';
      label.style.padding         = '5px 10px';
      label.style.left            = 0;
      label.style.top             = 0;
      label.style.fontSize        = '14px';
      label.style.border          = '1px solid black';
      label.style.height          = 'auto';
      label.style.width           = 'auto';
      label.style.clear           = 'both';
      label.style.weight          = 'normal';
      label.style.textWrap        = 'nowrap';
      label.style.wordBreak       = 'break-word';
      label.style.whiteSpace      = 'pre-wrap';
      label.style.textAlign       = 'left';
      label.style.verticalAlign   = 'top';
      label.textContent           = t + getAttrAll(n);

      if(tag === 'img' || tag === 'br'){
        n.parentNode.insertBefore(label, n.parentNode.childNodes[0]||null);
      }
      else{
        n.insertBefore(label, n.childNodes[0]||null);
      }
      n.style.border = '2px solid ' + hexColor();
      n.style.margin = '5px';
    }
  }
})(window,document);