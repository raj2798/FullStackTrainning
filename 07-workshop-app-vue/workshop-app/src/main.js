import Vue from "vue";
import App from "./App.vue";

//we are running the init file
import "./init";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
