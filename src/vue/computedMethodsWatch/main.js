// computed: cached.
// methods: no cache.
const vm = new Vue({
  el: '#app',
  data: function(){
    return {
      text: 'Default',
      count: 0
    }
  },
  computed: {
    computedMsg: {
      get(){
        this.count = this.count + 1;
        return 'Cached: ' + this.count;
      },
      set(v){}
    }
  },
  methods: {
    methodsMsg: function(){
      this.count = this.count + 1;
      this.text = 'No cache: ' + this.count;
    }
  },
  watch: {
    // obj 丸ごと監視
    // handler: function(val, oldVal){}
    text: function(val, oldVal){
      if(val.match(/6/mg)){
        this.text = 'WATCH !!';
        document.body.style.backgroundColor = 'cyan';
      }
      else if(oldVal.match(/4/mg)){
        this.text = 'WATCHED !!';
        document.body.style.backgroundColor = 'yellow';
      }
      else if(val.match(/[0-357-9]/mg)){
        document.body.style.backgroundColor = 'white';
      }
    }
  },
  mounted: function(){
    document.title = 'computed, methods, watch';
  }
});