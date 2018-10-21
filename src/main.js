import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'
import { FIREBASE_URL } from "../firebase-config"

import 'bulma/css/bulma.min.css'
import 'animate.css/animate.min.css'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = FIREBASE_URL

Vue.filter('currency', (value) => `$${ value.toLocaleString() }`)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
