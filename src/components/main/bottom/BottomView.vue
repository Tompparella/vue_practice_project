<script setup lang="ts">
import { default as RateButton } from "./RateButton.vue";
import { default as RatingBar } from "./RatingBar.vue";
import { default as ReportButton } from "./ReportButton.vue";
const onLike = () => console.log("Like");
const onDislike = () => console.log("Dislike");
const onReport = () => console.log("Report");
</script>

<template>
  <div class="bottom">
    <RateButton color="red" @onPress="onDislike" />
    <RatingBar :rating="80" />
    <RateButton color="green" @onPress="onLike" />
    <ReportButton @onPress="onReport" />
  </div>
</template>

<style scoped lang="scss">
.bottom {
  padding-block: 0.5vh;
  flex: 1;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-start;
}
</style>
