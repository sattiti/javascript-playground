;(function(w, d){
  'use strict';
  let el = d.documentElement;
  if(el && el.bodeType === 1) el.setAttribute('data-js-enabled', 'true');
  el = null;
})(window, document);