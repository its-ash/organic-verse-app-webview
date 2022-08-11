export default {
  ssr: false,
  target: 'static',
  generate: {
    dir: 'docs'
  },
  head: {
    title: 'organic_verse_app_webview',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        src: "/js/bootstrap.min.js"
      }
    ]
  },
  css: ['@mdi/font/css/materialdesignicons.min.css'],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],
  toast: {
    position: 'top-center'
  },
  axios: {
    baseURL: '/'
  },
  router: {
    base: '/organic-verse-app-webview/',
    linkExactActiveClass: 'active'
  },
  build: {}
}
