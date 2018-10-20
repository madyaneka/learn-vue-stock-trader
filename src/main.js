import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

import 'bulma/css/bulma.min.css'

Vue.use(VueRouter)

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
