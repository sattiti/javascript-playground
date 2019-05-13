(function(w, d){
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
    if(el.children){
      el.children.forEach((o)=>{
        let ct = attachElement(doc, o);
        t.appendChild(ct);
      });
    }
    return t;
  };

  function init(){
    const nw = w.open('');
    const nd = nw.document;

    /*
    Dracula Theme
    | Background   | #282a36 |
    | Current Line | #44475a |
    | Selection    | #44475a |
    | Foreground   | #f8f8f2 |
    | Comment      | #6272a4 |
    | Cyan         | #8be9fd |
    | Green        | #50fa7b |
    | Orange       | #ffb86c |
    | Pink         | #ff79c6 |
    | Purple       | #bd93f9 |
    | Red          | #ff5555 |
    | Yellow       | #f1fa8c |
    */
    let headEls = [
      {tag: 'meta', attrs:{charset: 'utf-8'}},
      {tag: 'meta', attrs:{name: 'viewport', content: 'width=device-width'}},
      {tag: 'title', value: 'Html Validator'},
      {tag: 'style', attrs:{type: 'text/css'}, value:'\
body{margin:0;padding:0;background-color:#282A36;} \
h1,h2,h3,h4,h5,h6,p,textarea,table,th,td,pre,code{margin:0;padding:0;line-height:1.5;color:#F8F8F2;font-size:1em;font-family:YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro",Meiryo,sans-serif;} \
th,td,code,pre{word-break:break-all;word-wrap:break-word;white-space:pre-wrap;} \
div#wrapper{padding:1em;} \
textarea#htmlarea{background-color:#282A36;border:2px solid #ff79c6;width:100%;overflow:auto;} \
textarea#htmlarea:focus{background-color:#44475A;} \
button{outline:none;text-align:center;border:none;padding:.6em 0;border-radius:6px;border:1px solid #f8f8f2;background-color:#6272a4;color:#f8f8f2;width:100%;box-sizing:border-box;font-weight:bold;cursor:pointer;} \
div#result{border-top:2px solid #ff79c6;height:100%;margin-top:1em;padding:1em;} \
div.tb0{margin-top:1em;} \
div.tb0 table{width:100%;} \
div.tb0 table,div.tb0 table tr th,div.tb0 table tr td{border-collapse:collapse;border:none;border-bottom:1px solid #6272a4;} \
code,pre{display:block;text-align:left;vertical-align:top;padding:.25em;margin:0;} \
code{border:1px dashed #50fa7b;} \
div.tb0 table tr th, div.tb0 table tr td{border-collapse:collapse;padding:.2em .4em;text-align:left;vertical-align:top;background-color:#44475A;} \
div.tb0 table tr th{width:12%;background-color:#6272a4;} \
div.tb0 table tr td{width:88%;} \
h2{margin:0;margin-top:1em;padding:.1em;text-align:center;border-radius:6px;} \
.warning{background-color:#ffb86c;} \
.error{background-color:#FF5555;} \
.info{background-color:#8BE9FD;} \
ul.ul1,ul.ul0{margin:0;padding:0;list-style:none;margin-top:2em;} \
ul.ul0 li{padding:.4em 1em;display:inline;font-weight:bold;border-radius:6px;margin-right:1em;} \
ul.ul0 li a{color:#f8f8f2;} \
ul.ul1{margin-top:1em;display:flex;justify-content:space-between;} \
ul.ul1 li{width:49%;} \
@media only screen and (max-width:767px){ \
div#result{padding:0;} \
ul.ul0 li{display:block;margin-right:0;box-sizing:border-box;text-align:center;margin-top:.5em;} \
div.tb0 table tr th,div.tb0 table tr td{display:block;width:auto;} \
ul.ul1{display:block;justify-content:normal;} \
ul.ul1 li{margin-top:1em;width:100%;display:block;} \
} \
.hljs{display:block;overflow-x:auto;padding:.5em;background:#282a36}.hljs-keyword,.hljs-selector-tag,.hljs-literal,.hljs-section,.hljs-link{color:#8be9fd}.hljs-function .hljs-keyword{color:#ff79c6}.hljs,.hljs-subst{color:#f8f8f2}.hljs-string,.hljs-title,.hljs-name,.hljs-type,.hljs-attribute,.hljs-symbol,.hljs-bullet,.hljs-addition,.hljs-variable,.hljs-template-tag,.hljs-template-variable{color:#f1fa8c}.hljs-comment,.hljs-quote,.hljs-deletion,.hljs-meta{color:#6272a4}.hljs-keyword,.hljs-selector-tag,.hljs-literal,.hljs-title,.hljs-section,.hljs-doctag,.hljs-type,.hljs-name,.hljs-strong{font-weight:bold}.hljs-emphasis{font-style:italic}'}
    ];

    /*
    #wrapper
      h1 html validator
      form{action=""}
        textarea#htmlarea{cols="30" rows="8" name="htmlarea"}
        ul
          li
            button{type="button" id="valid"} Validate
          li
            button{type="button" id="clear"} Clear
      #result
    */
    contentEls = [
      {tag: 'div', attrs: {id: 'wrapper'}, children: [
        {tag: 'h1', value: 'HTML Validator'},
        {tag: 'form', attrs: {action: ''}, children: [
          {tag: 'textarea', attrs: {id: 'htmlarea', cols: 30, rows: 8, name: 'htmlarea'}},
          {tag: 'ul', attrs:{class: 'ul1'}, children:[
            {tag: 'li', children: [
              {tag: 'button', attrs: {type: 'button', id: 'valid'}, value: 'Check'}
            ]},
            {tag: 'li', children: [
              {tag: 'button', attrs: {type: 'button', id: 'clear'}, value: 'Clear'}
            ]}
          ]},
        ]},
        {tag: 'div', attrs: {id: 'result'}}
      ]}
    ];

    libsEls = [
      {tag: 'script', attrs: {src: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.6/build/highlight.min.js'}},
      {tag: 'script', attrs: {src: 'https://code.jquery.com/jquery-3.4.1.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdn.jsdelivr.net/npm/htmlhint@latest/dist/htmlhint.min.js'}}
      // {tag: 'script', attrs: {src: 'https://cdn.jsdelivr.net/npm/jshint@2.10.2/src/jshint.min.js'}},
      // {tag: 'script', attrs: {src: 'https://cdn.jsdelivr.net/npm/csslint@1.0.5/dist/csslint.min.js'}},
    ];

    headEls.forEach((el)=>{
      nd.head.appendChild(attachElement(nd, el));
    });

    contentEls.forEach((el)=>{
      nd.body.appendChild(attachElement(nd, el));
    });

    const evt = d.createEvent('HTMLEvents');
    evt.initEvent(libEvtName, true, true);
    let n = libsEls.length;

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

  function runValidation(nw, nd, $){
    nw.hljs.initHighlightingOnLoad();

    String.prototype.escape = function(){
      return this.replace(/&/mg, '&amp;')
      .replace(/\b;amp;\b/, ';')
      .replace(/'/mg, '&#x27;')
      .replace(/`/mg, '&#x60;')
      .replace(/"/mg, '&quot;')
      .replace(/</mg, '&lt;')
      .replace(/>/mg, '&gt;');
    };

    const rules = {
      "alt-require"              : true,
      "attr-lowercase"           : true,
      "attr-no-duplication"      : true,
      "attr-unsafe-chars"        : true,
      "attr-value-double-quotes" : true,
      "attr-value-not-empty"     : true,
      "doctype-first"            : true,
      "doctype-html5"            : true,
      "head-script-disabled"     : true,
      "href-abs-or-rel"          : false,
      "id-class-ad-disabled"     : false,
      "id-class-value"           : "camel",
      "id-unique"                : true,
      "inline-script-disabled"   : false,
      "inline-style-disabled"    : false,
      "space-tab-mixed-disabled" : "space",
      "spec-char-escape"         : true,
      "src-not-empty"            : true,
      "style-disabled"           : false,
      "tag-pair"                 : true,
      "tag-self-close"           : false,
      "tagname-lowercase"        : true,
      "title-require"            : true,
      'undef': true
    };

    let wrapper  = $(nd.querySelectorAll('div#wrapper'));
    let inArea   = wrapper.find('textarea#htmlarea');
    let runBtn   = wrapper.find('button#valid');
    let clearBtn = wrapper.find('button#clear');
    let outArea  = wrapper.find('div#result');

    clearBtn.on('click', function(e){
      e.stopPropagation();
      e.preventDefault();
      outArea.children().remove();
      inArea.val('');
    });

    runBtn.on('click', function(e){
      e.stopPropagation();
      e.preventDefault();
      outArea.children().remove();

      let src       = inArea.val();
      let messages  = nw.HTMLHint.default.verify(src, rules);
      var errCount  = 0;
      var infoCount = 0;
      var warnCount = 0;

      if(src.length <= 0) return;

      $(messages).each(function(i, o){
        var typeCls = ((t)=>{
          cls = '';
          switch(t){
            case 'info':
              cls = 'info';
              infoCount += 1;
              break;
            case 'warn':
              cls = 'warning';
              warnCount += 1;
              break;
            default:
              cls = 'error';
              errCount += 1;
          };
          return cls;
        })(o.type);

        outArea.append('<div class="tb0 + '+cls+'Bk">' +
          '<h2 class="'+cls+'">'+o.type.charAt(0).toUpperCase() +o.type.substring(1, o.type.length)+'</h2>' +
          '<table border="1"><tbody>'+
          '<tr><th>Line: Col</th><td>'+o.line+': '+o.col+'</td><tr>'+
          '<tr><th>Message</th><td>'+o.message.toString().escape()+'</td><tr>'+
          '<tr><th>Raw</th><td><pre><code>'+o.raw.toString().escape()+'</code></pre></td><tr>'+
          '<tr><th>Source</th><td><pre><code>'+o.evidence.toString().escape()+'</code></pre></td><tr>'+
          '</tbody></table></div>'
        );
      });

      nw.hljs.configure({
        tabReplace: '  ',
        usrBR: true
      });
      $('pre > code').each(function(i, block){
         nw.hljs.highlightBlock(block);
      });

      outArea.prepend('<ul class="ul0">' +
        '<li class="info"><a href="javascript:;" id="infoLink">info:' + infoCount + '</a></li>' +
        '<li class="warning"><a href="javascript:;" id="warningLink">warn:' + warnCount + '</a></li>' +
        '<li class="error"><a href="javascript:;" id="errorLink">error:' + errCount + '</a></li>' +
        '</ul>');

      let infoBtn    = $('ul.ul0 li a#infoLink');
      let warningBtn = $('ul.ul0 li a#warningLink');
      let errorBtn   = $('ul.ul0 li a#errorLink');

      $('ul.ul0 li a').each(function(i, o){
        $(o).on('click', function(e){
          e.stopPropagation();
          e.preventDefault();

          outArea.children('div.tb0').hide();
          let c    = $(e.currentTarget);
          let name = c.attr('id').replace('Link', '');
          let bk   = $('div.' + name + 'Bk');
          bk.show();
        });
      });
    });
  };

  const nw = init();
  (function($){
    nw.document.addEventListener(libEvtName, function(e){
      setTimeout(function(){
        runValidation(nw, nw.document, nw.$);
      }, 500);
    }, false);
  })(nw.jQuery);
})(window, document);
