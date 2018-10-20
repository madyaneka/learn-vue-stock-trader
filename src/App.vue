<template>
  <div>
    <app-header></app-header>
    <div class="section">
      <router-view></router-view>
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
