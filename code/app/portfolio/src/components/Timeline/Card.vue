<script setup lang="ts">
import { useLoaderTmlStore } from "@/stores/loader_tml";
import interfaceTxtData from "@/data/timeline/data/interfaceTxt.json";

const props = defineProps({ data: Object, lang: String });

const loader = useLoaderTmlStore();

const lang = !props.lang ? loader.ENGLISH_ABB : props.lang.substring(0, 2);

function isPortugueseLanguage() {
  return lang === loader.PORTUGUESE_ABB;
}

const CSS_CLASS_TOGGLE = "toggle_card_inactive";

const CARD_TYPES = {
  STUDY_CARD: "Education Experience",
  WORK_CARD: "work experience",
};

let interfaceTxt = {
  CARD_IS_INACTIVE_TXT: interfaceTxtData.en.txt_viewMore,
  CARD_IS_ACTIVE_TXT: interfaceTxtData.en.txt_seeLess,
};

if (isPortugueseLanguage()) {
  interfaceTxt = {
    CARD_IS_INACTIVE_TXT: interfaceTxtData.pt.txt_viewMore,
    CARD_IS_ACTIVE_TXT: interfaceTxtData.pt.txt_seeLess,
  };
}

let toggle_card_is_active = false;
let toggle_card_txt_links = false;
let toggle_card_txt_txt = false;
let toggle_card_txt_topics = true;

function isAStudyCard(cardType: string) {
  if (cardType.toLocaleLowerCase() === CARD_TYPES.STUDY_CARD.toLocaleLowerCase()) {
    return true;
  }
}

function isAWorkCard(cardType: string) {
  if (cardType.toLocaleLowerCase() === CARD_TYPES.WORK_CARD.toLocaleLowerCase()) {
    return true;
  }
}

function toggle_card_activity(id: string) {
  let card_txt = document.getElementById(id);
  let card_txt_ver_mais = document.getElementById(id + "_ver_mais");

  if (card_txt && card_txt_ver_mais && toggle_card_is_active) {
    card_txt.classList.add(CSS_CLASS_TOGGLE);
    card_txt_ver_mais.innerText = interfaceTxt.CARD_IS_INACTIVE_TXT;
    toggle_card_is_active = !toggle_card_is_active;
    return;
  }

  if (card_txt && card_txt_ver_mais && !toggle_card_is_active) {
    card_txt.classList.remove(CSS_CLASS_TOGGLE);
    card_txt_ver_mais.innerText = interfaceTxt.CARD_IS_ACTIVE_TXT;
    toggle_card_is_active = !toggle_card_is_active;
    return;
  }
}
</script>
<template>
  <span v-if="data && data.isToDisplay">
    <span>
      <div class="timeline-container" :class="[isAStudyCard(data.type) ? 'left' : '', isAWorkCard(data.type) ? 'right' : '']">
        <span v-if="data.isStartCard">
          <div class="timeline-container-content">
            <h5 class="display-none">{{ data.dataStart }}</h5>
            <span class="timeline-arrow"></span>
            <p class="timeline-containter-content-type">{{ data.txtStart }}</p>
            <p></p>
          </div>
        </span>
        <span v-else v-on:click="toggle_card_activity('card_' + data.id)">
          <div class="timeline-container-content">
            <h5 class="display-none">{{ data.dataStart }}</h5>
            <span class="timeline-arrow"></span>
            <p class="timeline-containter-content-type">{{ data.title }}</p>
            <p></p>
            <span class="timeline-containter-content-title">{{ data.subTitle }} <br /></span>
            <span v-if="data.localParteA"> {{ data.localParteA }}<br /></span>
            <span v-if="data.localParteB"> {{ data.localParteB }}<br /></span>
            <span v-if="data.localParteC"> {{ data.localParteC }}<br /></span>
            <span v-bind:id="'card_' + data.id" :class="CSS_CLASS_TOGGLE">
              <div
                :class="[
                  isAStudyCard(data.type) ? 'time-line-content-more-description-left' : '',
                  isAWorkCard(data.type) ? 'time-line-content-more-description-left' : '',
                ]"
              >
                <p>
                  <span v-if="data.txtFullText && toggle_card_txt_txt">
                    <span :class="[data._start_card ? 'time-line-content-more-start' : 'time-line-content-more']">
                      {{ data.txtFullText }}
                    </span>
                  </span>
                  <span v-if="data.txtTopics && toggle_card_txt_topics">
                    <ul>
                      <li v-for="task in data.txtTopics">{{ task }}</li>
                    </ul>
                  </span>
                  <span v-if="data.txtLinks && toggle_card_txt_links">
                    <ul>
                      <li v-for="link in data.txtLinks">{{ link }}</li>
                    </ul>
                  </span>
                </p>
              </div>
            </span>
            <br />
            <span class="toggle-card-txt-link" v-bind:id="'card_' + data.id + '_ver_mais'"
              ><a>{{ interfaceTxt.CARD_IS_INACTIVE_TXT }}</a></span
            >
          </div>
        </span>
      </div>
      <div class="timeline-container none"></div>
    </span>
  </span>
</template>
<style scoped>
.toggle-card-txt-link {
  color: blue;
  text-decoration: underline;
}
.toggle_card_inactive {
  display: none;
}
.time-line-content-more-start {
  font-size: 1em;
}
.time-line-content-more {
  font-size: 0.75em;
}
.time-line-content-more-description-right {
  text-align: right;
}
.time-line-content-more-description-left {
  text-align: left;
}
.timeline-container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}
.left {
  left: 0;
  margin-right: 50%;
  padding-right: 1.5rem;
  padding-left: 0;
  text-align: right;
}
.right {
  left: 50%;
  padding-left: 1.5rem;
  padding-right: 0;
  text-align: left;
}
.none {
  height: 14px;
}
.right::after {
  left: -16px;
}
.timeline-container-content {
  padding: 20px 30px;
  background-color: var(--background-timeline-container);
  border: 1px solid var(--background-timeline-container);
  position: relative;
  border-radius: 14px;
  box-shadow: 0px 0px 10px var(--shadow-timeline-container);
  width: 513px;
}
.timeline-container-content:hover {
  box-shadow: 0px 0px 12px var(--shadow-hover-timeline-container);
}
.left .timeline-container-content .timeline-arrow::before {
  content: " ";
  position: absolute;
  top: 31px;
  margin-left: 30px;
  background-color: var(--background-timeline);
  width: 20px;
  height: 1px;
}
.left .timeline-container-content .timeline-arrow::after {
  content: " ";
  position: absolute;
  top: 29px;
  margin-left: 50px;
  background-color: var(--background-timeline);
  height: 5px;
  width: 5px;
  border-radius: 10px;
  border: 1px solid var(--background-timeline);
}
.right .timeline-container-content .timeline-arrow::before {
  content: " ";
  position: absolute;
  top: 32px;
  margin-left: -55px;
  background-color: var(--background-timeline);
  width: 23px;
  height: 1px;
}
.right .timeline-container-content .timeline-arrow::after {
  content: " ";
  position: absolute;
  top: 29px;
  margin-left: -60px;
  background-color: var(--background-timeline);
  height: 5px;
  width: 5px;
  border-radius: 10px;
  border: 1px solid var(--background-timeline);
}
.text-left {
  text-align: left;
}
.display-none {
  display: none;
}
.timeline-containter-content-type {
  font-weight: 600;
  border-bottom: 1px solid var(--shadow-timeline-container);
}
.timeline-containter-content-title {
  font-weight: 600;
}
.time-line-content-more {
  text-align: justify;
}
@media screen and (max-width: 600px) {
  .timeline-container {
    width: 100%;
    padding-left: 45px;
    padding-right: 10px;
  }
  .left {
    text-align: left;
  }
  .right {
    left: 0%;
  }
  .timeline-container-content {
    padding: 5px;
  }
  .left .timeline-container-content .timeline-arrow::before {
    margin-left: -23px;
  }
  .right .timeline-container-content .timeline-arrow::before {
    margin-left: -23px;
  }
  .left .timeline-container-content .timeline-arrow::after {
    margin-left: -25px;
  }
  .right .timeline-container-content .timeline-arrow::after {
    margin-left: -25px;
  }
}
</style>
