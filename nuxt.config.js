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
    '@nuxtjs/toast',
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyCiEsV9ltkdqcVq0b7BaxUacoNIuZroYrk",
      authDomain: "the-organic-verse.firebaseapp.com",
      databaseURL: "https://the-organic-verse-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "the-organic-verse",
      storageBucket: "the-organic-verse.appspot.com",
      messagingSenderId: "654120641472",
      appId: "1:654120641472:web:1b65edca9c8a7ae7ad9e25",
      measurementId: "G-6N7Z1EE75G"
    },
    services: {
      auth: true // Just as example. Can be any other service.
    }
  },
  toast: {
    position: 'bottom-center'
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
