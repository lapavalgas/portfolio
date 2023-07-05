<script setup lang="ts">
const props = defineProps({ data: Object });
</script>
<template>
  <!-- TIMELINE CONTAINER RIGHT -->
  <div class="timeline-container right">
    <div class="timeline-container-content">
      <h5 class="display-none">{{ data.date }}</h5>
      <span class="timeline-arrow"></span>
      <p class="timeline-containter-content-type">{{ data.type }}</p>
      <p></p>
      <p>
        <span class="timeline-containter-content-title">{{ data.title }}</span>
        <br />{{ data.institution }} <br />{{ data.local }} <br />{{
          data.level
        }}
        <br />
      </p>
      <!-- <p><a href="">Ver mais...</a></p> -->
      <div class="time-line-content-more">
        <p>
          {{ data.description }}
        </p>
      </div>
    </div>
  </div>
  <div class="timeline-container none"></div>
</template>

<style scoped>
.time-line-content-more-description-right {
  text-align: right;
}
.time-line-content-more-description-left {
  text-align: left;
}
</style>
