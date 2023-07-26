<script setup lang="ts">
import { useLoaderStore } from "@/stores/loader";
const loader = useLoaderStore();

const LINKEDIN_TXT = "LinkedIn";
const EMAIL_TXT = "e-mail";
const RESUME_TXT = "resume";

const PORTUGUESE = "Português";
const ENGLISH = "English";
const ITALIANO = "Italiano";

function checkLinks(str) {
  const linkedin_link = document.createElement("a");
  const email_link = document.createElement("a");
  const resume_link = document.createElement("a");
  if (str.includes("[linkedin]")) {
    linkedin_link.href = loader.selectedLanguageData.footer.linkedin_link;
    linkedin_link.text = "LinkedIn";
  }
  if (str.includes("[email]")) {
    email_link.href = loader.selectedLanguageData.footer.email_link;
    email_link.text = "e-mail";
  }
  if (str.includes("[resume]")) {
    email_link.href = loader.selectedLanguageData.footer.resume_link;
    switch (loader.selectedLanguage) {
      case PORTUGUESE:
        email_link.text = "currículum";
        break;
      case ENGLISH:
        email_link.text = "resume";
        break;
      case ITALIANO:
        email_link.text = "curriculum";
        break;
      default:
        email_link.text = "resume";
        break;
    }
    const span = document.createElement("span");
    span.textContent = str.slice(0, str.indexOf("[linkedin]"));
    span.append(linkedin_link);

    return span;
  }
}
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
            <div class="contact-card-img">
              <img src="@/assets/eumesmo.jpg" alt="" />
            </div>
            <div class="contact-card-txt">
              <h3 class="title-section-content title-section-content-contact">
                {{
                  loader.selectedLanguageData.sections.contact.card_farewell
                    .title
                }}
              </h3>
              <p class="">
                {{
                  loader.selectedLanguageData.sections.contact.card_farewell
                    .description
                }}
              </p>
              <p>
                {{
                  loader.selectedLanguageData.sections.contact.card_psychology
                    .description
                }}
                <a class="contact-card-link" href="">{{
                  loader.selectedLanguageData.sections.contact.card_psychology
                    .link_description
                }}</a>
              </p>
            </div>
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
  /* height: 100%; */
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

/* media query for landscap smarts and tablet */
@media (orientation: landscape) and (min-width: 640px) {
  .contact-card-img {
    max-width: 98%;
    margin: auto;
  }

  .contact-card-img > img {
    max-width: 40%;
  }
}

/* media query for landscap smarts  and tablet */
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

/* media query for landscap smarts  and tablet */
@media (min-width: 915px) {
  .contact-card {
  }
  /* .about-card-img {
    margin-top: 2%;
  }
  .about-card-img > img {
    max-width: 90%;
  } */
}

@media (min-width: 1024px) {
  .contact-card-img {
    transform: translate(-55px, -0px);
  }
  .contact-card-txt {
    transform: translate(-55px, 0px);
  }
}

/* media query for landscap smarts  and tablet */
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
  /* .about-card-img {
  }
  .about-card-img > img {
  } */
}

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
}

/* media query for ajusts in desktops */
@media (min-width: 1445px) {
}

/* media query for ajusts in desktops */
@media (min-width: 1600px) {
}
</style>
