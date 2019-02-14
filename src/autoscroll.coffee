((w,d)->
  tid     = null
  amount  = 400
  period  = 1000
  isStop  = false
  evts    = ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'click']

  # page height
  getDisplayHeight = ()->
    return d.documentElement.scrollHeight || d.body.scrollHeight

  # screen height
  getPageHeight = ()->
    return d.documentElement.clientHeight || d.body.clientHeight

  # Scroll amount
  getScrollTop = ()->
    return d.documentElement.scrollTop || d.body.scrollTop || w.pageYOffset

  # scroll 可能の最大値
  getMaxScroll = ()->
    return getDisplayHeight() - getPageHeight()

  # enable to scoll or not.
  scrollable = ()->
    return getMaxScroll() > 0

  for evt in evts
    d.body.addEventListener evt, (e)->
      isStop = true
      w.clearTimeout tid
    , false

  render = ()->
    w.clearTimeout(tid) if tid
    tid = setTimeout ()->
      tid = null
      st  = getScrollTop()
      w.scrollTo 0, st + amount
      if !isStop
        render() if st < getMaxScroll()
    , period

  render() if scrollable()
)(window, document)
