jQuery(document).ready ($)->
  mv = new Vue
    el: '#wrapper'
    data:
      message: 'hello world'
      todos: [
        {text: 1, id: 'li0'}
        {text: 2, id: 'li1'}
        {text: 3, id: 'li2'}
      ]
      rawHtml: "<p>Raw HTML</p>"
      ok: true
    methods:
      clickHandler: (e)->
        @.ok = !@.ok

  Child = Vue.extend
    template: '<p>child</p>'

  MyComponent = Vue.extend
    template: '<div>aaaa custom</div>'
    components:
      'my-component': Child

  Vue.component 'my-component', MyComponent
  new Vue
    el: "#wrapper"

