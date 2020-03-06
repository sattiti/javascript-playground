<template lang="pug">
#dataloader
  h2 {{ pageTitle('dataLoader') }}
  site-links
  hr
  ul(v-for="(k, v) in getData")
    li {{ k.textContent }}
  hr
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import SiteLinks from './SiteLinks'

export default {
  name: 'dataLoader',

  components: {
    SiteLinks,
  },

  actions: {
    ...mapActions([
      'getXML'
    ])
  },

  mounted: function(){
    this.$store.dispatch('getXML');
  },

  computed: {
    ...mapGetters([
      'pageTitle',
      'getData',
    ])
  },
}
</script>


<style lang="sass">
body
  background-color: cyan
</style>
