((w,d)->
  getCheckbox = ()->
    cb  = []
    cbs = d.getElementsByTagName 'input'
    for c in cbs
      if c.type.toLowerCase() == 'checkbox'
        cb.push c
    return cb

  isCheck = ()->
    cbs   = getCheckbox()
    count = 0
    for c in cbs
      if c.checked == true
        count = count + 1
    return if count == cbs.length then true else false

  main = ()->
    cbs = getCheckbox()
    if isCheck()
      for c in cbs
        c.checked = !c.checked
    else
      for c in cbs
        c.checked = true

  main()
)(window,document)
