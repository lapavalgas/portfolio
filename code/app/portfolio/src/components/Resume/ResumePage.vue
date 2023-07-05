<script setup lang="ts">
import ResumeHeaderVue from "./ResumeHeader.vue";
import ResumeMainVue from "./ResumeMain.vue";
import ResumeAsideVue from "./ResumeAside.vue";
</script>
<template>
  <div class="wrapper-resume">
    <ResumeHeaderVue />
    <ResumeMainVue />
    <ResumeAsideVue />
  </div>
</template>
<style>
.resume-title {
  font-size: 1.3rem;
  line-height: 50px;
  font-weight: 800;
}

.resume-subtitle {
  font-weight: 800;
}
.resume-institution-local {
  font-style: italic;
}

.resume-default-text {
  line-height: 1rem;
}

.resume-default-lists {
  margin-top: -15px;
  margin-left: -15px;
}

@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
  .wrapper-resume {
    display: grid;
    grid-template-columns: 65% 35%;
    grid-template-areas:
      "h h"
      "m a";
  }
  .resume-default-text {
    line-height: 1.45rem;
  }
}

@media print {
  html,
  body {
    height: 8.27in !important;
    width: 11.69in !important;
  }

  @page {
    margin: 0;
  }

  .wrapper-resume {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-areas:
      "h h"
      "m a";
  }
  .resume-default-text {
    line-height: 1.45rem;
  }
}
</style>
