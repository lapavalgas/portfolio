<script setup lang="ts">
import HeaderMenuVue from "@/components/HeaderMenu/HeaderMenu.vue";
import MainSectionVue from "@/components/MainSection/MainSection.vue";
import FooterLinksVue from "@/components/FooterLinks/FooterLinks.vue";
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
loader.configUserLanguage();
</script>
<template>
  <HeaderMenuVue />
  <main>
    <MainSectionVue />
  </main>
  <FooterLinksVue />
</template>
