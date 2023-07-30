<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";

const loader = useLoaderStore();

function getCards() {
  return loader.skillsInterface.cards;
}
</script>
<template>
  <div class="skills-card">
    <div class="skill-card" v-for="card in getCards()" :key="card.title">
      <h3 class="title-section-content">{{ card.title }}</h3>
      <p>{{ card.description }}</p>
    </div>
  </div>
</template>
<style scoped>
.skill-card {
  font-size: var(--fs-small);
}
@media (orientation: landscape) and (min-width: 640px), (min-width: 768px) and (max-width: 1024px) {
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
@media (orientation: landscape) and (min-width: 844px) and (max-width: 968px), (min-width: 768px) and (max-width: 1024px) {
  .skills-card {
    margin-top: 1rem;
    display: flex;
  }
}
@media (min-width: 1025px) and (min-height: 625px) {
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
  .skills-card {
    margin-top: 1rem;
    display: flex;
  }
}
</style>
