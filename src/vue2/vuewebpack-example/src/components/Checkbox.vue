<template lang="pug">
div
  input(type="checkbox" id="ck" @input="updateAgree")
  label(for="ck") Agree
  p
    button(type="button" :disabled="!agree") Submit {{ agree }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'checkbox',
  computed: {
    ...mapGetters([
      'agree',
    ])
  },
  methods: {
    ...mapActions([
      'updateAgree'
    ])
  }
}
</script>


<style lang="sass">
</style>
