Vue.component('h1Comp', {
  props: {
    result: Number
  },
  template: `<h1>{{ result }}</h1>`,
});

Vue.component('buttonComp', {
  props:{
    text: String
  },
  template: `<button @click="updateH1">{{ text }}</button>`,
  methods: {
    updateH1: function(e){
      this.$emit('updateH1Handler', e);
    }
  }
});

const vm = new Vue({
  el: '#app',
  template: `
<div>
<h1Comp :result="h1Text" />
<buttonComp @updateH1Handler="increseEvent" :text="plusButtonText" />
<buttonComp @updateH1Handler="decreseEvent" :text="minusButtonText" />
</div>
  `,
  data: function(){
    return {
      h1Text: 0,
      plusButtonText: '+',
      minusButtonText: '-'
    }
  },
  methods: {
    increseEvent: function(e){
      this.h1Text = parseInt(this.h1Text, 10) + 1;
    },
    decreseEvent: function(e){
      this.h1Text = parseInt(this.h1Text, 10) -1;
    }
  },
  mounted: function(){
    document.title = 'plusMinus';
  }
});