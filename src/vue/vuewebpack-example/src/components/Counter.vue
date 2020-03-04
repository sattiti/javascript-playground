<template lang="pug">
.counter
  h2 static props
  p {{ staticString }}
  h2 dynamic props
  p {{ dynamicString }}
  hr
  p {{ count }} ({{ cyohan }})
  button(type="button" @click="increment") +
  button(type="button" @click="decrement") -
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'counter',
  // receive from parent componment.
  props: {
    staticString: {
      type: String,
      default: 'static'
    },
    dynamicString: {
      type: String,
      default: 'dynamic'
    }
  },
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
