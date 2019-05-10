((w,d)->
  getDoctype = (dtype)->
    t = ''
    dtypeSet =
      html4s:
        pat: /DTD HTML 4\.01\/\/EN/img
        type: '4.01 Strict'
        #type: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">'
      html4t:
        pat: /DTD HTML 4\.01 Transitional\/\/EN/img
        type: '4.01 Transitional'
        #type: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">'
      html4f:
        pat: /DTD HTML 4\.01 Frameset\/\/EN/img
        type: '4.01 Frameset'
        #type: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">'
      xhtml1s:
        pat: /DTD XHTML 1\.0 Strict\/\/EN/img
        type: 'XHTML 1.0 Strict'
        #type: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
      xhtml1t:
        pat: /DTD XHTML 1\.0 Transitional\/\/EN/img
        type: 'XHTML 1.0 Transitional'
        #type: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
      xhtml1f:
        pat: /DTD XHTML 1\.0 Frameset\/\/EN/img
        type: 'XHTML 1.0 Frameset'
        #type: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">'
      html5:
        pat: /^<!DOCTYPE html/img
        type: 'html5'
        #type: '<!DOCTYPE html>'

    if dtype != null and dtype instanceof DocumentType
      for k, o of dtypeSet
        if dtype.publicId.match o.pat
          t = o.type
          break

    t = dtypeSet.html5.type if t == ''
    return t

  main = ()->
    alert getDoctype(d.doctype)

  main()
)(window,document)
