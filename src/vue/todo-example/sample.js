jQuery(document).ready(function($) {
  var Child, MyComponent, mv;
  mv = new Vue({
    el: '#wrapper',
    data: {
      message: 'hello world',
      todos: [
        {
          text: 1,
          id: 'li0'
        }, {
          text: 2,
          id: 'li1'
        }, {
          text: 3,
          id: 'li2'
        }
      ],
      rawHtml: "<p>Raw HTML</p>",
      ok: true
    },
    methods: {
      clickHandler: function(e) {
        return this.ok = !this.ok;
      }
    }
  });
  Child = Vue.extend({
    template: '<p>child</p>'
  });
  MyComponent = Vue.extend({
    template: '...',
    components: {
      'my-component': Child
    }
  });
  Vue.component('my-component', MyComponent);
  return new Vue({
    el: "#wrapper"
  });
});
