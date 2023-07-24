<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();

function isThislanguageTheUserLanguage(language: string) {
  return language === loader.selectedLanguage;
}

function handleChange(e: any) {
  if (e.target.options.selectedIndex > -1) {
    loader.changePortfolioLanguage(
      e.target.options[e.target.options.selectedIndex].value
    );
  }
}

const ENGLISH = "english";
const ENGLISH_ABB = "en";
const PORTUGUESE = "português";
const PORTUGUESE_ABB = "pt";

function getTimelineLanguage() {
  switch (loader.selectedLanguage.toLowerCase()) {
    case ENGLISH.toLowerCase():
      return ENGLISH_ABB;
    case PORTUGUESE.toLowerCase():
      return PORTUGUESE_ABB;
    default:
      return navigator.language;
  }
}
</script>
<template>
  <header>
    <div class="logo"></div>
    <nav class="nav-content-hidden">
      <ul class="nav-content">
        <li class="nav-item" onclick="menuToggle()">
          <a href="#cover-link">{{ loader.selectedLanguageData.menu.cover }}</a>
        </li>
        <li class="nav-item" onclick="menuToggle()">
          <a href="#about-link">{{ loader.selectedLanguageData.menu.about }}</a>
        </li>
        <li class="nav-item hidden-mobile" onclick="menuToggle()">
          <a href="#skills-link">{{
            loader.selectedLanguageData.menu.skills
          }}</a>
        </li>
        <li class="nav-item" onclick="menuToggle()">
          <a href="#showcases-link">{{
            loader.selectedLanguageData.menu.showcases
          }}</a>
        </li>
        <li class="nav-item" onclick="menuToggle()">
          <a href="#projects-link">{{
            loader.selectedLanguageData.menu.projects
          }}</a>
        </li>
        <li class="nav-item" onclick="menuToggle()">
          <a href="#contact-link">{{
            loader.selectedLanguageData.menu.contact
          }}</a>
        </li>
        <li class="nav-item" onclick="menuToggle()">
          <a target="_blank" :href="'/tml/' + getTimelineLanguage()">{{
            loader.selectedLanguageData.menu.timeline
          }}</a>
        </li>
        <!-- <li class="nav-item" onclick="menuToggle()">
          <a href="/resume" target="_blank">{{
            loader.selectedLanguageData.menu.resume
          }}</a>
        </li> -->
        <li class="nav-item-select">
          <select class="form-select" @change="handleChange">
            <option
              v-for="language in loader.menuLanguage"
              :value="language"
              :selected="isThislanguageTheUserLanguage(language)"
            >
              {{ language }}
            </option>
          </select>
        </li>
      </ul>
    </nav>
    <div id="menuToggle">
      <input id="toggle" onclick="menuToggle()" type="checkbox" />
      <span id="span1"></span>
      <span id="span2"></span>
      <span id="span3"></span>
    </div>
  </header>
</template>

<style>
/***-------------------------------------------------------
        HEADER
-------------------------------------------------------***/

header {
  position: fixed;
  width: 100%;
  z-index: 10;
}

.logo {
  display: none;
  opacity: 0;
  -webkit-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -moz-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -ms-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -o-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
}

/* HEADER MENU HAMBURGUER STYLE */

#menuToggle {
  overflow: hidden;
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menuToggle input {
  display: flex;
  width: 60px;
  height: 60px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  /* hide input */
  z-index: 11;
  /* top of the menu */
}

#menuToggle span {
  width: 30px;
  height: 3px;
  margin-bottom: 7px;
  border-radius: 4px;
  background: var(--clr-base-black);
  -webkit-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -moz-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -ms-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -o-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
}

#span1 {
  transform-origin: 4px 0px;
}

#span3 {
  transform-origin: bottom right;
}

#menuToggle input:checked ~ #span1 {
  background: var(--clr-base-black);
  transform: rotate(45deg) translate(8px);
}

#menuToggle input:checked ~ #span2 {
  background: var(--clr-base-black);
  transform: rotate(495deg) translate(4px);
}

#menuToggle input:checked ~ #span3 {
  background: var(--clr-base-black);
  transform: rotate(45deg);
  opacity: 0;
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
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem 0;
  }

  .logo {
    display: initial;
    margin-left: 1rem;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .logo > p {
    margin: 0;
    padding: 0;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
}

/***-------------------------------------------------------
        HEADER HAMBURGUER
--------------------------------------------------------***/

nav {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  font-size: 5vh;
  background-color: white;
  opacity: 1;
  transform: translate(0, 0%);
  -webkit-transition: 0.9s 0s ease-in-out;
  transition: 0.9s 0s ease-in-out;
}

.nav-content-hidden {
  opacity: 0;
  transform: translate(0, -200%);
  -webkit-transition: 0.9s 0s ease-in-out;
  transition: 0.9s 0s ease-in-out;
}

.nav-content {
  margin: 0;
  padding: 0;
  text-align: center;
  list-style-type: none;
}

.nav-item {
  padding: 1rem 0;
}

.nav-item > a {
  color: var(--default-color-text);
  text-decoration: none;
}

.form-select {
  margin-top: 1rem;
  padding: 0.4rem 4rem 0.4rem 0.7rem;
  border: var(--border-cards);
  border-radius: 0.375rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  font-size: 1rem;
  color: var(--default-color-text);
}

.form-select:hover {
  color: black;
  border-bottom: var(--border-cards);
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
  #menuToggle {
    display: none;
  }

  nav {
    position: initial;
    display: block;
    opacity: 1;
    margin: 0;
    margin-right: 7%;
    padding: 0;
    padding: 1rem;
    width: auto;
    height: auto;
    font-size: 1rem;
    background-color: initial;
  }

  .nav-content-hidden {
    opacity: 1;
    transform: translate(0, -0%);
    -webkit-transition: 0.9s 0s ease-in-out;
    transition: 0.9s 0s ease-in-out;
  }

  .nav-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: rgba(0, 0, 0, 0.6);
  }

  .nav-item {
    padding: 0 1rem;
    font-size: 1.1rem;
  }

  .nav-item > a:hover {
    color: var(--clr-base-link);
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 0.75rem;
  }

  .nav-item-select {
    padding: 0 1rem 1rem 1rem;
  }

  .form-select {
    margin-top: 1rem;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.082);
  }

  .form-select:hover {
    color: var(--clr-base-link);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .hidden-mobile {
    display: none;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
  nav {
    margin-right: 17%;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
  nav {
    margin-right: 24%;
  }
}
</style>
