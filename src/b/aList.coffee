((w,d)->
  ol          = d.createElement 'ol'
  newPage     = w.open()
  newPageBody = newPage.document.body
  aTags       = d.getElementsByTagName 'a'

  for o, i in aTags
    li = d.createElement 'li'
    li.style.marginTop = '2em'
    txt = if o.innerHTML.length <= 0 then o.href else o.innerHTML

    a = d.createElement 'a'
    a.setAttribute 'href', o.href
    a.setAttribute 'target', '_blank'
    a.innerHTML = txt

    li.appendChild a
    xhr = new XMLHttpRequest()
    xhr.open "GET", o.href

    li.innerHTML += "[#{xhr.status}]<br>#{o.href}"
    li.style.backgroundColor = '#CCC' if i %2 != 0
    ol.appendChild li

  newPageBody.appendChild ol

  if aTags.length > 0
    if newPage.confirm 'Open those links?'
      for o in aTags
        w.open o.href if o.href.length > 0
)(window,document)
