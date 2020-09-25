// props は別コンポーネントからの data を受け取るために利用する。
Vue.component('li-comp', {
  props: {
    text: '',
    index: 0
  },
  template: `<li><a href="javascript:void(0);" @click="toggleData">{{ text }}</a></li>`,
  methods: {
    toggleData: function(e){
      this.$emit('toggleEvent', e, this.index);
    }
  }
});

const vm = new Vue({
  el: '#app',
  template: `
    <div>
      <ol>
        <li-comp 
          v-for="text, index in items"
          :text="text.name"
          :index="index"
          @toggleEvent="showPrice">
        </li-comp>
      </ol>
    </div>
  `,
  data:()=>{
    return {
      items: [
        {name: 'banana', price:'198'},
        {name: 'apple', price: '298'},
        {name: 'orange', price: '398'}
      ],
      isClick: false
    }
  },
  methods: {
    showPrice: function(e, i){
      this.isClick ?
        e.currentTarget.textContent = this.items[i].name :
        e.currentTarget.textContent = this.items[i].price;
      this.isClick = !this.isClick;
    }
  },
  mounted: function(){
    document.title = 'dataSharing';
  }
});