Vue.component('comp1', {
  props: {
    name: String,
    age: Number
  },
  template: `
<div class="bk0">
  <slot name="title"></slot>
  <slot name="desc"></slot>
</div>
`
});


// slot は一部のコードを外部から挿入することができる。
const vm = new Vue({
  el: '#app',
  template:`
<dl>
  <comp1 v-for="item in items">
    <template v-slot:title>
      <dt>{{ item.name }}</dt>
    </template>
    <template v-slot:desc>
      <dd>{{ item.age }}</dd>
    </template>
</comp1>
</dl>
  `,
  data: function(){
    return{
      items: [
        {name: 'John', age: 20},
        {name: 'Peter', age: 17},
        {name: 'May', age: 18}
      ]
    }
  },
  mounted: function(){
    document.title = 'Get Start';
  }
});