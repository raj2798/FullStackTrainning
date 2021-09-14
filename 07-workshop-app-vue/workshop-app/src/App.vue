<template>
  <div id="app">
    <AppNavbar />
    <div class="container my-3">
      <!-- placeholder for ROuter to show the matching component -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    AppNavbar: Navbar,
  },
};
</script>

<style scoped></style>
