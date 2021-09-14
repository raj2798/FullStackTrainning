import Vue from "vue";
import App from "./App.vue";

// we are running the init file
import "./init";

// @ -> src/
// if we import a folder (as in /router) the index.js export will be imported
import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
