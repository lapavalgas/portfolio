<script setup lang="ts">
import ResumeAsideSkillsVue from "./ResumeAsideSkills.vue";
import ResumeAsideEducationsVue from "./ResumeAsideEducations.vue";
</script>
<template>
  <div class="aside resume-default-text">
    <ResumeAsideEducationsVue />
    <ResumeAsideSkillsVue />
  </div>
</template>
<style>
.aside {
  grid-area: a;
  margin-top: 0px;
  margin-left: 5%;
  margin-right: 5%;
}

@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
  .aside {
    margin-top: 180px;
    margin-left: 0;
    padding-left: 5%;
    margin-right: 15%;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
  }
}

@media print {
  .aside {
    margin-top: 180px;
    margin-left: 0;
    padding-left: 5%;
    margin-right: 15%;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
  }
}
</style>
