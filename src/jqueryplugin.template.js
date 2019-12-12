;(function($){
  $.fn.PLUGIN_NAME = function(options){
    var self = this;
    var opts = $.extend({}, options);
    
    this.func1 = function(){};
    
    $.fn.PLUGIN_NAME.func2 = function(){};
    
    return this.each(function(i, o){
    });
  }
})(jQuery);