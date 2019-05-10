((w,d)->
  # insert meta into new window
  insertExternalSrc = (nd)->
    meta  = []
    exSrc = []

    meta[0] = d.createElement 'meta'
    meta[0].setAttribute 'charset', 'utf-8'

    meta[1] = d.createElement 'meta'
    meta[1].setAttribute 'name', 'viewport'
    meta[1].setAttribute 'content', 'width=device-width'

    meta[2]           = d.createElement 'title'
    meta[2].innerHTML = location.href

    for m in meta
      nd.head.appendChild m

  # getTags
  getTags = (nd)->
    tags               = d.getElementsByTagName 'iframe'
    nb                 = nd.body
    nb.style.margin    = 0
    nb.style.padding   = 0
    nb.style.overflowX = 'hidden'
    nb.style.width     = '100%'
    nb.style.height    = '100%'

    if tags.length <= 0
      p = nd.createElement 'p'
      p.appendChild nd.createTextNode('NULL')
      nb.appendChild p
    else
      num = 1
      for o, i in tags
        div = nd.createElement 'div'
        div.style.margin = '2em'

        p = nd.createElement 'p'
        p.style.fontWeight = 'bold'
        p.appendChild nd.createTextNode(num)

        pre                       = nd.createElement 'pre'
        pre.style.overflow        = 'auto'
        pre.style.width           = 'auto'
        pre.style.display         = 'block'
        pre.style.whiteSpace      = 'pre-wrap'
        pre.style.wordBreak       = 'break-all'
        pre.style.margin          = 0
        pre.style.backgroundColor = '#F7F7F7'

        code                  = nd.createElement 'code'
        code.style.overflow   = 'auto'
        code.style.width      = 'auto'
        code.style.display    = 'block'
        code.style.whiteSpace = 'pre-wrap'
        code.style.wordBreak  = 'break-all'
        code.style.padding    = '1em'
        code.style.color      = 'green'

        frame                   = nd.createElement 'iframe'
        frame.style.borderStyle = 'solid'
        frame.style.borderWidth = '1px'
        frame.style.borderColor = '#000'
        frame.style.width       = '100%'
        frame.style.minHeight   = '300px'
        frame.style.overflowY   = 'auto'
        frame.style.marginTop   = '1em'
        frame.setAttribute 'src', o.src

        # num
        div.appendChild p

        # code
        code.appendChild nd.createTextNode(o.outerHTML)
        pre.appendChild code
        div.appendChild pre

        # iframe
        div.appendChild frame
        nb.appendChild div

        num = num + 1

    return tags

  # if tags.length > 0
  #   if nw.confirm 'Open those links?'
  #     for o in tags
  #       w.open o.href if o.href.length > 0

  main = ()->
    nw = w.open()
    nd = nw.document

    insertExternalSrc nd
    getTags nd

  main()
)(window,document)
