// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  routeRules:{
    '/':{static: true},
    '/**':{static: true}
  },
  css:[
    'vuetify/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css'
  ], 
  build:{
    transpile:["vuetify"]
  },
})
