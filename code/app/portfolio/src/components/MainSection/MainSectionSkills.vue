<script setup lang="ts">
import MainSectionSkillsCardVue from "./MainSectionSkillsCard.vue";
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
</script>
<template>
  <section id="skills">
    <div
      class="section-wallpaper section-margin-top-2 section-margin-bottom-8"
      id="skills-wallpaper"
    >
      <div class="section-content">
        <h2 id="skills-link" class="about-title title-section hidden-mobile">
          {{ loader.selectedLanguageData.sections.skills.title }}
        </h2>
        <div class="content-area">
          <MainSectionSkillsCardVue />
        </div>
      </div>
    </div>
  </section>
</template>
<style>
/***-------------------------------------------------------
        SKILLS
-------------------------------------------------------***/
#skills-wallpaper {
  background: var(--bg-clr-base-white);
}

.skill-card {
  font-size: var(--fs-small);
}

@media (orientation: landscape) and (min-width: 640px),
  /* media query for landscap and tablet */ (min-width: 768px) and (max-width: 1024px) {
  .skills-card {
    margin-top: 0.5rem;
    display: flex;
  }

  .skill-card {
    margin: 5px;
    padding: 5px;
    text-align: center;
    border: var(--border-cards);
  }
}

@media (orientation: landscape) and (min-width: 844px) and (max-width: 968px),
  /* media query for ajusts in landscape and tablet */ (min-width: 768px) and (max-width: 1024px) {
  .skills-card {
    margin-top: 1rem;
    display: flex;
  }
}

@media (min-width: 1025px) and (min-height: 625px) {
  /* media query for desktops */
  .skill-card {
    max-width: 320px;
    min-width: 320px;
    margin: 1rem;
    padding: 1rem;
    font-size: initial;
  }

  .skill-card > p {
    margin-top: 0;
    margin-bottom: 0;
  }
}

@media (min-width: 1445px) {
  /* media query for ajusts in desktops */
  .skills-card {
    margin-top: 1rem;
    display: flex;
  }
}
</style>
