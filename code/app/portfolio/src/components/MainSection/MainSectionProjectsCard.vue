<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
import IconGithubVue from "./icons/IconGithub.vue";
import MainSectionProjectsCardTechstackVue from "./MainSectionProjectsCardTechstack.vue";

const loader = useLoaderStore();

function getCards() {
  return loader.projectsInterface.cards;
}
</script>
<template>
  <div class="projects-card">
    <div class="project-card" v-for="card in getCards()" :key="card.title">
      <a :href="card.link" class="project-card-link" target="_blank">
        <p class="margin-left-10px">
          <span class="project-card-icon"><IconGithubVue /></span> <span class="title-section-content-projects">{{ card.title }}</span>
        </p>
        <p class="margin-left-10px">{{ card.description }}</p>
        <span class="content-area-inside"><MainSectionProjectsCardTechstackVue :techstacks="card.techstack" /></span>
      </a>
    </div>
  </div>
</template>
<style scoped>
.margin-left-10px {
  margin-left: 10px;
}
.project-card:hover {
  transition: all 0.47s linear;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.04);
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
  margin-top: 0px;
  margin-left: -8px;
}
@media (orientation: landscape) and (min-width: 640px), (min-width: 768px) and (max-width: 1024px) {
  .projects-card {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
  .project-card {
    margin: 0.5rem;
  }
}
@media (min-width: 1025px) and (min-height: 625px) {
  .projects-card {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
}
</style>
