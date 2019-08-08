<template lang="pug">
#question
  h2 {{ pageTitle('question') }}
  site-links

  .qbk(v-for="(q, i) in questions")
    h3 {{ q.title }}
    ul
      li(v-for="v in q.answers")
        label
          input(type="radio" :name="q.name" :value="v" @click="radioSelected({event: $event, qNum: i})")/ {{ v }}
    button(type="button" v-show="q.isCompleted" @click="nextButtonAction") {{ buttons.next.label }}

  .abk(:v-show="hasAnswer")
    ol
      li(v-for="(ans, index) in answers") {{ ans }}
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
      'questions',
      'answers',
      'buttons',
      'hasAnswer'
    ])
  },

  methods: {
    ...mapActions([
      'radioSelected',
      'nextButtonAction',
    ])
  },
}
</script>


<style scoped lang="sass">
body
  background-color: lime

button
  padding: .5em 3em

.qbk
  border: 1px solid lime
  border-radius: 10px
  padding: 1em
  margin-top: 1em
  box-sizing: border-box
  background-color: #fffff9

.abk
  background-color: #fffff0
</style>
