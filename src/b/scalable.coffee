((w, d)->
  # main
  main = ()->
    metas = d.getElementsByTagName 'meta'
    for m in metas
      if m instanceof HTMLMetaElement and m.hasAttribute('content') and m.getAttribute('name') == 'viewport'
        d.head.removeChild m

    m = d.createElement 'meta'
    m.setAttribute 'name', 'viewport'
    m.setAttribute 'content', 'width=device-width,user-scalable=1'
    d.head.appendChild m

  main()
)(window,document)
