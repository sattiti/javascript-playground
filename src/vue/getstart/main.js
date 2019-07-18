Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

const vm = new Vue({
  el: '#app',
  data: ()=>{
    return {
      message: 'hello world',
      cls: 'hs0 hs1',
      isApp: true,
      navs: [
        {text: 'Home', href: '/'},
        {text: 'About', href: '/about/'},
        {text: 'Contact', href: '/contact/'}
      ],
      items: [
        {id: 0, text: 'John'},
        {id: 1, text: 'Mary'},
        {id: 2, text: 'Peter'},
        {id: 3, text: 'Paul'}
      ]
    }
  },
  methods: {
    sayHello: ()=>{
      alert(app.message);
    }
  },
  mounted: function(){
    document.title = 'Get Start';
  }
});