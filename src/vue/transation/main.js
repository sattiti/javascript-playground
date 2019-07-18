/*
<transition 
  enter-class="CLS1 CLS2 .."
  enter-active-class="CLS1 CLS2 .."
  enter-to-class="CLS1 CLS2 .."
  leave-class="CLS1 CLS2 .."
  leave-active-class="CLS1 CLS2 .."
  leave-to-class="CLS1 CLS2 ..">
</transition>
*/
// v-enter:
// v-enter-active:
// v-enter-to:
// v-leave:
// v-leave-active:
// v-leave-to:

const vm = new Vue({
  el: '#app',
  data: function(){
    return {
      result: 'default',
      show: false
    }
  },
  mounted: function(){
    document.title = 'transation';
  }
});