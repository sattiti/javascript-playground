<template lang="pug">
#question
  h2 {{ pageTitle('question') }}
  site-links

  p {{ showAnswer }}
  .qbk(v-for="(q, i) in questions" v-show="q.active")
    h3 {{ q.title }}
    ul
      li(v-for="v in q.answers")
        label
          input(type="radio" :name="q.name" :value="v" @click="radioSelected({event: $event, qNum: i})")/ {{ v }}
    button(type="button" v-show="q.isCompleted" @click="nextButtonAction") {{ buttons.next.label }}

  .abk(v-show="showAnswer")
    ol
      li(v-for="(q, index) in questions") {{ q.ans }}
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import SiteLinks from './SiteLinks.vue'
import $ from 'jquery'

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
      'showAnswer'
    ])
  },

  methods: {
    ...mapActions([
      'radioSelected',
      'nextButtonAction',
    ])
  },
  mounted: function(){
    let qbk = $('#question').find('.qbk')
    qbk.not(':eq(0)').hide()
  }
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
