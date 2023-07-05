<script setup lang="ts">
import ResumePageVue from "@/components/Resume/ResumePage.vue";

const LINKEDIN = "https://www.linkedin.com/in/lapavalgas/";
const GITHUB = "https://github.com/lapavalgas";
</script>
<template>
  <div class="resume-header">
    <div class="resume-name">Rafael Lapa Valgas</div>
    <div class="resume-contact">
      <span>lapavalgas@gmail.com</span>
      <span>48 98835-1392</span>
      <span>Padova, Italy</span>
    </div>
    <div class="resume-contact">
      <span><a href="{{LINKEDIN}}">www.linkedin.com/in/lapavalgas</a></span>
      <span><a href="{{GITHUB}}">www.github.com/lapavalgas</a></span>
    </div>
  </div>
</template>
<style>
.resume-header {
  grid-area: h;
  width: 100%;
  height: 110px;
  background: var(--bg-clr-cover);
  text-align: center;
}

.resume-name {
  font-size: 2rem;
  padding-top: 55px;
  font-family: var(--ff-logo);
}

.resume-contact {
  margin-top: 5px;
  font-size: 1.1rem;
  font-family: Trebuchet MS;
  text-decoration: none;
}

.resume-contact a {
  text-decoration: none black;
}

.resume-contact span {
  display: block;
}

@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
  .resume-name {
    font-size: 4rem;
    padding-top: 40px;
  }
  .resume-contact span {
    display: inline;
  }

  .resume-contact span::after {
    content: " | ";
  }
  .resume-contact span:last-child:after {
    content: "";
  }
}

@media print {
  .resume-name {
    font-family: Trebuchet MS;
    font-size: 4rem;
    padding-top: 40px;
  }

  .resume-contact span {
    display: inline;
  }

  .resume-contact span::after {
    content: " | ";
  }

  .resume-contact span:last-child:after {
    content: "";
  }
}
</style>
