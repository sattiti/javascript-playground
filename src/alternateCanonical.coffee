((w,d)->
  links   = d.getElementsByTagName 'link'
  ol      = d.createElement 'ol'
  newPage = w.open()
  urls    = []

  for k in links
    if typeof(k) == 'object'
      rel = k.getAttribute 'rel'
      if rel == 'alternate' or rel =='canonical'
        li   = d.createElement 'li'
        a    = d.createElement 'a'
        href = k.getAttribute 'href'
        li.style.fontWeight = 'bold'
        urls.push href

        a.setAttribute 'href', href
        a.setAttribute 'target', '_blank'
        a.innerHTML = href

        li.innerHTML = "#{k.getAttribute('rel')}: "
        li.appendChild a
        ol.appendChild li

  if ol.childNodes.length <= 0
    li = d.createElement 'li'
    li.innerHTML = 'NULL'
    ol.appendChild li

  newPage.document.body.appendChild ol

  if urls.length > 0
    if newPage.confirm 'Open those links?'
      for u in urls
        w.open u
)(window,document)
