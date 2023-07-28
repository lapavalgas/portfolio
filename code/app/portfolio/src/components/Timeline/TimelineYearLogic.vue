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

function getMonthInFull(month) {
  if (month === "01") {
    return "Janeiro";
  }
  if (month === "02") {
    return "Fevereiro";
  }
  if (month === "03") {
    return "Marco";
  }
  if (month === "04") {
    return "Abril";
  }
  if (month === "05") {
    return "Maio";
  }
  if (month === "06") {
    return "Junho";
  }
  if (month === "07") {
    return "Julho";
  }
  if (month === "08") {
    return "Agosto";
  }
  if (month === "09") {
    return "Setembro";
  }
  if (month === "10") {
    return "Outubro";
  }
  if (month === "11") {
    return "Novembro";
  }
  if (month === "12") {
    return "Dezembro";
  }
}

// let newYearControl = [];
// function isNewYear(cardYear) {
//   for (const yearControl of newYearControl) {
//     if (yearControl === cardYear) {
//       return false;
//     }
//   }
//   newYearControl.push(cardYear);
//   return true;
// this not work properly because the html is rendering from top to botton
// is necessary here control the total of a cards by year and rendering this in the last one;
// will be very easy if this logic came from the service context by a boolean
// }
</script>
<template>
  <div class="container">
    <span v-for="year in data" :value="year" :key="year">
      <span v-if="isAValidYear(year.year) && !isCurrentDate(year)">
        <div class="timeline">
          <span
            v-for="card in startCardFirst(year.cards)"
            :value="card"
            :key="card"
          >
            <span v-if="isAValidCategoryList(card.category)">
              <Card :data="card" />
            </span>
          </span>
          <div class="timeline-year">
            <span>{{ getMonthInFull(year.month) }} de {{ year.year }}</span>
          </div>
        </div>
      </span>
    </span>
  </div>
</template>
