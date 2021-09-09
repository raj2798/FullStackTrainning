import Router from "vue-router";

// @ -> src/ folder
import Home from "@/components/Home";
import WorkshopsList from "@/components/WorkshopsList";

const router = new Router({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "Home",
      path: "/workshops",
      component: WorkshopsList,
    },
  ],
});

export default router;
