<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
</script>
<template>
  <section id="about">
    <div class="section-wallpaper section-margin-top-8" id="about-wallpaper">
      <div class="section-content">
        <h2 id="about-link" class="about-title title-section">
          {{ loader.selectedLanguageData.sections.about.title }}
        </h2>
        <div class="content-area">
          <div class="about-card">
            <div class="about-card-txt">
              <p>
                {{
                  loader.selectedLanguageData.sections.about.card.description
                }}
              </p>
            </div>
            <div class="about-card-img">
              <img src="@/assets/aboutmeimg.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
/***-------------------------------------------------------
        ABOUT 
-------------------------------------------------------***/
#about-wallpaper {
  background: var(--bg-clr-base-white);
}
.about-card {
  margin-top: 0.5rem;
  align-items: center;
}
.about-card-img {
  overflow: hidden;
}
.about-card-txt {
  overflow: hidden;
}
.about-card-img > img {
  object-fit: fill;
  min-width: 100%;
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
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
  .about-card-img > img {
    min-height: 100%;
  }
}
@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .about-card {
  }
  .about-card-txt {
  }
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
  /* hi-res laptops and desktops */
  .about-card-txt > p {
  }
  .about-card-img {
    padding: 25px;
  }
  .about-card-img > img {
  }
}
</style>
