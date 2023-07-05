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
              <h3 class="title-section-content title-left hidden-mobile">
                {{ loader.selectedLanguageData.sections.about.card.title }}
              </h3>
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
/* 
#about {
    margin-top: 3rem;
} */

#about-wallpaper {
  background: var(--bg-clr-base-white);
}

/* .about-card-img>img {
    max-width: 100%;
} */

/* media query for landscap and tablet */
@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
  .about-card {
    display: flex;
  }

  .about-card > div {
    max-width: 50%;
  }

  .about-card-txt > p {
    padding-right: 1rem;
    margin-top: 0;
    min-width: 546px;
  }

  .about-card-img {
    margin-top: 1rem;
    /* display: flex;
        flex-direction: column;
        justify-content: center; */
  }
}

/* media query for ajusts in lineheight in about text */
@media (orientation: landscape) and (min-width: 1024px) and (max-width: 1024px) {
  .about-card-txt > p {
    line-height: calc(var(--lh-body) + 0.65);
  }
}

/* media query for ajusts in landscape and tablet */
@media (orientation: landscape) and (min-width: 844px) and (max-width: 968px),
  (min-width: 768px) and (max-width: 1024px) {
  .about-card-img > img {
    max-width: 80%;
  }

  .about-card-txt > p {
    padding-right: 0;
    margin-top: 1rem;
  }
}

/* media query for desktops */
@media (min-width: 1025px) and (min-height: 625px) {
  .about-card-txt {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }

  .about-card-txt > p {
    padding: 0;
    line-height: calc(var(--lh-body) + 0.85);
    margin-bottom: 1rem;
  }

  .about-card-img {
    margin-top: 0;
  }

  .about-card-img > img {
    max-width: 75%;
    box-shadow: 40px 40px 5px rgba(0, 0, 0, 0.03);
    transition: all 1s linear;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
  .about-card-img > img {
    max-width: 65%;
  }

  .about-card-txt > p {
    padding-right: 0;
    margin-top: 1rem;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
}
</style>
