<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
import MainSectionProjectsCardVue from "./MainSectionProjectsCard.vue";

const loader = useLoaderStore();

function getTitle() {
  return loader.projectsInterface.title;
}
</script>
<template>
  <section id="projects">
    <div class="section-wallpaper section-padding-8" id="projects-wallpaper">
      <div class="section-content">
        <h2 id="projects-link" class="projects-title title-section">{{ getTitle() }}</h2>
        <div class="content-area"><MainSectionProjectsCardVue /></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#projects-wallpaper {
  background: var(--bg-clr-base-white);
}
</style>
