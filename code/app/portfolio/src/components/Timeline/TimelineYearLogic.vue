<script setup lang="ts">
import { useLoaderTmlStore } from "@/stores/loader_tml";
import Card from "./Card.vue";

const props = defineProps({
  data: Object,
  lang: String,
  filterYears: String,
  filterCategory: Object,
});

const loader = useLoaderTmlStore();

const lang = !props.lang ? loader.ENGLISH_ABB : props.lang.substring(0, 2);

const filterYears = !props.filterYears ? "" : props.filterYears;

const filterCategory = !props.filterCategory ? {} : props.filterCategory;

const categoryFilters: Record<string, string> = {
  musica: "filterMusic",
  psicologia: "filterPsychology",
  informatica: "filterInformatic",
  letras: "filterLanguage",
};
interface Card {
  isEndCard: boolean;
  isStartCard: boolean;
  category: string;
  id: string;
}
function startCardFirst(list: Card[]) {
  for (const el of list) {
    if (!el.isEndCard && el.isStartCard) {
      const index = list.indexOf(el);
      list.splice(index, 1);
      list.push(el);
    }
  }
  return list;
}
function cardYearIsAValidFilteredYear(cardYear: string) {
  if (!filterYears || filterYears.trim() === "") {
    return true;
  }
  // check if it is a range of years and validate the cards
  let filterYearsList = filterYears.trim().split("-");
  if (filterYearsList.length === 2) {
    filterYearsList.sort((objA, objB) => Number(objB) - Number(objA));
    if (cardYear <= filterYearsList[0] && cardYear >= filterYearsList[1]) {
      return true;
    }
  }
  // if not, separate the years and validate the cards
  filterYearsList = filterYears
    .replace(/[./\\| `´\[\]~^:<>.\-=;]+/g, ";")
    .split(";")
    .filter((e) => e !== "");

  if (filterYearsList.indexOf(cardYear) !== -1) {
    return true;
  }
}
function cardDateIsCurrentDate(card: Record<string, string>) {
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
function isAValidCategory(cardCategory: string) {
  // checks if filters are applied, otherwise it allows access to all categories
  if (!Object.values(filterCategory).some(Boolean)) {
    return true;
  }
  // checks if the cardcategory is valid
  if (categoryFilters[cardCategory] && filterCategory[categoryFilters[cardCategory]]) {
    return true;
  }
  return false;
}
function cardCategoryIsAValidFilteredCategory(categoryList: string | string[]) {
  if (typeof categoryList === "string") {
    return isAValidCategory(categoryList);
  }
  if (Array.isArray(categoryList)) {
    return categoryList.some(isAValidCategory);
  }
  return false;
}
function isPortugueseLanguage() {
  return lang === loader.PORTUGUESE_ABB;
}
type MonthNames = {
  en: string;
  pt: string;
};
type MonthsMap = {
  [month: string]: MonthNames;
};
function getMonthInFull(month: string) {
  const months: MonthsMap = {
    "01": { en: "January", pt: "Janeiro" },
    "02": { en: "February", pt: "Fevereiro" },
    "03": { en: "March", pt: "Março" },
    "04": { en: "April", pt: "Abril" },
    "05": { en: "May", pt: "Maio" },
    "06": { en: "June", pt: "Junho" },
    "07": { en: "July", pt: "Julho" },
    "08": { en: "August", pt: "Agosto" },
    "09": { en: "September", pt: "Setembro" },
    "10": { en: "October", pt: "Outubro" },
    "11": { en: "November", pt: "Novembro" },
    "12": { en: "December", pt: "Dezembro" },
  };
  const language = isPortugueseLanguage() ? "pt" : "en";
  return months[month]?.[language] || "Invalid Month";
}
</script>
<template>
  <div class="container">
    <span v-for="year in data" :key="year">
      <span v-if="cardYearIsAValidFilteredYear(year.year) && !cardDateIsCurrentDate(year)">
        <div class="timeline">
          <span v-for="card in startCardFirst(year.cards)" :key="card.id">
            <span v-if="cardCategoryIsAValidFilteredCategory(card.category)">
              <Card :card="card" :lang="lang" />
            </span>
          </span>
          <div class="timeline-year">
            <span v-if="isPortugueseLanguage()">{{ getMonthInFull(year.month) }} de {{ year.year }}</span>
            <span v-else>{{ getMonthInFull(year.month) }}, {{ year.year }}</span>
          </div>
        </div>
      </span>
    </span>
  </div>
</template>
<style scoped>
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
@media screen and (max-width: 600px) {
  .timeline-year {
    text-align: left;
  }
  .timeline-year > span {
    margin-left: 10px;
  }
  .timeline::after {
    left: 31px;
  }
}
</style>
