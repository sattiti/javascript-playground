((w, d)->
  # Get images from document
  getDocImgs = ()->
    imgs = []

    for m in d.images
      imgs.push m.src
    return imgs

  # Get images from stylesheet (backgroundImage)
  getBgImgs = ()->
    imgs = []
    tags = d.getElementsByTagName '*'

    for t in tags
      s  = w.getComputedStyle t
      bg = s.backgroundImage
      if bg.match /url(?:\s*)?\("?(.*?)"?\)(?:\s*)?/img
        imgs.push RegExp.$1
    return imgs

  # List up all images into new window.
  imgsListUp = (imgs)->
    nw = window.open ''
    nd = nw.window.document
    dl = nd.createElement 'dl'

    meta            = []
    meta[0]         = nd.createElement 'meta'
    meta[0].setAttribute 'charset', 'utf-8'
    meta[1]           = nd.createElement 'meta'
    meta[1].name      = 'viewport'
    meta[1].content   = 'width                   = device-width'
    meta[2]           = nd.createElement 'title'
    meta[2].innerHTML = d.location.href

    for m in meta
      nd.head.appendChild m

    for m, i in imgs
      dt  = nd.createElement 'dt'
      dd  = nd.createElement 'dd'
      img = nd.createElement 'img'
      a   = nd.createElement 'a'
      ia  = nd.createElement 'a'

      img.src = m
      img.alt = ''
      img.style.width = "auto"
      img.style.height = "auto"
      img.style.maxWidth = "100%"
      img.style.maxHeight = "100%"

      a.href           = m
      a.target         = '_blnak'
      a.innerHTML      = a.href
      a.style.wordWrap = 'break-word'
      a.style.display  = 'block'
      a.style.color    = '#0F0'

      ia.href          = a.href
      ia.target        = a.target
      ia.style.display = a.style.display

      dt.style.fontWeight = 'bold'
      dt.style.marginTop  = "4em"

      dd.style.marginLeft = 0

      if i % 2 == 0
        dt.style.backgroundColor = '#666'
        dd.style.backgroundColor = dt.style.backgroundColor

      ia.appendChild img
      dt.appendChild a
      dd.appendChild ia
      dl.appendChild dt
      dl.appendChild dd
    nd.body.appendChild dl
    nd.body.style.backgroundColor = '#333'
    return nw

  # uniq
  uniq = (e)->
    return e.filter (v, i, self)->
      return self.indexOf(v) == i

  # main
  main = ()->
    imgs = getBgImgs()
    Array.prototype.push.apply imgs, getDocImgs()
    imgs = uniq imgs
    imgsListUp imgs

  main()

)(window,document)
