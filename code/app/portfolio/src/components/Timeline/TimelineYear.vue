<script setup lang="ts">
import TimelineYearLogic from "./TimelineYearLogic.vue";

import { useLoaderTmlStore } from "@/stores/loader_tml";
import { ref } from "vue";

// STUDY
import PT_EE_TML_2010 from "@/data/timeline/data/study/ee_tml_2010.json";
import PT_EE_TML_2011 from "@/data/timeline/data/study/ee_tml_2011.json";
import PT_EE_TML_2013 from "@/data/timeline/data/study/ee_tml_2013.json";
import PT_EE_TML_2016 from "@/data/timeline/data/study/ee_tml_2016.json";
import PT_EE_TML_2017 from "@/data/timeline/data/study/ee_tml_2017.json";
import PT_EE_TML_2019 from "@/data/timeline/data/study/ee_tml_2019.json";
import PT_EE_TML_2023 from "@/data/timeline/data/study/ee_tml_2023.json";

// WORK
import PT_WE_TML_2001 from "@/data/timeline/data/work/we_tml_2001.json";
import PT_WE_TML_2007 from "@/data/timeline/data/work/we_tml_2007.json";
import PT_WE_TML_2012 from "@/data/timeline/data/work/we_tml_2012.json";
import PT_WE_TML_2013 from "@/data/timeline/data/work/we_tml_2013.json";
import PT_WE_TML_2016 from "@/data/timeline/data/work/we_tml_2016.json";
import PT_WE_TML_2017 from "@/data/timeline/data/work/we_tml_2017.json";
import PT_WE_TML_2020 from "@/data/timeline/data/work/we_tml_2020.json";

const props = defineProps({
  lang: Object,
});

const lang = props.lang.substring(0, 2);
const loader = useLoaderTmlStore();

let interfaceTxt = {
  btn_back: "Back",
  btn_filter: "Filter",
  checkbox_music: "Music",
  checkbox_psychology: "Psychology",
  checkbox_informatic: "Informatics",
  txt_filter:
    "you can filter by year (eg: 2012), by series of years (2012; 2016; 2019) or by a range (2017-2023).",
  txt_study: "Academic",
  txt_work: "Work",
};
let cards = loader.getAllCards(
  [
    PT_EE_TML_2010,
    PT_EE_TML_2011,
    PT_EE_TML_2013,
    PT_EE_TML_2016,
    PT_EE_TML_2017,
    PT_EE_TML_2019,
    PT_EE_TML_2023,
  ],
  [
    PT_WE_TML_2001,
    PT_WE_TML_2007,
    PT_WE_TML_2012,
    PT_WE_TML_2013,
    PT_WE_TML_2016,
    PT_WE_TML_2017,
    PT_WE_TML_2020,
  ]
);
switch (lang) {
  case "pt":
    interfaceTxt = {
      btn_back: "Voltar",
      btn_filter: "Filtrar",
      checkbox_music: "Música",
      checkbox_psychology: "Psicologis",
      checkbox_informatic: "Informática",
      txt_filter:
        "você pode filtrar por ano (por exemplo: 2012), por série de anos (2012; 2016; 2019) ou por um range(2017-2023).",
      txt_study: "Estudos",
      txt_work: "Trabalho",
    };
    cards = loader.getAllCards(
      [
        PT_EE_TML_2010,
        PT_EE_TML_2011,
        PT_EE_TML_2013,
        PT_EE_TML_2016,
        PT_EE_TML_2017,
        PT_EE_TML_2019,
        PT_EE_TML_2023,
      ],
      [
        PT_WE_TML_2001,
        PT_WE_TML_2007,
        PT_WE_TML_2012,
        PT_WE_TML_2013,
        PT_WE_TML_2016,
        PT_WE_TML_2017,
        PT_WE_TML_2020,
      ]
    );
    break;
  default:
    break;
}

let filterYearsComponentKey = ref(0);

let filterYears = "";

let filterMusic = false;
let filterPsychology = false;
let filterInformatic = false;
let filterLanguage = false;

let filterCategory = {};

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
        </button></span
      >
      <span style="margin-left: 20px">
        <input
          type="text"
          class="timeline-filters-input-filterYears"
          id="filterYearsInpur"
          aria-describedby="filterYears"
          placeholder="filter by year"
          v-model="filterYears"
          v-on:keyup.enter="filterAndReloadCardsComponent"
        />
        <button
          type="button"
          class="btn btn-primary timeline-btn"
          @click="filterAndReloadCardsComponent"
        >
          {{ interfaceTxt.btn_filter }}
        </button>
        <span class="timeline-infos">{{ interfaceTxt.txt_filter }}</span>
      </span>
      <br />
      <span style="margin-left: 20px">
        <span style="margin-left: 3.95em">
          <input
            class="form-check-input"
            type="checkbox"
            :value="filterMusic"
            id="filterMusic"
            v-model="filterMusic"
          />
          <label class="form-check-label" for="filterMusic">
            {{ interfaceTxt.checkbox_music }}
          </label>
        </span>
        <span>
          <input
            class="form-check-input"
            type="checkbox"
            :value="filterPsychology"
            id="filterPsychology"
            v-model="filterPsychology"
          />
          <label class="form-check-label" for="filterPsychology">
            {{ interfaceTxt.checkbox_psychology }}
          </label>
        </span>
        <span>
          <input
            class="form-check-input"
            type="checkbox"
            :value="filterInformatic"
            id="filterInformatic"
            v-model="filterInformatic"
          />
          <label class="form-check-label" for="filterInformatic">
            {{ interfaceTxt.checkbox_informatic }}
          </label>
        </span>
      </span>
    </div>
    <br />
    <div class="timeline-infos-wrapper">
      <span> {{ interfaceTxt.txt_study }} </span>
      <span> {{ interfaceTxt.txt_work }} </span>
    </div>
    <br />
    <span>
      <TimelineYearLogic
        :data="cards"
        :filterYears="filterYears"
        :filterCategory="filterCategory"
        :key="filterYearsComponentKey"
      />
    </span>
  </div>
</template>
<style>
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
.filterYears {
  width: 100%;
}
:root {
  --background: white;

  --background-timeline: rgb(180, 180, 180);
  --background-timeline-container: rgb(251, 251, 251);
  --background-timeline-container-arrow: rgb(251, 251, 251);
  --shadow-timeline-container: rgba(230, 230, 230, 0.685);
  --shadow-hover-timeline-container: rgba(200, 200, 200, 0.765);

  --border-timeline-content-more: rgba(230, 230, 230, 0.502);
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline-year {
  width: 100%;
  height: 45px;
  text-align: center;
  font-weight: 600;
}

.timeline-year > span {
  padding: 1%;
  background-color: var(--background);
  z-index: 1;
}

.timeline::after {
  content: "";
  position: absolute;
  width: 1px;
  background-color: var(--background-timeline);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  z-index: -1;
  box-shadow: 4px 4px 10px var(--shadow-timeline-container);
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

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  .timeline-year {
    text-align: left;
  }

  .timeline-year > span {
    margin-left: 10px;
  }

  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .timeline-container {
    width: 100%;
    padding-left: 45px;
    padding-right: 10px;
  }

  .left {
    text-align: left;
  }

  /* Make all right containers behave like the left ones */
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
