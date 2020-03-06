<template lang="pug">
#contact
  h2 {{ pageTitle('contact') }}
  site-links
</template>


<script>
import { mapGetters } from 'vuex'
import SiteLinks from './SiteLinks.vue'

export default {
  name: 'contact',
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
  background-color: cyan
</style>
