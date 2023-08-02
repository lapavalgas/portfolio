<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";

const loader = useLoaderStore();

function getTitle() {
  return loader.aboutInterface.title;
}
function getCardTitle() {
  return loader.aboutInterface.card.title;
}
function getCardDescription() {
  return loader.aboutInterface.card.description;
}
function getCardImg() {
  return loader.aboutInterface.card.img;
}
function getCardImgAlt() {
  return loader.aboutInterface.card.img_alt;
}
function isToDisplayImgAlt() {
  return loader.aboutInterface.card.display_img_alt;
}
</script>
<template>
  <section id="about">
    <div class="section-wallpaper section-margin-top-8" id="about-wallpaper">
      <div class="section-content">
        <h2 id="about-link" class="about-title title-section">{{ getTitle() }}</h2>
        <div class="content-area">
          <div class="about-card">
            <div class="about-card-txt">
              <p>{{ getCardDescription() }}</p>
            </div>
            <div class="about-card-img">
              <span v-if="isToDisplayImgAlt()">{{ getCardImgAlt() }}</span>
              <img :src="getCardImg()" :alt="getCardImgAlt()" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#about-wallpaper {
  background: var(--bg-clr-base-white);
}
.about-card {
  margin-top: 0.5rem;
  align-items: center;
}
.about-card-img {
  overflow: hidden;
  position: relative;
}
.about-card-img > span {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 1rem;
  margin-bottom: 0.45rem;
  color: var(--bg-clr-base-white);
  font-family: monospace;
}
.about-card-txt {
  overflow: hidden;
}
.about-card-img > img {
  object-fit: fill;
  min-width: 100%;
}
@media (min-width: 961px) {
  .about-card {
    align-items: normal;
    display: flex;
    flex-direction: row-reverse;
  }
  .about-card-txt {
    max-width: 50%;
  }
  .about-card-txt > p {
    margin-left: -2rem;
    padding-left: 2rem;
  }
  .about-card-img {
    overflow: visible;
    padding: 20px;
    max-width: 50%;
    min-height: 100%;
  }
  .about-card-img > span {
    margin-right: 2rem;
    margin-bottom: 1.45rem;
  }
  .about-card-img > img {
    min-height: 100%;
  }
}
@media (min-width: 1025px) {
  .about-card-txt > p {
    line-height: 2em;
    margin-left: -1em;
  }
  .about-card-img > img {
    box-shadow: 14px 14px 14px rgba(0, 0, 0, 0.08);
    transition: all 1s linear;
  }
}
@media (min-width: 1281px) {
  .about-card-img {
    padding: 25px;
  }
}
</style>
