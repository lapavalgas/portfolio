<script setup lang="ts">
import MainSectionShowcasesCardVue from "@/components/MainSection/MainSectionShowcasesCard.vue";
import { useLoaderStore } from "@/stores/loader";

const loader = useLoaderStore();

function getTitle() {
  return loader.showcasesInterface.title;
}
</script>
<template>
  <section id="showcases">
    <div class="section-wallpaper section-padding-8" id="showcases-wallpaper">
      <div class="section-content">
        <h2 id="showcases-link" class="showcases-title title-section">
          {{ getTitle() }}
        </h2>
        <div class="content-area">
          <MainSectionShowcasesCardVue />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#showcases-wallpaper {
  background: var(--bg-clr-showcases);
}
</style>
