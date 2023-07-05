import { createRouter, createWebHistory } from "vue-router";
import PortfolioViewVue from "@/views/PortfolioView.vue";
import ResumeViewVue from "@/views/ResumeView.vue";
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
      path: "/resume",
      name: "resume",
      component: ResumeViewVue,
    },
    {
      path: "/tml/:lng/spy",
      name: "timeline",
      component: TimelineViewVue,
      props: true,
    },
  ],
});

export default router;
