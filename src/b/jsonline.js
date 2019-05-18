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

  function showMsg(a, msg){
    const wrapper = a.document.createElement('div');
    const el      = a.document.createElement('p');
    const period  = 1000;

    wrapper.style.backgroundColor = 'rgba(0, 0, 0, .6)';
    wrapper.style.position        = 'absolute';
    wrapper.style.left            = 0;
    wrapper.style.top             = 0;
    wrapper.style.width           = w.innerWidth + 'px';
    wrapper.style.height          = w.innerHeight + 'px';
    wrapper.style.zIndex          = 999999;

    el.textContent = msg;
    el.style.fontFamily      = 'YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro",Meiryo,sans-serif';
    el.style.alignItems      = 'center';
    el.style.backgroundColor = '#bd93f9';
    el.style.color           = '#f8f8f2';
    el.style.borderRadius    = '6px';
    // el.style.boxShadow       = '0px 0px 4px #999';
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
      el.remove();
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

  function init(){
    const nw      = w.open('');
    const nd      = nw.document;
    const doctype = document.implementation.createDocumentType('html', '', '');

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
      {tag: 'title', value: 'JS Minify'},
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
ul.ul1 li{width:49%;} \
@media only screen and (max-width:767px){ \
div#result{padding:0;} \
ul.ul0 li{display:block;margin-right:0;box-sizing:border-box;text-align:center;margin-top:.5em;} \
div.tb0 table tr,div.tb0 table tr th,div.tb0 table tr td{display:block;width:100%;box-sizing:border-box;} \
ul.ul1{display:block;justify-content:normal;} \
ul.ul1 li{margin-top:1em;width:100%;display:block;} \
button#cb{margin-top:1em;} \
} \
.hljs{display:block;overflow-x:auto;padding:.5em;background:#282a36}.hljs-keyword,.hljs-selector-tag,.hljs-literal,.hljs-section,.hljs-link{color:#8be9fd}.hljs-function .hljs-keyword{color:#ff79c6}.hljs,.hljs-subst{color:#f8f8f2}.hljs-string,.hljs-title,.hljs-name,.hljs-type,.hljs-attribute,.hljs-symbol,.hljs-bullet,.hljs-addition,.hljs-variable,.hljs-template-tag,.hljs-template-variable{color:#f1fa8c}.hljs-comment,.hljs-quote,.hljs-deletion,.hljs-meta{color:#6272a4}.hljs-keyword,.hljs-selector-tag,.hljs-literal,.hljs-title,.hljs-section,.hljs-doctag,.hljs-type,.hljs-name,.hljs-strong{font-weight:bold}.hljs-emphasis{font-style:italic}'}
    ];

    libsEls = [
      {tag: 'script', attrs: {src: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.6/build/highlight.min.js'}},
      {tag: 'script', attrs: {src: 'https://code.jquery.com/jquery-3.4.1.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdn.jsdelivr.net/npm/terser@3.17.0/dist/bundle.min.js'}},
      {tag: 'script', attrs: {src: 'https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js'}}
    ];

    contentEls = [
      {tag: 'div', attrs: {id: 'wrapper'}, children: [
        {tag: 'h1', value: 'JS Minify'},
        {tag: 'form', attrs: {action: ''}, children: [
          {tag: 'textarea', attrs: {id: 'srcarea', cols: 30, rows: 8, name: 'srcarea'}},
          {tag: 'ul', attrs:{class: 'ul1'}, children:[
            {tag: 'li', children: [
              {tag: 'button', attrs: {type: 'button', id: 'minify'}, value: 'Minify'}
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

  function run(nw, nd, $){
    const opts = {
      ecma: 5,
      warnings: false, // 'verbose'
      parse: {
        bare_returns: false,
        ecma: 8,
        html5_comments: true,
        shebang: true
      },
      compress:{
        arrows: true,
        arguments: false,
        booleans: true,
        booleans_as_integers: false,
        collapse_vars: true,
        comparisons: true,
        computed_props: true,
        conditionals: true,
        dead_code: true,
        defaults: true,
        directives: true,
        drop_console: false,
        drop_debugger: true,
        ecma: 5,
        evaluate: true,
        expression: false,
        global_defs: {},
        hoist_funs: false,
        hoist_props: true,
        hoist_vars: false,
        if_return: true,
        inline: true,
        join_vars: true,
        keep_classnames: false,
        keep_fargs: true,
        keep_fnames: false,
        keep_infinity: false,
        loops: true,
        module: false,
        negate_iife: true,
        passes: 1,
        properties: true,
        pure_funcs: null,
        pure_getters: 'strict',
        reduce_funcs: true,
        reduce_vars: true,
        sequences: true,
        side_effects: true,
        switches: true,
        toplevel: false,
        top_retain: null,
        typeofs: true,
        unsafe: false,
        unsafe_arrows: false,
        unsafe_comps: false,
        unsafe_Function: false,
        unsafe_math: false,
        unsafe_methods: false,
        unsafe_proto: false,
        unsafe_regexp: false,
        unsafe_undefined: false,
        unused: true,
        warnings: false
      },
      mangle: {
        properties: false,
        // properites: {
        //   builtins: false,
        //   debug: false,
        //   keep_quoted: false,
        //   regex: null,
        //   reserved: []
        // },
        eval: false,
        keep_classnames: false,
        keep_fnames: false,
        module: false,
        reserved: [],
        toplevel: false,
        safari10: false
      },
      module: false,
      output: {},
      // output: {
      //   ascii_only: false,
      //   beautify: false,
      //   braces: false,
      //   comments: false,
      //   ecma: 5,
      //   indent_level: 2,
      //   indent_start: 0,
      //   inline_script: true,
      //   keep_quoted_props: false,
      //   max_line_len: false,
      //   preamble: null,
      //   quote_keys: false,
      //   quote_style: 0,
      //   safari10: false,
      //   semicolons: true,
      //   shebang: true,
      //   webkit: false,
      //   wrap_iife: false
      // },
      sourceMap: false,
      toplevel: false,
      nameCache: null,
      ie8: false,
      keep_classnames: undefined,
      keep_fnames: false,
      safari10: false
    };

    let wrapper  = $(nd.querySelectorAll('div#wrapper'));
    let inArea   = wrapper.find('textarea#srcarea');
    let runBtn   = wrapper.find('button#minify');
    let clearBtn = wrapper.find('button#clear');
    let outArea  = wrapper.find('div#result');
    let cbBtn    = wrapper.find('button#cb');

    clearBtn.on('click', function(e){
      e.stopPropagation();
      e.preventDefault();
      inArea.val('');

      outArea.children().remove();
    });

    runBtn.on('click', function(e){
      e.stopPropagation();
      e.preventDefault();

      outArea.children().remove();

      let src     = inArea.val();
      let result  = nw.Terser.minify(src, opts);
      const cbBtn = $('<button type="button" id="cb" data-clipboard-target="code#minifyCode" data=clipboard-action="copy">Copy</button>');
      outArea.append(cbBtn);
      outArea.append('<pre><code id="minifyCode">(function(){'+result.code+'})();</code></pre>');
      cb(nw, cbBtn);
    });
  };

  const nw = init();
  nw.document.addEventListener(libEvtName, function(e){
    setTimeout(function(){
      run(nw, nw.document, nw.jQuery);
    }, 500);
  }, false);

})(window, document);
