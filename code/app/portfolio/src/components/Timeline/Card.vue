<script setup lang="ts">
const props = defineProps({ data: Object });

const STUDY_CARD = "Education Experience";
const WORK_CARD = "work experience";

const CARD_IS_ACTIVE_TXT = "Ver menos...";
const CARD_IS_INACTIVE_TXT = "Ver mais...";
const CARD_CLASS_TOGGLE_IS_ACTIVE = "toggle_card_inactive";

function isAStudyCard(cardType) {
  if (cardType.toLocaleLowerCase() === STUDY_CARD.toLocaleLowerCase()) {
    return true;
  }
}
function isAWorkCard(cardType) {
  if (cardType.toLocaleLowerCase() === WORK_CARD.toLocaleLowerCase()) {
    return true;
  }
}

function toggle_card_activity(id) {
  let card_txt = document.getElementById(id);
  let card_txt_ver_mais = document.getElementById(id + "_ver_mais");

  if (toggle_card_is_active) {
    card_txt.classList.add(CARD_CLASS_TOGGLE_IS_ACTIVE);
    card_txt_ver_mais.innerText = CARD_IS_INACTIVE_TXT;
    toggle_card_is_active = !toggle_card_is_active;
    return;
  }

  if (!toggle_card_is_active) {
    card_txt.classList.remove(CARD_CLASS_TOGGLE_IS_ACTIVE);
    card_txt_ver_mais.innerText = CARD_IS_ACTIVE_TXT;
    toggle_card_is_active = !toggle_card_is_active;
    return;
  }
}

let toggle_card_is_active = false;
let toggle_card_txt_links = false;
let toggle_card_txt_txt = false;
let toggle_card_txt_topics = true;
// var toggle_ = false;
// var toggle_ = false;
</script>
<template>
  <span v-if="data.isToDisplay">
    <span>
      <div
        class="timeline-container"
        :class="[
          isAStudyCard(data.type) ? 'left' : '',
          isAWorkCard(data.type) ? 'right' : '',
        ]"
      >
        <span v-if="data.isStartCard">
          <div class="timeline-container-content">
            <h5 class="display-none">{{ data.dataStart }}</h5>
            <span class="timeline-arrow"></span>
            <p class="timeline-containter-content-type">
              {{ data.txtStart }}
            </p>
            <p></p>
          </div>
        </span>
        <span v-else v-on:click="toggle_card_activity('card_' + data.id)">
          <div class="timeline-container-content">
            <h5 class="display-none">{{ data.dataStart }}</h5>
            <span class="timeline-arrow"></span>
            <p class="timeline-containter-content-type">
              {{ data.title }}
            </p>
            <p></p>
            <span class="timeline-containter-content-title"
              >{{ data.subTitle }} <br
            /></span>
            <span v-if="data.localParteA"> {{ data.localParteA }}<br /></span>
            <span v-if="data.localParteB"> {{ data.localParteB }}<br /></span>
            <span v-if="data.localParteC"> {{ data.localParteC }}<br /></span>
            <span v-bind:id="'card_' + data.id" class="toggle_card_inactive">
              <div
                :class="[
                  isAStudyCard(data.type)
                    ? 'time-line-content-more-description-left'
                    : '',
                  isAWorkCard(data.type)
                    ? 'time-line-content-more-description-left'
                    : '',
                ]"
              >
                <p>
                  <span v-if="data.txtFullText && toggle_card_txt_txt">
                    <span
                      :class="[
                        data._start_card
                          ? 'time-line-content-more-start'
                          : 'time-line-content-more',
                      ]"
                      >{{ data.txtFullText }}</span
                    ></span
                  >
                  <span v-if="data.txtTopics && toggle_card_txt_topics">
                    <ul>
                      <li v-for="task in data.txtTopics">
                        {{ task }}
                      </li>
                    </ul>
                  </span>
                  <span v-if="data.txtLinks && toggle_card_txt_links">
                    <ul>
                      <li v-for="link in data.txtLinks">
                        {{ link }}
                      </li>
                    </ul>
                  </span>
                </p>
              </div> </span
            ><br />
            <span
              class="toggle-card-txt-link"
              v-bind:id="'card_' + data.id + '_ver_mais'"
              ><a>{{ CARD_IS_INACTIVE_TXT }}</a></span
            >
          </div></span
        >
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
  /* font-weight: 600; */
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
</style>
