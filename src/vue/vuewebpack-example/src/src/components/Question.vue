<template lang="pug">
#question
  h2 {{ pageTitle('question') }}
  site-links

  h3 {{ qs[0].title }}
  ul
    li(v-for="item in qs[0].values")
      label
        input(type="radio" name="fruit" :value="item" @click="radioSelected")/ {{ item }}
  button(type="button" v-show="qs[0].show" @click="nextButtonAction") {{ buttonValue }}
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import SiteLinks from './SiteLinks.vue'

export default {
  name: 'question',
  components: {
    SiteLinks,
  },
  computed: {
    ...mapGetters([
      'pageTitle',
      'qs',
      'buttonValue'
    ])
  },
  methods: {
    ...mapActions([
      'radioSelected',
      'nextButtonAction'
    ])
  }
}
</script>


<style scoped lang="sass">
body
  background-color: lime

button
  padding: .5em 3em
</style>
