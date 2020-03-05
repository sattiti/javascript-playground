<template lang="pug">
#dataloader
  h2 {{ pageTitle('dataLoader') }}
  site-links
  hr
  hr
</template>


<script>
import { mapGetters } from 'vuex'
import SiteLinks from './SiteLinks'
// import axios from 'axios'

export default {
  name: 'dataLoader',

  components: {
    SiteLinks,
  },

  computed: {
    ...mapGetters([
      'pageTitle'
    ])
  },
}
</script>


<style scoped lang="sass">
body
  background-color: cyan
</style>
