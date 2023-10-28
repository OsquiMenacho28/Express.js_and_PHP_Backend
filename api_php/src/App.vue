<template>
  <div>
    <NavBarVue />
    <router-view />
  </div>
</template>

<script>
import NavBarVue from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBarVue,
  },
};
</script>

<style>
#app {
  text-align: center;
  user-select: none;
  background-image: url(./assets/wallpaper.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
