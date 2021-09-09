import Vue from "vue";
import App from "./App.vue";

//we are running the init file
import "./init";

import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
