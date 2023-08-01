<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";

const loader = useLoaderStore();

function getCards() {
  return loader.showcasesInterface.cards;
}
function getBtnMoreTxt() {
  return loader.showcasesInterface.btn_more;
}
</script>
<template>
  <div class="showcases-card">
    <div class="showcases-card-js-flickity js-flickity main-carousel">
      <div class="showcase-card" v-for="card in getCards()" :key="card.id">
        <div class="showcase-card-img"><img :src="card.img" :alt="card.img_alt" /></div>
        <div class="showcase-card-txt">
          <h3 class="title-section-content title-section-content-showcases">{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <div target="_blank" class="showcase-btn">
            <a target="_blank" :href="card.link"> {{ getBtnMoreTxt() }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
  .showcase-card-img > img {
    max-width: 60%;
    float: right;
  }
  .showcase-card-txt > p {
    max-width: 70%;
  }
}
@media (min-width: 1600px) {
  .showcase-card-txt > p {
    max-width: 55%;
  }
}
</style>
