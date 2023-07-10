import { createRouter, createWebHistory } from "vue-router";
import PortfolioViewVue from "@/views/PortfolioView.vue";
import TimelineViewVue from "@/views/TimelineView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "portfolio",
      component: PortfolioViewVue,
    },
    {
      path: "/tml",
      name: "timeline",
      component: TimelineViewVue,
      props: true,
    },
  ],
});

export default router;
