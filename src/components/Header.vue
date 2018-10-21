<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          Stock Trader
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/stocks" class="navbar-item" active-class="is-active">Stocks</router-link>
          <router-link to="/portfolio" class="navbar-item" active-class="is-active">Portfolio</router-link>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" @click="endDay">End Day</a>
          <div
            class="navbar-item has-dropdown"
            :class="{ 'is-active': isDropdownOpen }"
            @click="isDropdownOpen = !isDropdownOpen">
            <a class="navbar-link">
              Save & Load
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Save Data</a>
              <a class="navbar-item">Load Data</a>
            </div>
          </div>

          <p class="navbar-item">Funds: {{ funds | currency }}</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },

  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },

  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),

    endDay() {
      this.randomizeStocks()
    }
  }
}
</script>
