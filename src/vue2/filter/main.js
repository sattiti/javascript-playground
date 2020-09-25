const vm = new Vue({
  el: '#app',
  data: function(){
    return {
      result: 'default'
    }
  },
  filters: {
    upper: function(v){
      return v.toUpperCase();
    },
    reverse: function(v){
      return v.split('').reverse().join('');
    }
  }
  ,
  mounted: function(){
    document.title = 'filter';
  }
});

Vue.filter('escape', function(v){
  return v.replace(/</mg, '&lt;')
    .replace(/>/mg, '&gt;')
    .replace(/&/mg, '&amp;')
    .replace(/`/mg, '&#60;')
    .replace(/'/mg, '&#27;')
    .replace(/"/mg, '&quot;');
})