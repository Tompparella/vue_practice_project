<script setup lang="ts">
import { default as RateButton } from "./RateButton.vue";
import { default as RatingBar } from "./RatingBar.vue";
const onLike = () => console.log("Like");
const onDislike = () => console.log("Dislike");
</script>

<template>
  <div class="bottom">
    <RateButton color="red" @onPress="onDislike" />
    <RatingBar :rating="70" />
    <RateButton color="green" @onPress="onLike" />
  </div>
</template>

<style scoped lang="scss">
.bottom {
  flex: 1;
  display: flex;
  margin-top: 10px;
  margin-inline: 15px;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
