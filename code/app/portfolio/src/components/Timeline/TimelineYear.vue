<script setup lang="ts">
import { ref } from "vue";
import { useLoaderTmlStore } from "@/stores/loader_tml";
import TimelineYearLogic from "./TimelineYearLogic.vue";

// INTERFACE TXT
import interfaceTxtData from "@/data/timeline/data/interfaceTxt.json";

// STUDY: PORTUGUESE
import PT_EE_TML_2010 from "@/data/timeline/data/study/ee_tml_2010.json";
import PT_EE_TML_2011 from "@/data/timeline/data/study/ee_tml_2011.json";
import PT_EE_TML_2013 from "@/data/timeline/data/study/ee_tml_2013.json";
import PT_EE_TML_2016 from "@/data/timeline/data/study/ee_tml_2016.json";
import PT_EE_TML_2017 from "@/data/timeline/data/study/ee_tml_2017.json";
import PT_EE_TML_2019 from "@/data/timeline/data/study/ee_tml_2019.json";
import PT_EE_TML_2023 from "@/data/timeline/data/study/ee_tml_2023.json";

// WORK: PORTUGUESE
import PT_WE_TML_2001 from "@/data/timeline/data/work/we_tml_2001.json";
import PT_WE_TML_2007 from "@/data/timeline/data/work/we_tml_2007.json";
import PT_WE_TML_2012 from "@/data/timeline/data/work/we_tml_2012.json";
import PT_WE_TML_2013 from "@/data/timeline/data/work/we_tml_2013.json";
import PT_WE_TML_2016 from "@/data/timeline/data/work/we_tml_2016.json";
import PT_WE_TML_2017 from "@/data/timeline/data/work/we_tml_2017.json";
import PT_WE_TML_2020 from "@/data/timeline/data/work/we_tml_2020.json";

const props = defineProps({
  lang: String,
});

const loader = useLoaderTmlStore();

const lang = !props.lang ? loader.ENGLISH_ABB : props.lang.substring(0, 2);

function isPortugueseLanguage() {
  return lang === loader.PORTUGUESE_ABB;
}

let cards: object[];

let interfaceTxt = {
  txt_description: interfaceTxtData.en.txt_description,
  txt_filter: interfaceTxtData.en.txt_filter,
  txt_study: interfaceTxtData.en.txt_study,
  txt_work: interfaceTxtData.en.txt_work,
  btn_back: interfaceTxtData.en.btn_back,
  btn_filter: interfaceTxtData.en.btn_filter,
  checkbox_music: interfaceTxtData.en.checkbox_music,
  checkbox_psychology: interfaceTxtData.en.checkbox_psychology,
  checkbox_informatic: interfaceTxtData.en.checkbox_informatic,
  input_placeholder: interfaceTxtData.en.input_placeholder,
};
cards = loader.getAllCards(
  [PT_EE_TML_2010, PT_EE_TML_2011, PT_EE_TML_2013, PT_EE_TML_2016, PT_EE_TML_2017, PT_EE_TML_2019, PT_EE_TML_2023],
  [PT_WE_TML_2001, PT_WE_TML_2007, PT_WE_TML_2012, PT_WE_TML_2013, PT_WE_TML_2016, PT_WE_TML_2017, PT_WE_TML_2020]
);

if (isPortugueseLanguage()) {
  interfaceTxt = {
    txt_description: interfaceTxtData.pt.txt_description,
    txt_filter: interfaceTxtData.pt.txt_filter,
    txt_study: interfaceTxtData.pt.txt_study,
    txt_work: interfaceTxtData.pt.txt_work,
    btn_back: interfaceTxtData.pt.btn_back,
    btn_filter: interfaceTxtData.pt.btn_filter,
    checkbox_music: interfaceTxtData.pt.checkbox_music,
    checkbox_psychology: interfaceTxtData.pt.checkbox_psychology,
    checkbox_informatic: interfaceTxtData.pt.checkbox_informatic,
    input_placeholder: interfaceTxtData.pt.input_placeholder,
  };
  cards = loader.getAllCards(
    [PT_EE_TML_2010, PT_EE_TML_2011, PT_EE_TML_2013, PT_EE_TML_2016, PT_EE_TML_2017, PT_EE_TML_2019, PT_EE_TML_2023],
    [PT_WE_TML_2001, PT_WE_TML_2007, PT_WE_TML_2012, PT_WE_TML_2013, PT_WE_TML_2016, PT_WE_TML_2017, PT_WE_TML_2020]
  );
}

let filterYearsComponentKey = ref(0);
let filterYears = "";
let filterMusic = false;
let filterPsychology = false;
let filterInformatic = false;
let filterLanguage = false;

let filterCategory: object = {};

function filterAndReloadCardsComponent() {
  filterCategory = {
    filterMusic: filterMusic,
    filterPsychology: filterPsychology,
    filterInformatic: filterInformatic,
    filterLanguage: filterLanguage,
  };
  filterYearsComponentKey.value += 1;
}
</script>
<template>
  <div class="container">
    <br />
    <div class="timeline-filters">
      <span>
        <button type="button" class="btn btn-primarytimeline-btn">
          <a href="/" tag="button">{{ interfaceTxt.btn_back }}</a>
        </button>
      </span>
      <span style="margin-left: 20px">
        <input
          type="text"
          class="timeline-filters-input-filterYears"
          id="filterYearsInpur"
          :placeholder="interfaceTxt.input_placeholder"
          v-model="filterYears"
          v-on:keyup.enter="filterAndReloadCardsComponent()"
        />
        <button type="button" class="btn btn-primary timeline-btn" @click="filterAndReloadCardsComponent()">{{ interfaceTxt.btn_filter }}</button>
        <span class="timeline-infos">{{ interfaceTxt.txt_filter }}</span>
      </span>
      <br />
      <span style="margin-left: 20px">
        <span style="margin-left: 3.95em">
          <input class="form-check-input" type="checkbox" id="filterMusic" v-model="filterMusic" />
          <label class="form-check-label" for="filterMusic">{{ interfaceTxt.checkbox_music }}</label>
        </span>
        <span>
          <input class="form-check-input" type="checkbox" id="filterPsychology" v-model="filterPsychology" />
          <label class="form-check-label" for="filterPsychology">{{ interfaceTxt.checkbox_psychology }}</label>
        </span>
        <span>
          <input class="form-check-input" type="checkbox" id="filterInformatic" v-model="filterInformatic" />
          <label class="form-check-label" for="filterInformatic">{{ interfaceTxt.checkbox_informatic }}</label>
        </span>
      </span>
    </div>
    <br />
    <div class="timeline-infos-wrapper">
      <span> {{ interfaceTxt.txt_study }} </span>
      <span> {{ interfaceTxt.txt_work }} </span>
    </div>
    <br />
    <span><TimelineYearLogic :data="cards" :lang="lang" :filterYears="filterYears" :filterCategory="filterCategory" :key="filterYearsComponentKey" /></span>
  </div>
</template>
<style scoped>
.form-check-label {
  margin-left: 4px;
  margin-right: 7px;
}
.timeline-infos {
  margin-left: 30px;
}
.timeline-infos-wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
  font-size: large;
  font-weight: 600;
}
.timeline-filters-input-filterYears {
  margin: 0 6px 0 6px;
  width: 185px;
}
.timeline-filters {
  margin: 8px;
  padding: 10px 2em 5px 2em;
}
</style>
