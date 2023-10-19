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
}
</style>
