<script setup lang="ts">
import IconLinkedinVue from "@/components/FooterLinks/icons/IconLinkedin.vue";
import IconGithubVue from "@/components/FooterLinks/icons/IconGithub.vue";
import IconEmailVue from "@/components/FooterLinks/icons/IconEmail.vue";
import IconResumeVue from "@/components/FooterLinks/icons/IconResume.vue";
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
</script>
<template>
  <div class="scrolldown">
    {{ loader.selectedLanguageData.footer.scrolldown }}
  </div>
  <footer>
    <div class="social-media">
      <a
        class="link"
        target="_blank"
        loader.selectedLanguageData.footer-title="LinkedIn"
        href="https://www.linkedin.com/in/lapavalgas/"
      >
        <IconLinkedinVue />
        <div id="linkedin">
          {{ loader.selectedLanguageData.footer.linkedin }}
        </div>
      </a>
      <a
        class="link"
        target="_blank"
        loader.selectedLanguageData.footer-title="GitHub"
        href="https://github.com/lapavalgas"
      >
        <IconGithubVue />
        <div id="github">{{ loader.selectedLanguageData.footer.github }}</div>
      </a>
      <a
        class="link"
        target="_blank"
        loader.selectedLanguageData.footer-title="E-mail"
        href="mailto:lapavalgas@gmail.com"
      >
        <IconEmailVue />
        <div id="email">{{ loader.selectedLanguageData.footer.email }}</div>
      </a>
      <a
        class="link"
        target="_blank"
        loader.selectedLanguageData.footer-title="Resume"
        href="resume"
      >
        <IconResumeVue />
        <div id="curriculum">
          {{ loader.selectedLanguageData.footer.resume }}
        </div>
      </a>
    </div>
  </footer>
</template>
<style>
/***-------------------------------------------------------
        FOOTER
--------------------------------------------------------***/

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

/* media query for landscap and tablet */
@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
}

/* media query for ajusts in landscape and tablet */
@media (orientation: landscape) and (min-width: 844px) and (max-width: 968px),
  (min-width: 768px) and (max-width: 1024px) {
}

/* media query for desktops */
@media (min-width: 1025px) and (min-height: 625px) {
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
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
