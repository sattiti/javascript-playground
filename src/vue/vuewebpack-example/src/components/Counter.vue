<template lang="pug">
.counter
  p {{ count }} ({{ cyohan }})
  button(type="button" @click="increment") +
  button(type="button" @click="decrement") -
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'counter',
  computed: {
    ...mapGetters([
      'cyohan',
      'count'
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
    ])
  }
}
</script>


<style lang="sass" scoped>
button
  width: 10%
  height: auto
  padding: .5em
  margin: 0 .5
</style>
