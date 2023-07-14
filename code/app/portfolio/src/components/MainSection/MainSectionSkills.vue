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
          <div class="skills-card">
            <MainSectionSkillsCardVue />
          </div>
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

/* .skill-card>h3 {
    font-size: var(--fs-h5);
    font-weight: 600;
} */

/* media query for landscap and tablet */
@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
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

/* media query for ajusts in landscape and tablet */
@media (orientation: landscape) and (min-width: 844px) and (max-width: 968px),
  (min-width: 768px) and (max-width: 1024px) {
  .skills-card {
    margin-top: 1rem;
    display: flex;
  }
}

/* media query for desktops */
@media (min-width: 1025px) and (min-height: 625px) {
  .skill-card {    max-width: 320px;
    min-width: 320px;
    margin: 1rem;
    padding: 1rem;
    font-size: initial;
  }

  /* .skill-card>h3 {
        font-size: var(--fs-h4);
        margin-top: 0;
        margin-bottom: 2rem;
    } */

  .skill-card > p {
    margin-top: 0;
    margin-bottom: 0;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
  .skills-card {
    margin-top: 1rem;
    display: flex;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
}
</style>
