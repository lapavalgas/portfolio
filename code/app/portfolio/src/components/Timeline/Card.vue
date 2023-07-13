<script setup lang="ts">
const props = defineProps({ data: Object });

const STUDY_CARD = "Education Experience";
const WORK_CARD = "work experience";

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

var toggle_card_txt_links = false;
var toggle_card_txt_txt = false;
var toggle_card_txt_topics = false;
// var toggle_ = false;
// var toggle_ = false;
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
        <span v-else>
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
            <span>
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
                  <span v-if="data.txtFullText">
                    <span
                      :class="[
                        data._start_card
                          ? 'time-line-content-more-start'
                          : 'time-line-content-more',
                      ]"
                      >{{ data.txtFullText }}</span
                    ></span
                  >
                  <span v-if="data.txtTopics">
                    <ul>
                      <li v-for="task in data.txtTopics">
                        {{ task }}
                      </li>
                    </ul>
                  </span>
                  <span v-if="data.txtLinks">
                    <ul>
                      <li v-for="link in data.txtLinks">
                        {{ link }}
                      </li>
                    </ul>
                  </span>
                </p>
              </div>
            </span>
          </div></span
        >
      </div>
      <div class="timeline-container none"></div>
    </span>
  </span>
</template>
<style scoped>
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
