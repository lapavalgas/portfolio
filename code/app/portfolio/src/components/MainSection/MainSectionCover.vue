<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
</script>
<template>
  <section id="cover-link">
    <div class="section-wallpaper" id="cover-wallpaper">
      <div class="section-content">
        <div class="cover-content-area">
          <div class="cover-card">
            <h1 class="cover-card-name">{{ loader.selectedLanguageData.sections.cover.name }}</h1>
            <p class="cover-card-profession">{{ loader.selectedLanguageData.sections.cover.profession }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
/***-------------------------------------------------------
        COVER
--------------------------------------------------------***/
#cover-wallpaper {
  background: var(--bg-clr-cover);
}

.cover-content-area {
  display: flex;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  align-items: center;
}

.cover-card {
  width: 100%;
  text-align: center;
}

.cover-card-name {
  font-size: 11vw;
  font-weight: 100;
  font-family: var(--ff-logo);
}

.cover-card-profession {
  letter-spacing: 0.2rem;
  font-size: 5vw;
  font-weight: 400;
  color: var(--default-color-text);
}

/* .scrolldown {
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
} */

/* media query for landscap and tablet */
@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
  .cover-card-name {
    font-size: 7vw;
  }

  .cover-card-profession {
    letter-spacing: 0.2rem;
    font-size: 3vw;
  }
}

/* media query for ajusts in landscape and tablet */
@media (orientation: landscape) and (min-width: 844px) and (max-width: 968px),
  (min-width: 768px) and (max-width: 1024px) {
}

/* media query for desktops */
@media (min-width: 1025px) and (min-height: 625px) {
  .cover-card-name {
    font-size: 5vw;
  }

  .cover-card-profession {
    margin-top: 2rem;
    letter-spacing: 0.4rem;
    font-size: 1.5vw;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
  .cover-card-name {
    font-size: 3vw;
  }

  .cover-card-profession {
    margin-top: 2rem;
    letter-spacing: 0.4rem;
    font-size: 1vw;
  }
}
</style>
