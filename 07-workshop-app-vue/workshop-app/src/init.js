import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// by defsult the index.js will be imported
import Router from "vue-router";

import dateFilter from "@/filters/date";
import AppSpinner from "@/components/utils/AppSpinner";
import AppAlert from "@/components/utils/AppAlert";
import AppVotingWidget from "@/components/utils/AppVotingWidget";

// run this code (nothing to import really)
import "@/services/configureAxios";

Vue.filter("date", dateFilter);

Vue.component("AppSpinner", AppSpinner);
Vue.component("AppAlert", AppAlert);
Vue.component("AppVotingWidget", AppVotingWidget);

Vue.use(Router);
