<template lang="pug">
#about
  h2 {{ pageTitle('about') }}
  site-links
</template>


<script>
import { mapGetters } from 'vuex'
import SiteLinks from './SiteLinks.vue'

export default {
  name: 'about',
  components: {
    SiteLinks,
  },
  computed: {
    ...mapGetters([
      'pageTitle'
    ])
  }
}
</script>


<style lang="sass">
body
  background-color: lime
</style>
