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
  Java: ORANGE,
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
  CSS: BLUE,
  JavaScript: YELLOW,
  TypeScript: BLUE,
  ExpressJs: BLACK,
  Angular: RED,
  React: BLUE,
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

function setupDotColor(techstack: string) {
  return techstackDotColor[techstack];
}
</script>
<template>
  <div class="project-card-techstack">
    <div
      class="project-card-techstack-item"
      v-for="techstack in props.techstacks"
      :value="techstack"
    >
      <div
        class="project-language"
        :style="`--background: ${setupDotColor(techstack)}`"
      ></div>
      <div>
        {{ techstack }}
      </div>
    </div>
  </div>
</template>
