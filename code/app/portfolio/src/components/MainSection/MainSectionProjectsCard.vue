<script setup lang="ts">
import MainSectionProjectsCardTechstackVue from "./MainSectionProjectsCardTechstack.vue";
// import IconProjectCardVue from "@/components/MainSection/icons/IconProjectCard.vue";
import IconGithubVue from "@/components/MainSection/icons/IconGithub.vue";
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
</script>
<template>
  <div
    class="project-card"
    v-for="projectCard in loader.selectedLanguageData.sections.projects.cards"
    :value="projectCard"
  >
    <a :href="projectCard.link" class="project-card-link" target="_blank">
      <p>
        <span class="project-card-icon">
          <!-- <IconProjectCardVue /> -->
          <IconGithubVue />
        </span>
        <span class="title-section-content-projects">{{
          projectCard.title
        }}</span>
      </p>
      <p>
        {{ projectCard.description }}
      </p>
      <MainSectionProjectsCardTechstackVue
        :techstacks="projectCard.techstack"
      />
    </a>
  </div>
</template>
<style>
/***-------------------------------------------------------
PROJECTS
-------------------------------------------------------***/

/* #projects {
margin: 4rem 0;
} */

#projects-wallpaper {
  background: var(--bg-clr-base-white);
}

.project-card {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: var(--border-cards);
  font-size: var(--fs-small);
  background-color: #00000003;
}

.project-card > p {
  margin: 0;
  padding: 5px 0;
}

.project-card-link {
  text-decoration: none;
  color: inherit;
  line-height: inherit;
}

.project-card-icon {
  position: absolute;
  margin-top: -15px;
  margin-left: -3px;
}

.project-card-techstack {
  display: flex;
}

.project-card-techstack-item {
  margin-top: 0.65rem;
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.project-language {
  margin-right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  --background: rgba(0, 0, 0, 0);
  background: var(--background);
}

/* media query for landscap and tablet */
@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
  .projects-card {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  .project-card {
    margin: 0.5rem;
  }
}

/* media query for ajusts in landscape and tablet */
@media (orientation: landscape) and (min-width: 844px) and (max-width: 968px),
  (min-width: 768px) and (max-width: 1024px) {
}

/* media query for desktops */
@media (min-width: 1025px) and (min-height: 625px) {
  .projects-card {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
}
</style>
