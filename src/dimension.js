(function(w, d){
  const els = d.querySelectorAll('p');
  // window, frame, frameset, subwindow {{{
  // window.innerWidth  contentWidth
  // window.outerWidth  contentWidth + windowFrameWidth
  console.log(`window.innerWidth: ${w.innerWidth}`);
  console.log(`window.outerWidth: ${w.outerWidth}`);
  // }}}
  // Window scroll {{{
  // window.pageXOffset === window.scrollX === (document.documentElement || document.body.parentNode || document.body).scrollLeft
  var x = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  var y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  // }}}
  // Element {{{
  // el.style.width  width
  // el.clientWidth  width + padding             (visiable area only.)
  // el.scrollWidth  width + padding + scrollbar (hidden area included.)
  // el.offsetWidth  width + padding + scrollbar + border
  console.log(`cssWidth:    ${els[0].style.width}`);
  console.log(`clientWidth: ${els[0].clientWidth}`);
  console.log(`offsetWidth: ${els[0].offsetWidth}`);
  console.log(`scrollWidth: ${els[0].scrollWidth}`);
  // }}}
  // Imsge {{{
  // img.width
  // img.naturalWidth  Safari | Firefox supported.
  // $(img).width()    jQuery Version
  // }}}
  // Root {{{
  console.log(`windowWidth: ${window.innerWidth}`);
  console.log(`htmlWidth:   ${document.documentElement.clientWidth}`);
  console.log(`bodyWidth:   ${document.body.clientWidth}`);
  // }}}
  // jQuery Version {{{
  // $el.width()          width
  // $el.innerWidth()     width + padding
  // $el.outerWidth()     width + padding + border
  // $el.outerWidth(true) width + padding + border + margin
  // }}}
})(window, document);
