((w, d)->
  nw  = w.open ''
  nd  = nw.document
  ans = nd.createElement 'p'

  scalable = ()->
    metas = nd.getElementsByTagName 'meta'
    for m in metas
      if m instanceof HTMLMetaElement and m.hasAttribute('content') and m.getAttribute('name') == 'viewport'
        nd.head.removeChild m

    m = nd.createElement 'meta'
    m.setAttribute 'name', 'viewport'
    m.setAttribute 'content', 'width=device-width,user-scalable=1'
    nd.head.appendChild m
    return
    
  getCodeFromChar = (s, n=10)->
    return s.charCodeAt(0).toString(n)
  
  getCharFromCode = (n)->
    return String.fromCharCode(n)

  view = ->
    f      = nd.createElement 'form'
    fields = ['char_or_Code']
    fns = 
      getCode: getCodeFromChar
      getChar: getCharFromCode

    for t in fields
      p = nd.createElement 'p'
      input = nd.createElement 'input'
      input.setAttribute 'type', 'text'
      input.setAttribute 'name', t
      input.setAttribute 'id', t
      input.style.display = 'block'
      p.appendChild nd.createTextNode(t)
      p.appendChild input
      f.appendChild p

    for key, fn of fns
      button = nd.createElement 'button'
      button.setAttribute 'id', key
      button.setAttribute 'type', 'button'
      button.appendChild nd.createTextNode(key)
      button.addEventListener 'click', (e)->
        curtId = e.currentTarget.getAttribute 'id'
        v      = nd.getElementById('char_or_Code').value.toString()
        if curtId == 'getCode'
          ans.innerHTML = ''
          for a in v
            ans.innerHTML += '&#' + fns[curtId](a, 10) + ';' + "<br>"
            ans.innerText += 'DEC: ' + ('&#' + fns[curtId](a, 10) + ';').toString() + "\n"
            ans.innerText += 'HEX: ' + ('&#x' + fns[curtId](a, 16) + ';').toString() + "\n\n"
        else
          ans.innerText = fns[curtId](v)

      f.appendChild button

    nd.body.appendChild f
    nd.body.appendChild ans
    return

  main = ()->
    scalable()
    view()
    return

  main()
  return
)(window, document)
