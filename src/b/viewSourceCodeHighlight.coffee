((w,d)->
  # create some new meta, and insert into head
  insertExternalSrc = (nd, evt)->
    meta  = []
    exSrc = []

    meta[0] = d.createElement 'meta'
    meta[0].setAttribute 'charset','utf-8'

    meta[1] = d.createElement 'meta'
    meta[1].setAttribute 'name','viewport'
    meta[1].setAttribute 'content','width=device-width'

    for m in meta
      nd.head.appendChild m

    exSrc[0] = d.createElement 'link'
    exSrc[0].setAttribute 'href', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/monokai.min.css'
    exSrc[0].setAttribute 'type', 'text/css'
    exSrc[0].setAttribute 'rel', 'stylesheet'

    exSrc[1] = d.createElement 'script'
    exSrc[1].setAttribute 'src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'

    exSrc[2] = d.createElement 'script'
    exSrc[2].setAttribute 'src', 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js'

    exSrc[3] = d.createElement 'script'
    exSrc[3].setAttribute 'src', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/highlight.min.js'

    # exSrc[4] = d.createElement 'script'
    # exSrc[4].setAttribute 'href', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/languages/javascript.min.js'

    # for count script read
    count = exSrc.length
    for s in exSrc
      nd.head.appendChild s
      s.addEventListener 'load', (e)->
        count -= 1
        if count <= 0
          nd.dispatchEvent evt

  main = ()->
    # get socurce code
    html   = d.documentElement.outerHTML || d.body.parentNode.outerHTML
    nw     = w.open ''
    nd     = nw.document
    body   = nd.body
    sEvent = nd.createEvent 'HTMLEvents'
    sEvent.initEvent 'DONE', true, false

    insertExternalSrc nd, sEvent

    pre                  = nd.createElement 'pre'
    pre.style.overflow   = 'auto'
    pre.style.width      = 'auto'
    pre.style.display    = 'block'
    pre.style.whiteSpace = 'pre-wrap'
    pre.style.wordBreak  = 'break-all'
    pre.style.margin     = 0

    code                  = nd.createElement 'code'
    code.style.overflow   = 'auto'
    code.style.width      = 'auto'
    code.style.display    = 'block'
    code.style.whiteSpace = 'pre-wrap'
    code.style.wordBreak  = 'break-all'
    code.style.padding    = '1em'
    code.setAttribute 'class', 'html xml hljs'

    body.style.margin    = 0
    body.style.padding   = 0
    body.style.overflowX = 'hidden'
    body.style.width     = '100%'
    body.style.height    = '100%'

    code.appendChild nd.createTextNode(html)
    pre.appendChild code
    body.appendChild pre

    nd.addEventListener 'DONE', (e)=>
      nw.hljs.configure
        tabReplace: '  '
        # classPrefix: ''
        # useBR: false
        # languages: ['html', 'css', 'javascript']
      nw.hljs.initHighlightingOnLoad()
      nw.hljs.initHighlighting()

  main()
)(window,document)
