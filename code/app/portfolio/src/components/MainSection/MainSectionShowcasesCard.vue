<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();

const BTN_VER_MAIS = "SAIBA MAIS";
</script>
<template>
  <div
    class="showcase-card"
    v-for="showcaseCard in loader.selectedLanguageData.sections.showcases.cards"
    :value="showcaseCard"
  >
    <div class="showcase-card-img">
      <img :src="showcaseCard.img" alt="" />
    </div>
    <div class="showcase-card-txt">
      <h3 class="title-section-content title-section-content-showcases">
        {{ showcaseCard.title }}
      </h3>
      <p>
        {{ showcaseCard.description }}
      </p>
      <div target="_blank" class="showcase-btn">
        <a :href="showcaseCard.link"> {{ BTN_VER_MAIS }}</a>
      </div>
    </div>
  </div>
</template>
