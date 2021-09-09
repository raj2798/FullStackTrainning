<template>
  <div id="app">
    <AppNavbar />
    <div class="container my-3">
      <!-- placeholder for Router to show the matching component -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
export default {
  name: "App",
  components: {
    AppNavbar: Navbar,
  },
};
</script>

<style scoped></style>
