import Vue from 'vue'
import Vuetify from 'vuetify'
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    customProperties: true

    // themes: {
    //   dark: {
    //     primary: color.purple,
    //     secondary: '',
    //     success: '',
    //     accent: '',
    //     info: '',
    //     warning: ''
    //     error: '',
    //   }
    // }
  },
})
