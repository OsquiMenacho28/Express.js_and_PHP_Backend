<template>
  <nav
    class="navbar navbar-expand-lg bg-body-secondary bg-opacity-75 shadow-lg"
  >
    <div class="container-fluid">
      <span class="navbar-brand">Actors</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div
          class="navbar-nav col-6 col-md-auto mb-lg-0 mx-auto justify-content-center mb-md-0 mb-3"
        >
          <router-link class="nav-item nav-link" to="/">Actors</router-link>
          <router-link class="nav-item nav-link" to="/actors/new_actor"
            >Create Actor</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script></script>
<style>
#app {
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
