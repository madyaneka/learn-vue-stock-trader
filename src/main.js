import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

import 'bulma/css/bulma.min.css'
import 'animate.css/animate.min.css'

Vue.use(VueRouter)

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
