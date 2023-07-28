<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
</script>
<template>
  <div
    class="skill-card"
    v-for="skillCard in loader.selectedLanguageData.sections.skills.cards"
    :value="skillCard"
  >
    <h3 class="title-section-content">
      {{ skillCard.title }}
    </h3>
    <p>
      {{ skillCard.description }}
    </p>
  </div>
</template>
