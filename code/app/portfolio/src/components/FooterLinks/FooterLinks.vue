<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
import IconLinkedinVue from "./icons/IconLinkedin.vue";
import IconGithubVue from "./icons/IconGithub.vue";
import IconEmailVue from "./icons/IconEmail.vue";
import IconResumeVue from "./icons/IconResume.vue";

const loader = useLoaderStore();
</script>
<template>
  <span>
    <div class="scrolldown">{{ loader.selectedLanguageData.footer.scrolldown }}</div>
    <footer>
      <div class="social-media">
        <a class="link" target="_blank" :href="loader.selectedLanguageData.footer.linkedin_link">
          <IconLinkedinVue />
          <div id="linkedin">{{ loader.selectedLanguageData.footer.linkedin }}</div>
        </a>
        <a class="link" target="_blank" :href="loader.selectedLanguageData.footer.github_link">
          <IconGithubVue />
          <div id="github">{{ loader.selectedLanguageData.footer.github }}</div>
        </a>
        <a class="link" target="_blank" :href="loader.selectedLanguageData.footer.email_link">
          <IconEmailVue />
          <div id="email">{{ loader.selectedLanguageData.footer.email }}</div>
        </a>
        <a class="link" target="_blank" :href="loader.selectedLanguageData.footer.resume_link">
          <IconResumeVue />
          <div id="curriculum">{{ loader.selectedLanguageData.footer.resume }}</div>
        </a>
      </div>
      <div id="author">{{ loader.selectedLanguageData.footer.txt }}</div>
    </footer>
  </span>
</template>
<style scoped>
#author {
  position: absolute;
  bottom: 30px;
  color: var(--clr-base-white);
  opacity: 0;
  transform: translate(0, 0%);
  -webkit-transition: 0.9s 0s ease-in-out;
  transition: 0.9s 0s ease-in-out;
}
footer {
  z-index: 10;
  position: fixed;
  padding-bottom: 0.5rem;
  bottom: -70px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 1;
  transform: translate(0, 0%);
  -webkit-transition: 0.9s 0s ease-in-out;
  transition: 0.9s 0s ease-in-out;
}
.social-media {
  display: flex;
  align-items: center;
  justify-content: center;
}
.social-media > a {
  color: var(--default-color-text);
  text-decoration: none;
}
.social-media > .link {
  position: relative;
  margin: 0 1.5rem 0 1.5rem;
}
.icon {
  width: 24px;
  height: 24px;
  fill: rgb(80, 80, 80);
  color: black;
  margin-top: 1rem;
  transform: translate(0, 0%);
  -webkit-transition: 0.9s 0s ease-in-out;
  transition: 0.9s 0s ease-in-out;
}
.social-media > .link:hover > .icon {
  fill: black;
}
.social-media > .link:after,
.social-media > .link:before {
  opacity: 0;
}
.link {
  position: absolute;
}
.link div {
  display: none;
  position: absolute;
  left: -2rem;
  top: -2rem;
  text-align: center;
  background-color: white;
  padding: 2px;
  width: 82px;
  border-radius: var(--border-radius);
  border: var(--border-cards);
}
#linkedin::after,
#github::after,
#email::after,
#curriculum::after {
  content: " ";
  position: absolute;
  top: 2rem;
  left: 0;
  margin-left: 44%;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid black;
}
.link:hover #linkedin,
.link:hover #github,
.link:hover #email,
.link:hover #curriculum {
  display: block;
}
.scrolldown {
  position: absolute;
  width: 100%;
  bottom: 1rem;
  font-size: 0.7rem;
  text-align: center;
  letter-spacing: 0.15rem;
  color: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 1s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -moz-transition: all 1s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -ms-transition: all 1s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -o-transition: all 1s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  transition: all 1s cubic-bezier(0.08, 0.81, 0.87, 0.71);
}
</style>
