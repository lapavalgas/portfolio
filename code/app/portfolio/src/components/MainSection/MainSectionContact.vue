<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";

const loader = useLoaderStore();

function getTitle() {
  return loader.contatInterface.title;
}

function getSectionTitle() {
  return loader.contatInterface.card_farewell.title;
}

function getImg() {
  return loader.contatInterface.card_farewell.img;
}

function getImgAlt() {
  return loader.contatInterface.card_farewell.img_alt;
}

function getSectionFarewellDescription() {
  return loader.contatInterface.card_farewell.description;
}

function getSectionPsychologyDescription() {
  return loader.contatInterface.card_psychology.description;
}

function getSectionPsychologyPortfolioLink() {
  return loader.contatInterface.card_psychology.link;
}

function getSectionPsychologyPortfolioLinkText() {
  return loader.contatInterface.card_psychology.link_description;
}
</script>
<template>
  <section id="contact" class="">
    <div class="section-wallpaper section-padding-8" id="contact-wallpaper">
      <div class="section-content">
        <h2 id="contact-link" class="contact-title title-section">
          {{ getTitle() }}
        </h2>
        <div class="content-area">
          <div class="contact-card">
            <div class="contact-card-img"><img :src="getImg()" :alt="getImgAlt()" /></div>
            <div class="contact-card-txt">
              <h3 class="title-section-content title-section-content-contact">{{ getSectionTitle() }}</h3>
              <p class="contact-card-farewell">
                {{ getSectionFarewellDescription() }}
              </p>
              <p class="contact-card-psychology">
                {{ getSectionPsychologyDescription()
                }}<a class="contact-card-link" :href="getSectionPsychologyPortfolioLink()">{{ getSectionPsychologyPortfolioLinkText() }}</a>
              </p>
            </div>
          </div>
          <div id="contact-area-id"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#contact {
  color: var(--clr-base-white);
}
#contact-wallpaper {
  height: 100%;
  background: var(--bg-clr-contact);
}
.contact-card {
  padding: 20px 0 40px 0;
}
.contact-card-img {
  margin: auto;
  max-width: 100%;
}
.contact-card-img > img {
  max-width: 60%;
  box-shadow: 14px 14px 14px rgba(0, 0, 0, 0.08);
  transition: all 1s linear;
}
.contact-card-link {
  color: rgb(162, 193, 235);
}
@media (orientation: landscape) and (min-width: 640px) {
  .contact-card-img {
    max-width: 98%;
    margin: auto;
  }
  .contact-card-img > img {
    max-width: 40%;
  }
}
@media (min-width: 769px) {
  .contact-card {
    display: flex;
    padding: 0;
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .contact-card-img {
    max-width: 50%;
    min-width: 50%;
    margin: auto;
    margin-top: 0%;
  }
  .contact-card-img > img {
    max-width: 50%;
  }
  .contact-card-txt {
    max-width: 60%;
    min-width: 50%;
    margin-top: 0;
    margin-left: -5%;
  }
  .title-section-content-contact {
    margin: 0;
  }
  .contact-card-img {
    transform: translate(-20px, 30px);
  }
  .contact-card-txt {
    transform: translate(-20px, 0px);
  }
}
@media (min-width: 1024px) {
  .contact-card-img {
    transform: translate(-55px, -0px);
  }
  .contact-card-txt {
    transform: translate(-55px, 0px);
  }
}
@media (min-width: 1180px) {
  .contact-card {
    padding: 0;
  }
  .contact-card-img {
    transform: translate(-55px, -7px);
  }
  .contact-card-txt {
    transform: translate(-55px, 0px);
  }
}
</style>
