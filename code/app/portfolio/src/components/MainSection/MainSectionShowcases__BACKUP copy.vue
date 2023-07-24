<script setup lang="ts">
import MainSectionShowcasesCardVue from "@/components/MainSection/MainSectionShowcasesCard.vue";
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
</script>

<!-- data-flickity-options='{"wrapAround":false, "pageDots":true,"adaptiveHeight":false,}' -->
<template>
  <section id="showcases">
    <div class="section-wallpaper section-padding-8" id="showcases-wallpaper">
      <div class="section-content">
        <h2 id="showcases-link" class="showcases-title title-section">
          {{ loader.selectedLanguageData.sections.showcases.title }}
        </h2>
        <div class="content-area">
          <div class="showcases-card">
            <div class="showcases-card-js-flickity js-flickity main-carousel">
              <MainSectionShowcasesCardVue />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
/***-------------------------------------------------------
        SHOWCASES
-------------------------------------------------------***/

#showcases-wallpaper {
  background: var(--bg-clr-showcases);
}

.showcases-card {
  width: 100%;
  margin-top: 2rem;
}

.showcase-card > div {
  max-width: 100%;
}

.showcase-card-img {
  min-height: 315px;
}
.showcase-card-img > img {
  object-fit: fill;
  min-height: 100%;
}

/* .showcase-card-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
} */

.showcase-card-img > img {
  max-width: 95%;
}

.showcase-card-txt {
  position: relative;
  width: 90vw;
  max-width: calc(100vw - 10%);
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: var(--clr-base-white);
  padding-bottom: 20px;
}

.showcase-btn {
  /* width: 75px; */
  /* max-width: 45%; */
  /* width: 50%; */
  position: absolute;
  bottom: 0; /* bottom: 20px; */
  width: 85%;
  padding: 0.6rem;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: 0.75rem;
  color: var(--clr-base-link);
  background-color: var(--bg-clr-base-white);
  border-radius: var(--border-radius);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
}

.showcase-btn:hover {
  box-shadow: 2px 2px 15px rgba(35, 35, 35, 1);
}

/* media query for landscap and tablet */
@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
  .showcase-card {
    display: flex;
    height: 90%;
  }

  .showcase-card > div {
    height: 100%;
    max-width: 50%;
  }

  .showcase-card-img > img {
    max-width: 90%;
  }

  .showcase-card-txt {
    height: 100%;
    padding-top: 0;
  }

  .showcase-btn {
    bottom: 20px;
  }
  /* .showcase-card-txt>h3 {
        margin-top: 0;
        text-align: left;
    } */
}

/* media query for ajusts in landscape and tablet */
@media (orientation: landscape) and (min-width: 844px) and (max-width: 968px),
  (min-width: 768px) and (max-width: 1024px) {
}

/* media query for desktops */
@media (min-width: 1025px) and (min-height: 625px) {
  .showcase-card {
    display: flex;
    height: 100%;
  }
  .showcase-card-img > img {
    max-width: 70%;
  }

  .showcase-card-txt {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }

  /* .showcase-card-txt>h3 {
        text-align: left;
        font-size: 1.2rem;
        margin: 2rem 0;
    } */

  .showcase-card-txt > p {
    max-width: 80%;
    margin-top: 0;
  }

  .showcase-btn {
    padding: 0.2rem;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
  .showcase-card-img > img {
    max-width: 60%;
    float: right;
  }

  .showcase-card-txt > p {
    max-width: 70%;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
  /* .flickity-slider {
    max-width: 60% !important;
  } */
  .showcase-card-txt > p {
    max-width: 60%;
  }
}

/***-------------------------------------------------------
        FLICKITY
-------------------------------------------------------***/

.flickity-page-dots {
  bottom: -1rem !important;
}

.flickity-page-dots .dot {
  background: var(--clr-base-white) !important;
}

.flickity-prev-next-button.previous {
  display: none !important;
}

.flickity-prev-next-button.next {
  display: none !important;
}

.scrollable-place {
  height: 3000px;
}

.stop-scrolling {
  height: 100%;
  overflow: hidden;
}

/* media query for landscap and tablet */
@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
  .flickity-viewport {
    height: 450px !important;
  }
  .flickity-page-dots {
    bottom: -0rem !important;
  }
}

/* media query for ajusts in landscape and tablet */
@media (orientation: landscape) and (min-width: 844px) and (max-width: 968px),
  (min-width: 768px) and (max-width: 1024px) {
}

/* media query for desktops */
@media (min-width: 1025px) and (min-height: 625px) {
  .flickity-viewport {
    height: 315px !important;
  }

  .flickity-page-dots {
    position: absolute !important;
    margin-bottom: -70px !important;
  }

  .flickity-prev-next-button.previous {
    display: initial !important;
    left: -100px !important;
  }

  .flickity-prev-next-button.next {
    display: initial !important;
    right: -100px !important;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
}
</style>
