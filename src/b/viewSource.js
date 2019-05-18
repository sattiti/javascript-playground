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

  function init(){
    const nw        = w.open('');
    const nd        = nw.document;
    const doctype   = nd.implementation.createDocumentType('html', '', '');
    const pageTitle = 'View-Source';

    nd.doctype ?  nd.replaceChild(doctype, nd.doctype) : nd.insertBefore(doctype, nd.childNodes[0]);

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
      {tag: 'title', value: pageTitle},
      {tag: 'style', attrs:{type: 'text/css'}, value:'\
body{margin:0;padding:0;background-color:#282A36;overflow-x:hidden;width:100%;height:100%;} \
h1,h2,h3,h4,h5,h6,p,textarea,table,th,td,pre,code{margin:0;padding:0;line-height:1.5;color:#F8F8F2;font-size:1em;font-family:YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro",Meiryo,sans-serif;font-weight:normal;} \
th,td,code,pre{word-break:break-all;word-wrap:break-word;white-space:pre-wrap;} \
div#wrapper{padding:1em;} \
code,pre{overflow:auto;width:auto;display:block;white-space:pre-wrap;word-break:break-all;text-align:left;vertical-align:top;padding:.25em;margin:0;font-weight:normal;font-size:1em;} \
code{background-color:#44475A;}'}
    ];

    libsEls = [
      // {tag: 'script', attrs: {src: 'https://code.jquery.com/jquery-3.4.1.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.0/beautify.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.0/beautify-css.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.0/beautify-html.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/languages/javascript.min.js'}},
      {tag: 'link', attrs: {href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/dracula.min.css', type:'text/css', rel:'stylesheet'}}
    ];

    contentEls = [{
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

    headEls.forEach((el)=>{
      nd.head.appendChild(attachElement(nd, el));
    });

    contentEls.forEach((el)=>{
      nd.body.appendChild(attachElement(nd, el));
    });

    const evt = nd.createEvent('HTMLEvents');
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

  function run(nw, nd){
    const opts = {
      "indent_size": 4,
      "indent_char": ' ',
      "indent_with_tabs": false,
      "editorconfig": false,
      "eol": "\n",
      "end_with_newline": false,
      "indent_level": 0,
      "preserve_newlines": true,
      "max_preserve_newlines": 10,
      "space_in_paren": false,
      "space_in_empty_paren": false,
      "jslint_happy": false,
      "space_after_anon_function": false,
      "space_after_named_function": false,
      "brace_style": "collapse",
      "unindent_chained_methods": false,
      "break_chained_methods": false,
      "keep_array_indentation": false,
      "unescape_strings": false,
      "wrap_line_length": 0,
      "e4x": false,
      "comma_first": false,
      "operator_position": "before-newline",
      "indent_empty_lines": false,
      "templating": ["auto"]
    };

    const el       = nd.querySelector('div#wrapper pre code');
    const html     = d.documentElement.outerHTML || d.body.parentNode.outerHTML;
    el.textContent = nw.html_beautify(html, opts);

    // highlight
    nw.hljs.configure({
      // tabReplace: '  ',
      useBR: false
      // classPrefix: ''
      // languages: ['html', 'css', 'javascript']
    });

    nw.hljs.initHighlightingOnLoad();
    // $('code#ppcode').each(function(i, block){
    nw.hljs.highlightBlock(el);
    // });
  };

  const nw = init();
  nw.document.addEventListener(libEvtName, function(e){
    run(nw, nw.document);
  }, false);

})(window, document);
