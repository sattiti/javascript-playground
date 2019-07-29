import Vue from 'vue'

new Vue({
  el: '#app',
  render: function(createElement){
    return createElement('div', {class: 'wrapper'}, [
      createElement('h1', 'hello')
    ])
  }
});
