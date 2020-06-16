<template lang="pug">
  v-app
    v-container
      v-content
        // autocomplete
        .bk0
          v-card(
            color="green darken-2"
          )
            v-card-title AutoComplete
            v-card-text hello hello

        .bk0
          v-toolbar(
            flat
            dark
            outlined
            height="auto"
          )
            v-toolbar-title 検索
            v-autocomplete(
              class="mx-4 my-4"
              height="auto"
              flat
              clearable
              dense
              hide-details
              hide-no-data
              hide-selected
              solo-inverted
              return-object
              placeholder="キーワードを入力してください"
              v-model="acTool.selected"
              item-text="origin"
              item-value="cost"
              :items="acTool.itemData"
              :search-input.sync="acTool.search"
              @focus="acToolOnFocus"
            )

            v-btn(
              color="blue lighen-2"
              @click="acToolButtonOnClick"
            ) 検索する

        .bk0(v-if="acTool.showDetails")
          v-card
            dl
              v-card-title
                dt {{ acTool.selected.name }}
              v-card-text
                dd 産地: {{ acTool.selected.origin }}
                dd 値段: {{ acTool.selected.cost }}

        .bk0
          v-card(color="green darken-2")
            v-card-title Accordion

          v-expansion-panels(
            multiple
            accordion
            dark
            hover
            :value=[0, 1, 4]
          )
            v-expansion-panel(
              v-for="(item, i) in panels.items"
              :key="i"
            )
              v-expansion-panel-header Fruit {{ i }}
              v-expansion-panel-content {{ item }}

        /// v-btn
        .bk0
          v-card(
            color="green darken-2"

          )
            v-card-title Buttons
          v-btn(
            x-large
            rounded
            color="purple"
            class="mt-4"
          ) hello world

</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',

  components: {
  },

  computed: {
    ...mapGetters([
      'panels',
      'acTool',
      'itemData',
    ])
  },

  methods: {
    ...mapActions([
      'acToolButtonOnClick',
      'acToolOnFocus',
    ])
  },
}
</script>


<style lang="sass">
*,
*::before,
*::after
  box-sizing: border-box

body
  margin: 0
  padding: 0

#app
  width: 100%

.bk0
  margin-top: 1rem
</style>
