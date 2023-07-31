import { createRouter, createWebHistory } from "vue-router";
import PortfolioViewVue from "@/views/PortfolioView.vue";
import TimelineViewVue from "@/views/TimelineView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "portfolioa",
      component: PortfolioViewVue,
    },
    {
      path: "/portfolio",
      name: "portfoliob",
      component: PortfolioViewVue,
    },
    {
      path: "/timeline/:lang",
      name: "timeline",
      component: TimelineViewVue,
      props: true,
    },
  ],
});

export default router;
