<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();
</script>
<template>
  <section id="contact" class="">
    <div class="section-wallpaper section-padding-8" id="contact-wallpaper">
      <div class="section-content">
        <h2 id="contact-link" class="contact-title title-section">
          {{ loader.selectedLanguageData.sections.contact.title }}
        </h2>
        <div class="content-area">
          <div class="contact-card">
            <p
              v-for="p in loader.selectedLanguageData.sections.contact.card
                .descriptions"
              :value="p"
            >
              {{ p }}
            </p>
          </div>
          <div id="contact-area-id"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
/***-------------------------------------------------------
        CONTACT
-------------------------------------------------------***/
#contact {
  height: 100%;
  color: var(--clr-base-white);
}

#contact-wallpaper {
  height: 100%;
  background: var(--bg-clr-contact);
}

/* media query for landscap and tablet */
@media (orientation: landscape) and (min-width: 640px),
  (min-width: 768px) and (max-width: 1024px) {
}

/* media query for ajusts in this component  */
@media (orientation: portrait) and (min-width: 768px) and (max-width: 1024px) {
}

/* media query for ajusts in landscape and tablet */
@media (orientation: landscape) and (min-width: 844px) and (max-width: 968px),
  (min-width: 768px) and (max-width: 1024px) {
}

/* media query for desktops */
@media (min-width: 1025px) and (min-height: 625px) {
  #contact {
    height: 100vh;
  }

  .contact-card {
    width: 100%;
  }
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
}
</style>
