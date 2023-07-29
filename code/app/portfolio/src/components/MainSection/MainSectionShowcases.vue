<script setup lang="ts">
import MainSectionShowcasesCardVue from "@/components/MainSection/MainSectionShowcasesCard.vue";
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
</script>
<template>
  <section id="showcases">
    <div class="section-wallpaper section-padding-8" id="showcases-wallpaper">
      <div class="section-content">
        <h2 id="showcases-link" class="showcases-title title-section">
          {{ loader.selectedLanguageData.sections.showcases.title }}
        </h2>
        <div class="content-area">
          <MainSectionShowcasesCardVue />
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
  min-height: 100%;
}

.showcase-card-img > img {
  max-width: 95%;
  min-height: 100%;
}

.showcase-card-txt {
  width: 90vw;
  height: 100%;
  padding: 0.75rem;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  color: var(--clr-base-white);
  justify-items: center;
}

.showcase-btn {
  margin: auto;
  width: 175px;
  text-align: center;
  font-weight: 600;
  padding: 0.3rem;
  color: var(--clr-base-link);
  background-color: var(--bg-clr-base-white);
  border-radius: var(--border-radius);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
}

.showcase-btn > a {
  text-decoration: none;
  font-size: 0.75rem;
}

.showcase-btn:hover {
  box-shadow: 2px 2px 15px rgba(35, 35, 35, 1);
}

@media (min-width: 720px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops  961 961 961 */
  .showcase-card {
    display: flex;
  }

  .showcase-card > div {
    max-width: 50%;
  }

  .showcase-card-img > img {
    max-width: 90%;
  }

  .showcase-card-txt {
    position: relative;
    height: 300px;
  }

  .showcase-btn {
    position: absolute;
    margin: 0;
    bottom: -1rem;
    left: 0;
  }
}
@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .showcase-card-img {
    padding-left: 10%;
  }
  .showcase-card-img > img {
    object-fit: fill;
    transform: translate(-35px, 0px);
  }

  .showcase-card-txt {
    display: flex;
    flex-direction: column;
  }

  .showcase-card-txt > p {
    max-width: 80%;
    margin-top: 0;
  }
}

@media (min-width: 1445px) {
  /* media query for ajusts in desktops */
  .showcase-card-img > img {
    max-width: 60%;
    float: right;
  }

  .showcase-card-txt > p {
    max-width: 70%;
  }
}

@media (min-width: 1600px) {
  /* media query for ajusts in desktops */
  .showcase-card-txt > p {
    max-width: 60%;
  }
}
</style>
