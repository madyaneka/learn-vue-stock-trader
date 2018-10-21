<template>
  <div>
    <app-header></app-header>
    <div class="section">
      <div class="container is-fluid">
        <transition
          appear
          mode="out-in"
          enter-active-class="animated slideInDown"
          leave-active-class="animated slideOutUp">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    appHeader: Header
  },

  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>
