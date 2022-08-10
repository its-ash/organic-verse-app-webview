import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _10da6f30 = () => interopDefault(import('../pages/Cart.vue' /* webpackChunkName: "pages/Cart" */))
const _7edb648c = () => interopDefault(import('../pages/Index.vue' /* webpackChunkName: "pages/Index" */))
const _598da698 = () => interopDefault(import('../pages/Profile/Index.vue' /* webpackChunkName: "pages/Profile/Index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/Cart",
    component: _10da6f30,
    name: "Cart"
  }, {
    path: "/Index",
    component: _7edb648c,
    name: "Index"
  }, {
    path: "/Profile/Index",
    component: _598da698,
    name: "Profile-Index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
