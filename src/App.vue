<template>
  <div>
    <app-header></app-header>
    <div class="section">
      <div class="container is-fluid">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    appHeader: Header
  }
}
</script>
