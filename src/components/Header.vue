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
          <router-link to="/" class="navbar-item">End Day</router-link>
          <div class="navbar-item has-dropdown">
            <a class="navbar-link">
              Save & Load
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Save Data</a>
              <a class="navbar-item">Load Data</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
