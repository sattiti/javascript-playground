(function(w,d){
  function getDeviceEnv(){
    var iOS     = /ipod|iphone|ipad/img;
    var android = /android/img;
    var ua      = navigator.userAgent.toString().toLowerCase();
    var env     = 'other';
    if(ua.match(iOS)){
      return 'ios';
    }
    else if(ua.match(android)){
      return 'android';
    }
    else{
      return 'other';
    }
  }

  (function(){
    var rd      = {
      ios:     'URL',
      android: 'URL',
      other:   'URL'
    };
    window.location.href = rd[getDeviceEnv()];
  })();
})(window,document);
