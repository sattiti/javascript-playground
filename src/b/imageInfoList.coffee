((w, d)->
  # Get images from document
  getDocImgs = ()->
    imgs = []
    for m in d.images
      imgs.push m
      # imgs.push m.src
    return imgs

  # Get images from stylesheet (backgroundImage)
  getBgImgs = ()->
    imgs = []
    tags = d.getElementsByTagName '*'

    for t in tags
      s  = w.getComputedStyle t
      bg = s.backgroundImage
      if bg.match /url(?:\s*)?\("?(.*?)"?\)(?:\s*)?/img
        img = new Image()
        img.setAttribute 'src', RegExp.$1
        imgs.push img
        # imgs.push RegExp.$1
    return imgs

  # new meta
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

  # uniq
  uniq = (e)->
    uary = {}
    o    = []
    for img, i in e
      if uary[img.src]
        continue
      else
        uary[img.src] = true
        o.push img
    return o

  # List up all images into new window.
  imgsListUp = (doc, imgs)->
    b   = doc.body
    ths = ['src', 'alt', 'width', 'height']

    # current page url
    h1 = doc.createElement 'h1'
    h1.appendChild doc.createTextNode(d.location.href)
    b.appendChild h1

    # images.length
    p = doc.createElement 'p'
    p.appendChild doc.createTextNode("Total: #{imgs.length}")
    b.appendChild p

    for m, i in imgs
      m.style.width     = 'auto'
      m.style.height    = 'auto'
      m.style.maxWidth  = '100%'
      m.style.maxHeight = '100%'

      a = doc.createElement 'a'
      a.setAttribute 'href', m.src
      a.setAttribute 'target', '_blnak'
      a.style.whiteSpace = 'pre-wrap'
      a.style.wordBreak  = 'break-all'
      a.style.display    = 'inline-block'
      a.appendChild doc.createTextNode(a.href)

      ia = doc.createElement 'a'
      ia.setAttribute 'href', a.href
      ia.setAttribute 'target', a.target
      ia.style.display = a.style.display

      img                 = new Image()
      img.src             = m.src
      img.style.width     = m.style.width
      img.style.height    = m.style.height
      img.style.maxWidth  = m.style.maxWidth
      img.style.maxHeight = m.style.maxHeight
      ia.appendChild img

      # h2 num
      # imgBk
      #   p
      #     img
      #       a
      h2                 = doc.createElement 'h2'
      h2.style.marginTop = '4em'
      h2.appendChild doc.createTextNode(i + 1)
      b.appendChild h2

      imgBk                       = doc.createElement 'div'
      imgBk.style.border          = '2px solid #F0F'
      imgBk.style.padding         = '1em'
      imgBk.style.backgroundColor = '#666666'

      ip = doc.createElement 'p'
      ip.appendChild ia

      # imgBk.appendChild h2
      imgBk.appendChild ip
      b.appendChild imgBk

      tb                      = doc.createElement 'table'
      tb.style.border         = '1px solid #CCCCCC'
      tb.style.borderCollapse = 'collapse'
      tb.style.marginTop      = '1em'
      tb.style.width          = '100%'

      for t, j in ths
        tr = doc.createElement 'tr'
        th = doc.createElement 'th'
        td = doc.createElement 'td'

        th.style.border          = tb.style.border
        th.style.borderCollapse  = tb.style.borderCollapse
        th.style.backgroundColor = '#F7F7F7'
        th.style.textAlign       = 'left'
        th.style.verticalAlign   = 'top'
        th.style.padding         = '0.5em'
        th.style.width           = '20%'
        td.style.border          = tb.style.border
        td.style.borderCollapse  = tb.style.borderCollapse
        td.style.textAlign       = th.style.textAlign
        td.style.verticalAlign   = th.style.verticalAlign
        td.style.padding         = th.style.padding
        th.appendChild doc.createTextNode(t)

        alt = if m.alt.length > 0 then m.alt else 'NULL'
        switch j
          when 1 then td.appendChild doc.createTextNode(alt)
          when 2 then td.appendChild doc.createTextNode(m.naturalWidth || m.width)
          when 3 then td.appendChild doc.createTextNode(m.naturalHeight || m.height)
          else td.appendChild a
        tr.appendChild th
        tr.appendChild td
        tb.appendChild tr
      b.appendChild tb

  # main
  main = ()->
    nw = w.open('')
    nd = nw.document

    imgs = getBgImgs()
    Array.prototype.push.apply imgs, getDocImgs()
    imgs = uniq imgs

    # new meta
    insertExternalSrc nd

    imgsListUp nd, imgs

  main()
)(window,document)
