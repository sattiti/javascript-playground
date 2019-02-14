((w,d)->
  label = (text)->
    s = d.createElement 'span'
    s.style.backgroundColor = 'yellow'
    s.style.border          = '2px solid black'
    s.style.padding         = '0.1em 0.2em'
    s.style.display         = 'inline-block'
    s.style.position        = 'relative'
    s.style.fontWeight      = 'bold'
    s.style.color           = 'black'
    s.style.clear           = 'both'
    s.style.zIndex          = 99999
    s.appendChild d.createTextNode("<#{text}>")
    return s

  getColor = ()->
    rc = ()->
      return (Math.floor(Math.random() * 255 + 1)).toString(16).toUpperCase()
    return "##{rc()}#{rc()}#{rc()}"

  main = ()->
    for i in [1..6]
      h    = "h#{i}"
      tags = d.getElementsByTagName h

      for t in tags
        t.parentNode.insertBefore label(h), t
        t.style.boxShadow = '0 0 6px black'
        t.style.border    = "6px solid #{getColor()}"

  main()
)(window,document)
