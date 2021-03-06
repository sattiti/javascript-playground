Vue.component('my-h1', {
  props: ['h1text'],
  template: '<h1>{{ h1text }}</h1>',
  data: ()=>{
    return {
      h1text: 'aaa'
    }
  }
});

Vue.component('my-li', {
  props: ['el'],
  template: `
    <li><a href="javascript:void(0);" @click="aclick">{{ el.text }}</a></li>
  `,
  methods: {
    aclick: (e)=>{
      console.log(e);
    }
  }
})

const vm = new Vue({
  el: '#app',
  template: `
    <div>
      <my-h1 :h1text="h1" />
      <ol>
        <my-li v-for="el in items" :el="el"></my-li>
      </ol>
      <p>static string: 111</p>
    </div>
  `,
  data: ()=>{
    return {
      items: [
        {id: 0, text: 'John'},
        {id: 1, text: 'Mary'},
        {id: 2, text: 'Peter'},
        {id: 3, text: 'Paul'}
      ],
      h1: 'hello'
    }
  },
  mounted: function(){
    document.title = 'Components';
  }
});