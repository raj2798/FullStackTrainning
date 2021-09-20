import Router from "vue-router";

// @ -> src/ folder
import AppHome from "@/components/AppHome";
import WorkshopsList from "@/components/WorkshopsList";
import WorkshopDetails from "@/components/WorkshopDetails";
import SessionsList from "@/components/SessionsList";
import AddSession from "@/components/AddSession";

const router = new Router({
  // unless we use mode: history, otherwise URLS will be created with #
  mode: "history",
  routes: [
    {
      name: "home",
      path: "/",
      component: AppHome,
    },
    {
      name: "workshops list",
      path: "/workshops",
      component: WorkshopsList,
    },
    {
      name: "workshop details",
      path: "/workshops/:id",
      component: WorkshopDetails,
      props: true,
      children: [
        {
          name: "sessions list",
          path: "",
          component: SessionsList,
          props: true,
        },
        {
          name: "add session",
          path: "add",
          component: AddSession,
          props: true,
        },
      ],
    },
  ],
});

export default router;
