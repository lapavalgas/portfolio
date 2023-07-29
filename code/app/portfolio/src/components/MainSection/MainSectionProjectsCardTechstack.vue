<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";

const loader = useLoaderStore();

const props = defineProps({ techstacks: Array<String> });

const RED = "red";
const ORANGE = "orange";
const YELLOW = "rgb(247, 223, 30)";
const GREEN = "green";
const BLUE = "blue";
const DARK_BLUE = "dark blue";
const VIOLET = "violet";
const GRAY = "gray";
const BLACK = "black";

const techstackDotColor: Record<string, string> = {
  Java: RED,
  Spring: GREEN,
  Hibernate: GRAY,
  Kotlin: BLUE,
  Linux: RED,
  Shell: BLACK,
  Docker: BLUE,
  REST: GRAY,
  GraphQL: GRAY,
  PostgreeSQL: BLUE,
  MySQL: BLACK,
  MongoDB: GREEN,
  HTML: RED,
  CSS: YELLOW,
  JavaScript: YELLOW,
  TypeScript: BLUE,
  ExpressJs: BLACK,
  Angular: RED,
  React: BLUE,
  Vue: GREEN,
  VueJs: GREEN,
  VueX: GREEN,
  Pinia: YELLOW,
  Ruby: RED,
  Jekyll: RED,
  Python: BLACK,
  Selenium: GREEN,
  PHP: VIOLET,
  Wordpress: BLUE,
};

function setupDotColor(techstack: any) {
  return techstackDotColor[techstack];
}
</script>
<template>
  <div class="project-card-techstack">
    <div class="project-card-techstack-item" v-for="techstack in props.techstacks" :key="techstack[0]">
      <div class="project-language" :style="`--background: ${setupDotColor(techstack)}`"></div>
      <div>
        {{ techstack }}
      </div>
    </div>
  </div>
</template>
<style scoped>
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
</style>
