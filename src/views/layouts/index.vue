<template>
  <div >
    <nav class="navbar has-background-success" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          TOP
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <div class="columns is-gapless is-mobile">
      <!-- is-narrow  -->
      <div class="column is-narrow-mobile  is-2-desktop has-background-warning">
        Left
      </div>
      <div class="column has-background-primary">
        <router-view :key="key" />
      </div>
    </div>
  </div>
</template>
<script>  
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>