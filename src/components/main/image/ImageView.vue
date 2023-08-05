<script setup lang="ts">
import backgroundImage from "@/assets/images/fry.jpg";
import { useContentStore } from "@/stores";
import { storeToRefs } from "pinia";
const contentStore = useContentStore();
const content = storeToRefs(contentStore);
</script>

<template>
  <div class="content">
    <img :src="content.selectedContent.value?.url" />
    <div class="shadow" />
    <div
      class="background"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    />
  </div>
</template>

<style scoped lang="scss">
@import "@/style/constants.scss";
.content {
  user-select: none;
  z-index: 0;
  min-height: $imageHeight + 1vh;
  position: relative;
  display: flex;
  width: 100%;
  margin: auto;
  border: 5px rgba(255, 255, 255, 0) solid;
  border-radius: $border;
  background-color: rgba(0, 0, 0, 0.76);
}
img {
  overflow: hidden;
  margin: auto;
  max-height: $imageHeight;
  object-fit: contain;
  object-position: top;
  border-radius: $border;
}
.shadow,
.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: inherit;
}
.shadow {
  z-index: 1;
  box-shadow: 0px 0px 16px 8px $shadowColor inset;
}
.background {
  z-index: -1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px) brightness(50%);
}
</style>
