<script setup lang="ts">
import TimelineCareerCard from "./TimelineCareerCard.vue";
import TimelineEducationCard from "./TimelineEducationCard.vue";
import TimelineCertificatesCardVue from "./TimelineCertificatesCard.vue";

import metadata from "@/data/timeline/portuguese.json";

const EDUCATION = "Educação";
const CERTIFICATION = "Certificação";
const CAREER = "Carreira";

const JAN = "Janeiro";
const FEV = "Fevereiro";
const MAR = "Março";
const APR = "Abril";
const MAY = "Maio";
const JUN = "Junho";
const JUL = "Julho";
const AUG = "Agosto";
const SEP = "Setembro";
const OCT = "Outubro";
const NOV = "Novembro";
const DEC = "Dezembro";

const MONTHS: Record<string, string> = {
  "01": JAN,
  "02": FEV,
  "03": MAR,
  "04": APR,
  "05": MAY,
  "06": JUN,
  "07": JUL,
  "08": AUG,
  "09": SEP,
  "10": OCT,
  "11": NOV,
  "12": DEC,
};
function getFullMonth(date: string) {
  return MONTHS[date.substring(5, 7)];
}

function getFullLocal(city: string, state: string, country: string) {
  return city + ", " + state + " - " + country;
}

function getFullInstitutionName(institution: string, abbreviation: string) {
  return institution + " / " + abbreviation;
}

function getRandomId(): Number {
  const LONGNUMBER = 1000000000000000000000000;
  const SMALLNUMBER = 5;
  const ID = (Math.random() * LONGNUMBER) | SMALLNUMBER;
  return ID <= 0 ? getRandomId() : ID;
}

function metadataProcessing() {
  const educationCards = metadata.timeline
    .map((element) => {
      if (
        // element.display &&
        element.type &&
        element.type.includes(EDUCATION)
      ) {
        return {
          id: getRandomId(),
          display: element.display,
          type: EDUCATION,
          date: element.date_start,
          year: element.year,
          month: getFullMonth(element.date_start),
          institution: getFullInstitutionName(
            element.institution_name,
            element.abbreviation_name
          ),
          local: getFullLocal(element.city, element.state, element.country),
          title: element.course_title,
          level: element.course_level,
          description: element.description,
          link: element.link,
        };
      }
    })
    .filter((element) => element !== undefined);

  const certificationCards = metadata.timeline
    .map((element) => {
      if (
        // element.certification.display &&
        element.certification
      ) {
        return {
          id: getRandomId(),
          display: element.certification.display,
          type: CERTIFICATION,
          date: element.certification.date_start,
          year: element.certification.year,
          month: getFullMonth(element.certification.date_start),
          course: element.course_title,
          institution: getFullInstitutionName(
            element.institution_name,
            element.abbreviation_name
          ),
          local: getFullLocal(element.city, element.state, element.country),
          title: "Conclusão do " + element.certification.certification_title,
          description: element.certification.certification_description,
          link: element.certification.link,
        };
      }
    })
    .filter((element) => element !== undefined);

  const careerCards = metadata.timeline
    .map((element) => {
      if (
        element.type &&
        // element.display &&
        element.type.includes(CAREER)
      ) {
        return {
          id: getRandomId(),
          display: element.display,
          type: CAREER,
          date: element.date_start,
          year: element.year,
          month: getFullMonth(element.date_start),
          institution: getFullInstitutionName(
            element.institution_name,
            element.abbreviation_name
          ),
          local: getFullLocal(element.city, element.state, element.country),
          title: element.job_title,
          level: element.job_level,
          description: element.description,
          link: element.link,
        };
      }
    })
    .filter((element) => element !== undefined);

  const cards = new Array()
    .concat(educationCards)
    .concat(certificationCards)
    .concat(careerCards)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  let listControl: string[] = [];
  const years = cards
    .map((t) => {
      const newObj = {
        year: t.year,
        month: t.month,
      };
      if (!listControl.includes(JSON.stringify(newObj))) {
        listControl.push(JSON.stringify(newObj));
        return newObj;
      }
      return undefined;
    })
    .filter((value) => {
      return value !== undefined;
    });

  return years.map((element_year) => {
    {
      return {
        year: element_year.year,
        month: element_year.month,
        cards: cards.filter(
          (element_card) =>
            element_card.year === element_year.year &&
            element_card.month === element_year.month
        ),
      };
    }
  });
}
const years = metadataProcessing();
// console.log(years);
</script>
<template>
  <div class="container">
    <span v-for="year in years" :value="year">
      <div class="timeline">
        <div class="timeline-year">
          <span>{{ year.month }} de {{ year.year }}</span>
        </div>
        <span v-for="card in year.cards" :valu="card">
          <span v-if="card.type === EDUCATION">
            <TimelineEducationCard :data="card" />
          </span>
          <span v-if="card.type === CERTIFICATION">
            <TimelineCertificatesCardVue :data="card" />
          </span>
          <span v-if="card.type === CAREER">
            <TimelineCareerCard :data="card" />
          </span>
        </span>
      </div>
    </span>
  </div>
</template>
<style>
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
