<template>
  <p>{{hello}}</p>
</template>


<script>
import Hello from './hello'

export default {
  mixins: [Hello],
  data: function(){
    return {
      greeting: 'Hello'
    }
  }
}
</script>


<style scoped>
p{
  font-weight:bold;
  margin-left:auto;
  margin-right:auto;
}
</style>
