<template lang="pug">
  #app
    gnav
    h1 hello
    router-view
    counter
</template>


<script>
import Gnav from './components/Gnav.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'app',
  components: {
    Gnav,
    Counter
  }
}
</script>


<style lang="sass" scoped>
body
  margin: 0
  padding: 0

#app
  width: 100%
</style>
