<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
</script>
<template>
  <div
    class="showcase-card"
    v-for="showcaseCard in loader.selectedLanguageData.sections.showcases.cards"
    :value="showcaseCard"
  >
    <div class="showcase-card-img">
      <img src="@/assets/HNAMS_02.png" alt="" />
    </div>
    <div class="showcase-card-txt">
      <h3 class="title-section-content title-section-content-showcases">
        {{ showcaseCard.title }}
      </h3>
      <p>
        {{ showcaseCard.description }}
      </p>
      <a class="showcase-btn" href="">VER MAIS</a>
    </div>
  </div>
</template>