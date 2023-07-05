<script setup lang="ts">
import ResumeMainProfessionalSummaryVue from "./ResumeMainProfessionalSummary.vue";
import ResumeMainWorkHistoryVue from "./ResumeMainWorkHistory.vue";
</script>
<template>
  <div class="main resume-default-text">
    <ResumeMainProfessionalSummaryVue />
    <ResumeMainWorkHistoryVue />
  </div>
</template>
<style>
.main {
  grid-area: m;
  margin-top: 180px;
  margin-left: 5%;
  margin-right: 5%;
}

@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
  .main {
    grid-area: m;
    margin-top: 180px;
    margin-left: 15%;
    margin-right: 0;
  }
}

@media print {
  .main {
    grid-area: m;
    margin-top: 180px;
    margin-left: 15%;
    margin-right: 0;
  }
}
</style>
