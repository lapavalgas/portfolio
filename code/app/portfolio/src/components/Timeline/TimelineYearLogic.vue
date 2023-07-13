<script setup lang="ts">
import Card from "./Card.vue";

const props = defineProps({
  data: Object,
  filterYears: String,
  filterCategory: Array,
});

function startCardFirst(list: []) {
  for (const el of list) {
    if (!el.isEndCard && el.isStartCard) {
      const index = list.indexOf(el);
      list.splice(index, 1);
      list.push(el);
    }
  }
  return list;
}

let filterYears = props.filterYears;
let filterCategory = props.filterCategory;

function isAValidYear(year) {
  if (filterYears === undefined || filterYears === "") {
    return true;
  }
  let filterYearsList = filterYears
    .replaceAll(".", ";")
    .replaceAll("/", ";")
    .replaceAll("\\", ";")
    .replaceAll("|", ";")
    .replaceAll(" ", ";")
    .replaceAll("`", ";")
    .replaceAll("´", ";")
    .replaceAll("[", ";")
    .replaceAll("]", ";")
    .replaceAll("~", ";")
    .replaceAll("^", ";")
    .replaceAll(":", ";")
    .replaceAll("<", ";")
    .replaceAll(">", ";")
    .replaceAll(".", ";")
    .replaceAll("-", ";")
    .replaceAll("=", ";")
    .replaceAll(" ", ";")
    .replaceAll(";;", ";")
    .split(";");
  if (filterYearsList.length === 2) {
    filterYearsList.sort(
      (objA, objB) =>
        Number(objB.pointInTimeline) - Number(objA.pointInTimeline)
    );
    if (year >= filterYearsList[0] && year <= filterYearsList[1]) {
      return true;
    }
  }
  if (filterYearsList.indexOf(year) !== -1) {
    return true;
  }
}

function isAValidCategory(category) {
  if (category === "musica" && filterCategory.filterMusic) {
    return true;
  }
  if (category === "psicologia" && filterCategory.filterPsychology) {
    return true;
  }
  if (category === "informatica" && filterCategory.filterInformatic) {
    return true;
  }
  if (category === "letras" && filterCategory.filterLanguage) {
    return true;
  }
  if (
    !filterCategory.filterMusic &&
    !filterCategory.filterPsychology &&
    !filterCategory.filterInformatic &&
    !filterCategory.filterLanguage
  ) {
    return true;
  }
}

function isAValidCategoryList(categoryList) {
  if (typeof categoryList == "string") {
    return isAValidCategory(categoryList);
  }
  if (Array.isArray(categoryList)) {
    let is_valid = false;
    for (const category of categoryList) {
      is_valid = isAValidCategory(category);
      if (is_valid) {
        return true;
      }
    }
    return false;
  }
}

function isCurrentDate(card) {
  const date = new Date();
  date.setDate(2);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let cardYear = Number(card.year);
  let cardMonth = Number(card.month);
  if (year === cardYear && month === cardMonth) {
    return true;
  }
}
</script>
<template>
  <div class="container">
    <span v-for="year in data" :value="year" :key="year">
      <span v-if="isAValidYear(year.year) && !isCurrentDate(year)">
        <div class="timeline">
          <div class="timeline-year">
            <span>{{ year.month }} de {{ year.year }}</span>
          </div>
          <span
            v-for="card in startCardFirst(year.cards)"
            :value="card"
            :key="card"
          >
            <span v-if="isAValidCategoryList(card.category)">
              <Card :data="card" />
            </span>
          </span>
        </div>
      </span>
    </span>
  </div>
</template>
<style>
.timeline-filters-input-filterYears {
  width: 100%;
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
  /* --background: #FAFEFF; */

  --background-timeline: rgb(180, 180, 180);
  --background-timeline-container: rgb(251, 251, 251);
  --background-timeline-container-arrow: rgb(251, 251, 251);
  --shadow-timeline-container: rgba(230, 230, 230, 0.685);
  --shadow-hover-timeline-container: rgba(200, 200, 200, 0.765);

  --border-timeline-content-more: rgba(230, 230, 230, 0.502);
}

/* body {
  background-color: var(--background);
} */

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

/* ARROW TYPE LINE */

.left .timeline-container-content .timeline-arrow::before {
  content: " ";
  position: absolute;
  top: 31px;
  margin-left: 30px;
  background-color: var(--background-timeline);
  width: 20px;
  height: 1px;
}

/* ARROW TYPE TRIANGLE */

/* .left .timeline-container-content .timeline-arrow::before {
    content: " ";
    position: absolute;
    top: 21px;
    margin-left: 30px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid var(--background-timeline-container-arrow);
} */

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

/* ARROW TYPE LINE */

.right .timeline-container-content .timeline-arrow::before {
  content: " ";
  position: absolute;
  top: 32px;
  margin-left: -55px;
  background-color: var(--background-timeline);
  width: 23px;
  height: 1px;
}

/* ARROW TYPE TRIANGLE */

/* .right .timeline-container-content .timeline-arrow::before {
    content: " ";
    position: absolute;
    top: 21px;
    margin-left: -40px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid var(--background-timeline-container-arrow);
} */

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

  /* ARROW TYPE LINE */

  .left .timeline-container-content .timeline-arrow::before {
    margin-left: -23px;
  }

  /* ARROW TYPE TRIANGLE */

  /*
    .left .timeline-container-content .timeline-arrow::before {
        border-left: 0px;
        margin-left: -15px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid var(--background-timeline-container-arrow);
    } */

  /* ARROW TYPE LINE */

  .right .timeline-container-content .timeline-arrow::before {
    margin-left: -23px;
  }

  /* ARROW TYPE TRIANGLE */

  /*
    .right .timeline-container-content .timeline-arrow::before {
        margin-left: -15px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid var(--background-timeline-container-arrow);
    } */

  .left .timeline-container-content .timeline-arrow::after {
    margin-left: -25px;
  }

  .right .timeline-container-content .timeline-arrow::after {
    margin-left: -25px;
  }
}
</style>
