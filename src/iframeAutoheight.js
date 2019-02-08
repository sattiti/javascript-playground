jQuery(document).ready(function($){
  $(window).on('message onmessage', function(e){
    e.preventDefault();
    var wrapper = $('div.iframe');
    var frame   = $('iframe#frame');
    var h       = parseInt(e.originalEvent.data, 10);

    if(!isNaN(h)){
      frame.animate({height: h}, 200);
      wrapper.animate({height: h}, 200);
    }
  });
});


// iframe
jQuery(document).ready(function($){
  events  = ['load', 'unload', 'resize'];
  for(var i in events){
    et = events[i];
    $(window).on(et, function(e){
      setTimeout(function(e){
        var target = parent.postMessage ? parent : (parent.document.postMessage ? parent.document : undefined);
        var h      = $('body').height();
        if(target !== undefined) target.postMessage(h, '*');
      }, 1000);
    });
  }
});
