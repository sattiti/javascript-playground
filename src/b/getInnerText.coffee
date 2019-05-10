((w, d)->
  # main
  main = ()->
    tags = d.getElementsByTagName '*' || d.all
    ol   = d.createElement 'ol'
    i    = 0

    for t in tags
      if t instanceof HTMLElement
        txt = t.innerText || t.textContent
        if txt != null
          if txt.length > 0
            li = d.createElement 'li'
            if i % 2 == 1
              li.style.backgroundColor = '#F7F7F7'

            pre                     = d.createElement 'pre'
            pre.style.overflow      = 'auto'
            pre.style.width         = 'auto'
            pre.style.display       = 'block'
            pre.style.whiteSpace    = 'pre-wrap'
            pre.style.wordBreak     = 'break-all'
            pre.style.verticalAlign = 'top'
            pre.style.margin        = 0

            code                     = d.createElement 'code'
            code.style.overflow      = 'auto'
            code.style.width         = 'auto'
            code.style.display       = 'block'
            code.style.whiteSpace    = 'pre-wrap'
            code.style.wordBreak     = 'break-all'
            code.style.padding       = '1em'
            code.style.verticalAlign = 'top'

            code.appendChild d.createTextNode(txt)
            pre.appendChild code
            li.appendChild pre
            ol.appendChild li
            i++

    nw = w.open ''
    nd = nw.document

    meta            = []
    meta[0]         = nd.createElement 'meta'
    meta[0].setAttribute 'charset', 'utf-8'
    meta[1]         = nd.createElement 'meta'
    meta[1].name    = 'viewport'
    meta[1].content = 'width=device-width'
    meta[2]         = nd.createElement 'title'
    meta[2].innerText = d.location.href.toString()

    for m in meta
      nd.head.appendChild m

    body                 = nd.body
    body.style.margin    = 0
    body.style.padding   = 0
    body.style.overflowX = 'hidden'
    body.style.width     = '100%'
    body.style.height    = '100%'
    body.appendChild ol

  main()
)(window,document)
