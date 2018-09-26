const pkg = require('./package')
require("dotenv").config();

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: process.env.APP_LOCALE
    },
    titleTemplate: process.env.APP_NAME + ' - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "//fonts.googleapis.com/css?family=Comfortaa:400,700&amp;subset=latin-ext", rel: "stylesheet" },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#03A6ff', height: '5px', failedColor: '#FF7273' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    ['nuxt-social-meta', {
      url: process.env.APP_URL,
      title: process.env.APP_NAME,
      description: process.env.APP_DESCRIPTION,
      img: '/icon.png',
      locale: process.env.APP_LOCALE,
      twitter: '@feelin',
      themeColor: '#00D1B2'
    }],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_URL
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options:{
            fix: true
          }
        })
      }
    },
    extractCSS: true,
  },
  manifest: {
    name: process.env.APP_NAME,
    lang: process.env.APP_LOCALE,
    short_name: process.env.APP_NAME,
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#00D1B2",
    theme_color: "#00D1B2",
    description: process.env.APP_DESCRIPTION,
  },
}
