((w, d)->
  nw  = w.open ''
  nd  = nw.document
  ans = nd.createElement 'p'

  nPr = (n, r)->
    return n if r <= 1
    return (n - r + 1) * nPr(n, r - 1)

  nCr = (n, r)->
    return nPr(n, r) / nPr(r, r)

  nPIr = (n, r)->
     return Math.pow(n, r)

  nHr = (n, r)->
    return  if r == 0 then 1 else nCr(n + r - 1, r)

  view = ->
    f      = nd.createElement 'form'
    fields = ['n', 'r']
    probabilityFns = 
      nPr: nPr
      nCr: nCr
      nPIr: nPIr
      nHr: nHr

    for t in fields
      p = nd.createElement 'p'
      input = nd.createElement 'input'
      input.setAttribute 'type', 'text'
      input.setAttribute 'name', t
      input.setAttribute 'id', t
      input.style.display = 'block'
      p.appendChild nd.createTextNode(t.toUpperCase())
      p.appendChild input
      f.appendChild p

    for key, fn of probabilityFns
      button = nd.createElement 'button'
      button.setAttribute 'id', key
      button.setAttribute 'type', 'button'
      button.appendChild nd.createTextNode(key)
      button.addEventListener 'click', (e)->
        curtId = e.currentTarget.getAttribute 'id'
        n = parseFloat(nd.getElementById('n').value)
        r = parseFloat(nd.getElementById('r').value)
        ans.innerText = 0
        ans.innerText = probabilityFns[curtId](n, r).toString()

      f.appendChild button

    nd.body.appendChild f
    nd.body.appendChild ans
    return

  main = ()->
    view()
    return

  main()
  return
)(window, document)
