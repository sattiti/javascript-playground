Vue.component('h1-comp', {
  props: {
    h1text: String
  },
  template: `<h1>{{ h1text }}</h1>`
});

Vue.component('button-comp', {
  template: `<button @click="clickHandler">Click!</button>`,
  methods: {
    clickHandler: function(e){
      this.$emit('clickHandlerEvent', e);
    }
  }
});

const vm = new Vue({
  el: '#app',
  template: `
  <div>
  <h1-comp :h1text="h1text"></h1-comp>
  <button-comp @clickHandlerEvent="clickHandler"></button-comp>
  </div>`,
  methods: {
    clickHandler: function(e){
      const self  = this;
      const c     = e.currentTarget;
      self.h1text = c.tagName;
    }
  },
  data: function(){
    return {
      h1text: 'Default'
    }
  },
  beforeCreate: function(){
    this.h1text = 'b4 create';
  },
  created: function(){
    this.h1text = 'created';
  },
  beforeMount: function(){
    this.h1text = 'b4 mount';
  },
  mounted: function(){
    document.title = 'Life Cycle';
    this.h1text = ' mounted';
  },
  beforeUpdate: function(){
    this.h1text = ' b4 update';
  },
  update: function(){
    this.h1text = ' update';
  },
  beforeDestroy: function(){
    this.h1text = 'b4 destroy';
  },
  destroyed: function(){
    this.h1text = 'destroyed';
  }
});