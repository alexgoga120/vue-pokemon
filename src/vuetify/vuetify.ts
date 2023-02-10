// Vuetify
import 'vuetify/styles'
import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const pokemonDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        secondary: "#ffffff"
    }
}
export const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'pokemonDarkTheme',
        themes: {
            pokemonDarkTheme
        }
    }
})