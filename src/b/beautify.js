;(function(w, d){
  const libEvtName     = 'LIBS_LOADED';
  const hljsEvtName    = 'LOAD_HLJS';
  const hljsResEvtName = 'LOAD_HLJS_RES';

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

  function showMsg(a, msg){
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
  };

  function cb(nw, btn){
    const c = new nw.ClipboardJS('#' + btn.attr('id'));

    c.on('success', function(e){
      showMsg(nw, 'Copied!');
    });

    c.on('error', function(e){
      showMsg(nw, 'error.');
    });
    return c;
  };

  function loadHljs(nw){
    const nd      = nw.document;
    const hljslib = {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js'}};
    const hljsRes = [
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/languages/javascript.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/languages/css.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/languages/xml.min.js'}},
      {tag: 'link', attrs: {href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/dracula.min.css', type:'text/css', rel:'stylesheet'}}
    ];

    const hljsEvt    = d.createEvent('HTMLEvents');
    const hljsResEvt = d.createEvent('HTMLEvents');
    hljsEvt.initEvent(hljsEvtName, true, true);
    hljsResEvt.initEvent(hljsResEvtName, true, true);

    // load hljs
    const s = attachElement(nd, hljslib);
    nd.body.appendChild(s);
    s.addEventListener('load', function(e){
      nd.dispatchEvent(hljsEvt);
    }, false);

    // load hljsRes
    nd.addEventListener(hljsEvtName, function(e){
      let n = hljsRes.length;
      hljsRes.forEach((el)=>{
        const s = attachElement(nd, el);
        nd.body.appendChild(s);
        s.addEventListener('load', function(e){
          n = n - 1;
          if(n <= 0) nd.dispatchEvent(hljsResEvt);
        }, false);
      });
    }, false);
  };

  function init(){
    const nw        = w.open('');
    const nd        = nw.document;
    const doctype   = nd.implementation.createDocumentType('html', '', '');
    const pageTitle = 'Beautify';

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
body{margin:0;padding:0;background-color:#282A36;} \
h1,h2,h3,h4,h5,h6,p,textarea,table,th,td,pre,code{margin:0;padding:0;line-height:1.5;color:#F8F8F2;font-size:1em;font-family:YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro",Meiryo,sans-serif;} \
th,td,code,pre{word-break:break-all;word-wrap:break-word;white-space:pre-wrap;} \
div#wrapper{padding:1em;} \
textarea#srcarea{background-color:#282A36;border:2px solid #ff79c6;width:100%;overflow:auto;} \
textarea#srcarea:focus{background-color:#44475A;} \
button{outline:none;text-align:center;border:none;padding:.6em 0;border-radius:6px;border:1px solid #f8f8f2;background-color:#6272a4;color:#f8f8f2;width:100%;box-sizing:border-box;font-weight:bold;cursor:pointer;} \
div#result{border-top:2px solid #ff79c6;height:100%;margin-top:1em;padding:1em;} \
div.tb0{margin-top:1em;} \
div.tb0 table{width:100%;} \
div.tb0 table,div.tb0 table tr th,div.tb0 table tr td{border-collapse:collapse;border:none;border-bottom:1px solid #6272a4;} \
code,pre{display:block;text-align:left;vertical-align:top;padding:.25em;margin:0;} \
pre{margin-top:1em;} \
code{padding:1em;background-color:#44475A;border:2px dashed #50fa7b;} \
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
ul.ul1 li{width:24%;} \
button#htmlpp{background-color:#ff5555;} \
button#csspp{background-color:#8be9fd;color:#44475a;} \
button#jspp{background-color:#ffb86c;color:#44475a;} \
@media only screen and (max-width:767px){ \
div#result{padding:0;} \
ul.ul0 li{display:block;margin-right:0;box-sizing:border-box;text-align:center;margin-top:.5em;} \
div.tb0 table tr,div.tb0 table tr th,div.tb0 table tr td{display:block;width:100%;box-sizing:border-box;} \
button#cb{margin-top:1em;} \
}'}
    ];

    libsEls = [
      {tag: 'script', attrs: {src: 'https://code.jquery.com/jquery-3.4.1.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.0/beautify.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.0/beautify-css.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.10.0/beautify-html.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js'}}
    ];

    contentEls = [
      {tag: 'div', attrs: {id: 'wrapper'}, children: [
        {tag: 'h1', value: pageTitle},
        {tag: 'form', attrs: {action: ''}, children: [
          {tag: 'textarea', attrs: {id: 'srcarea', cols: 30, rows: 8, name: 'srcarea'}},
          {tag: 'ul', attrs:{class: 'ul1'}, children:[
            {tag: 'li', children: [
              {tag: 'button', attrs: {type: 'button', id: 'htmlpp'}, value: 'html'}
            ]},
            {tag: 'li', children: [
              {tag: 'button', attrs: {type: 'button', id: 'csspp'}, value: 'css'}
            ]},
            {tag: 'li', children: [
              {tag: 'button', attrs: {type: 'button', id: 'jspp'}, value: 'javascript'}
            ]},
            {tag: 'li', children: [
              {tag: 'button', attrs: {type: 'button', id: 'clear'}, value: 'Clear'}
            ]}
          ]},
        ]},
        {tag: 'div', attrs: {id: 'result'}}
      ]}
    ];

    headEls.forEach((el)=>{
      nd.head.appendChild(attachElement(nd, el));
    });

    contentEls.forEach((el)=>{
      nd.body.appendChild(attachElement(nd, el));
    });

    const evt = nd.createEvent('HTMLEvents');
    let n     = libsEls.length;

    evt.initEvent(libEvtName, true, true);

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

  function run(nw, nd, $){
    const opts = {
      "indent_size": 2,
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
      "templating": ["auto"],
      "js": {
        "indent_size": 2
      },
      "css": {
        "indent_size": 2
      }
    };

    let wrapper  = $(nd.querySelectorAll('div#wrapper'));
    let inArea   = wrapper.find('textarea#srcarea');
    let htmlBtn  = wrapper.find('button#htmlpp');
    let cssBtn   = wrapper.find('button#csspp');
    let jsBtn    = wrapper.find('button#jspp');
    let clearBtn = wrapper.find('button#clear');
    let outArea  = wrapper.find('div#result');
    let cbBtn    = wrapper.find('button#cb');

    clearBtn.on('click', function(e){
      e.stopPropagation();
      e.preventDefault();
      inArea.val('');
      outArea.children().remove();
    });

    [htmlBtn, cssBtn, jsBtn].forEach((o)=>{
      o.on('click', function(e){
        e.stopPropagation();
        e.preventDefault();
        outArea.children().remove();

        const c      = $(e.currentTarget);
        const ppType = c.attr('id').slice(0, -2);
        let src      = inArea.val();
        let result   = null;

        if(ppType === 'html'){
          result = nw.html_beautify(src, opts);
        }
        else if(ppType === 'js'){
          result = nw.js_beautify(src, opts);
        }
        else{
          result = nw.css_beautify(src, opts);
        }

        const cbBtn = $('<button type="button" id="cb" data-clipboard-target="code#ppCode" data=clipboard-action="copy">Copy</button>');
        outArea.append(cbBtn);
        outArea.append('<pre><code id="ppCode"></code></pre>');

        const ppCode = $('pre > code#ppCode');
        ppCode.addClass(ppType).text(result);
        cb(nw, cbBtn);

        // highlight
        nw.hljs.configure({
          // tabReplace: '  ',
          useBR: false
          // classPrefix: ''
          // languages: ['html', 'css', 'javascript']
        });

        nw.hljs.initHighlightingOnLoad();
        nw.hljs.highlightBlock(ppCode.get(0));
        return false;
      });
    });
  };

  const nw = init();

  nw.document.addEventListener(libEvtName, function(e){
    loadHljs(nw);
  }, false);

  nw.document.addEventListener(hljsResEvtName, function(e){
    run(nw, nw.document, nw.jQuery);
  }, false);

})(window, document);
