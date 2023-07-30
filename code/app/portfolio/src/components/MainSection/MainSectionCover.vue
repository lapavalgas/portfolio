<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";

const loader = useLoaderStore();

function getName() {
  return loader.coverInterface.name;
}

function getProfession() {
  return loader.coverInterface.profession;
}
</script>
<template>
  <section id="cover-link">
    <div class="section-wallpaper" id="cover-wallpaper">
      <div class="section-content">
        <div class="cover-content-area">
          <div class="cover-card">
            <h1 class="cover-card-name">{{ getName() }}</h1>
            <p class="cover-card-profession">{{ getProfession() }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
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
@media (orientation: landscape) and (min-width: 640px), (min-width: 768px) and (max-width: 1024px) {
  .cover-card-name {
    font-size: 7vw;
  }
  .cover-card-profession {
    letter-spacing: 0.2rem;
    font-size: 3vw;
  }
}
@media (min-width: 1025px) and (min-height: 625px) {
  .cover-card-name {
    font-size: 5vw;
  }
  .cover-card-profession {
    margin-top: 8rem;
    letter-spacing: 0.2rem;
    font-size: 1.5vw;
  }
}
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
