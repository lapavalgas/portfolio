<script setup lang="ts">
import MainSectionSkillsCardVue from "./MainSectionSkillsCard.vue";
import { useLoaderStore } from "@/stores/loader";

const loader = useLoaderStore();

function getTitle() {
  return loader.skillsInterface.title;
}
</script>
<template>
  <section id="skills">
    <div class="section-wallpaper section-margin-top-2 section-margin-bottom-8" id="skills-wallpaper">
      <div class="section-content">
        <h2 id="skills-link" class="about-title title-section hidden-mobile">
          {{ getTitle() }}
        </h2>
        <div class="content-area">
          <MainSectionSkillsCardVue />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#skills-wallpaper {
  background: var(--bg-clr-base-white);
}
</style>
