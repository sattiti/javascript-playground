<template lang="pug">
  v-app
    v-main
      v-container
        /// accordion
        v-expansion-panels(
          multiple
          accordion
          dark
          hover
          :value=[0, 1, 4]
        )
          v-expansion-panel(
            v-for="(item, i) in panels.length"
            :key="i"
          )
            v-expansion-panel-header Item {{ i }}
            v-expansion-panel-content {{ panels[i] }}

        /// v-btn
        v-btn(
          x-large
          rounded
          color="purple"
        ) hello world


</template>


<script>
export default {
  name: 'app',

  components: {
  },

  computed: {
  },

  data: function(){
    return{
      panels: [1, 2, 3, 4, 5]
    }
  }
}
</script>


<style lang="sass">
body
  margin: 0
  padding: 0

#app
  width: 100%
</style>
