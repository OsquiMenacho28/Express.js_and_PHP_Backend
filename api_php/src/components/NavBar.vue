<template>
  <header class="sticky-top mb-4">
    <nav
      class="navbar navbar-expand-lg bg-body-secondary shadow py-3"
      data-bs-theme="dark"
    >
      <div class="container">
        <span class="navbar-brand h1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            class="bi bi-person-circle me-2"
            viewBox="0 0 16 16"
            style="font-size: 2em"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          ACTORS
        </span>
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
          <div class="navbar-nav mx-auto gap-4">
            <router-link class="nav-item" to="/">Actors</router-link>
            <router-link class="nav-item" to="/actors/new_actor"
              >Create Actor</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script></script>
<style>
nav a {
  font-weight: bold;
  text-decoration: none;
  font-size: large;
}

nav a:hover {
  color: rgb(160, 255, 255);
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: rgb(112, 255, 167);
}
</style>
