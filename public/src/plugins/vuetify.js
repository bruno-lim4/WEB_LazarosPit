// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        dark: true, 
        colors: {
          background: '#0B101B',
          surface: '#1e2836'
        },
      },
    },
  },
})

