<script setup lang="ts">
const props = defineProps({ data: Object });
</script>
<template>
  <div class="timeline-container left">
    <div class="timeline-container-content">
      <h5 class="display-none">{{ data.date }}</h5>
      <span class="timeline-arrow"></span>
      <p class="timeline-containter-content-type">{{ data.type }}</p>
      <p></p>
      <p>
        <span class="timeline-containter-content-title">{{ data.title }}</span>
        <br />{{ data.institution }}
      </p>
      <!-- <p><a href="">Ver mais...</a></p> -->
      <div class="time-line-content-more">
        <p style="text-align: right">
          <a :href="data.link">{{ data.link }}</a>
        </p>
        <span v-if="data.description.length >= 0">
          <div
            class="time-line-content-more time-line-content-more-description-right"
          >
            <p style="text-align: right">
              {{ data.description }}
            </p>
          </div>
        </span>
        <span v-else></span>
      </div>
    </div>
  </div>
  <div class="timeline-container none"></div>
</template>
